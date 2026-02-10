// Documentation Viewer JavaScript

// State management
const state = {
    currentFile: null,
    currentSection: null,
    docContent: null,
    interviewContent: null
};

// DOM Elements
const docTopics = document.getElementById('doc-topics');
const interviewTopics = document.getElementById('interview-topics');
const contentBody = document.getElementById('content-body');
const breadcrumb = document.getElementById('breadcrumb');
const toggleSidebar = document.getElementById('toggle-sidebar');
const sidebar = document.querySelector('.sidebar');
const scrollTopBtn = document.getElementById('scroll-top');
const searchInput = document.getElementById('search-input');

// Initialize the app
async function init() {
    try {
        // Load both markdown files
        await loadMarkdownFiles();

        // Populate sidebar navigation
        populateSidebar();

        // Setup event listeners
        setupEventListeners();

        console.log('Documentation viewer initialized successfully');
    } catch (error) {
        console.error('Error initializing app:', error);
        showError('Failed to load documentation files');
    }
}

// Load markdown files
async function loadMarkdownFiles() {
    try {
        const [docResponse, interviewResponse] = await Promise.all([
            fetch('JS_DOCUMENTATION.md'),
            fetch('JS_INTERVIEW_PREP.md')
        ]);
        
        if (!docResponse.ok || !interviewResponse.ok) {
            throw new Error('Failed to fetch markdown files');
        }
        
        state.docContent = await docResponse.text();
        state.interviewContent = await interviewResponse.text();
    } catch (error) {
        console.error('Error loading markdown files:', error);
        throw error;
    }
}

// Extract topics from markdown content
function extractTopics(markdown) {
    const topics = [];
    const lines = markdown.split('\n');
    
    for (let line of lines) {
        // Match ## headings (level 2)
        const match = line.match(/^##\s+(.+)$/);
        if (match) {
            const title = match[1].trim();
            // Skip "Table of Contents" and similar meta sections
            if (!title.toLowerCase().includes('table of contents') && 
                !title.toLowerCase().includes('from basic to advanced')) {
                topics.push({
                    title: title,
                    id: title.toLowerCase()
                        .replace(/[^\w\s-]/g, '')
                        .replace(/\s+/g, '-')
                });
            }
        }
    }
    
    return topics;
}

// Populate sidebar with topics
function populateSidebar() {
    // Extract and populate documentation topics
    const docTopicsList = extractTopics(state.docContent);
    docTopics.innerHTML = docTopicsList.map(topic =>
        `<li data-file="doc" data-section="${topic.id}">${topic.title}</li>`
    ).join('');

    // Extract and populate interview topics
    const interviewTopicsList = extractTopics(state.interviewContent);
    interviewTopics.innerHTML = interviewTopicsList.map(topic =>
        `<li data-file="interview" data-section="${topic.id}">${topic.title}</li>`
    ).join('');

    // Add click listeners to all topic items
    document.querySelectorAll('.nav-section li').forEach(item => {
        item.addEventListener('click', () => {
            const file = item.dataset.file;
            const section = item.dataset.section;
            loadSection(file, section);

            // Update active state
            document.querySelectorAll('.nav-section li').forEach(li => li.classList.remove('active'));
            item.classList.add('active');

            // Close sidebar on mobile
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });
}

// Load and display a specific section
function loadSection(file, sectionId) {
    const content = file === 'doc' ? state.docContent : state.interviewContent;
    const fileName = file === 'doc' ? 'Documentation' : 'Interview Prep';

    // Find the section in the markdown
    const section = extractSection(content, sectionId);

    if (section) {
        // Convert markdown to HTML
        const html = marked.parse(section);

        // Display content
        contentBody.innerHTML = `<div class="markdown-content">${html}</div>`;

        // Apply syntax highlighting
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });

        // Update breadcrumb
        updateBreadcrumb(fileName, sectionId);

        // Scroll to top
        contentBody.scrollTop = 0;

        // Update state
        state.currentFile = file;
        state.currentSection = sectionId;
    } else {
        showError('Section not found');
    }
}

// Extract a specific section from markdown
function extractSection(markdown, sectionId) {
    const lines = markdown.split('\n');
    let inSection = false;
    let sectionContent = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Check if this is the start of our section
        if (line.match(/^##\s+/)) {
            const title = line.replace(/^##\s+/, '').trim();
            const id = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

            if (id === sectionId) {
                inSection = true;
                sectionContent.push(line);
                continue;
            } else if (inSection) {
                // We've hit the next section, stop
                break;
            }
        }

        if (inSection) {
            sectionContent.push(line);
        }
    }

    return sectionContent.join('\n');
}

// Update breadcrumb navigation
function updateBreadcrumb(fileName, sectionId) {
    const sectionName = sectionId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    breadcrumb.innerHTML = `
        <span>Home</span>
        <span>›</span>
        <span>${fileName}</span>
        <span>›</span>
        <span>${sectionName}</span>
    `;
}

// Show error message
function showError(message) {
    contentBody.innerHTML = `
        <div class="welcome-screen">
            <h1>⚠️ Error</h1>
            <p>${message}</p>
        </div>
    `;
}

// Setup event listeners
function setupEventListeners() {
    // Toggle sidebar on mobile
    toggleSidebar.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Scroll to top button
    scrollTopBtn.addEventListener('click', () => {
        contentBody.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterTopics(searchTerm);
    });

    // Quick link cards
    document.querySelectorAll('.quick-link-card').forEach(card => {
        card.addEventListener('click', () => {
            const file = card.dataset.file === 'JS_DOCUMENTATION.md' ? 'doc' : 'interview';

            // Load first section of the selected file
            const topics = file === 'doc' ?
                extractTopics(state.docContent) :
                extractTopics(state.interviewContent);

            if (topics.length > 0) {
                loadSection(file, topics[0].id);

                // Highlight in sidebar
                const listItem = document.querySelector(`li[data-file="${file}"][data-section="${topics[0].id}"]`);
                if (listItem) {
                    document.querySelectorAll('.nav-section li').forEach(li => li.classList.remove('active'));
                    listItem.classList.add('active');
                }
            }
        });
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 &&
            !sidebar.contains(e.target) &&
            !toggleSidebar.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
}

// Filter topics based on search term
function filterTopics(searchTerm) {
    document.querySelectorAll('.nav-section li').forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
