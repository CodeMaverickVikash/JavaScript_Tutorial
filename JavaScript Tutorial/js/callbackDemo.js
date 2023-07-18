function runAfterElementExists(eleSelector, callback) {
    var checker = window.setInterval(function () {
        if ($(eleSelector).length) {
            clearInterval(checker);
            callback();
        }
    }, 200);
}


runAfterElementExists('#demo', function () {
    const elem = $('#demo');
    console.log(elem);
});

setTimeout(() => {
    makeElement();
}, 3000);

function makeElement() {
    let p = document.createElement('p');
    p.innerText = "This is a paragraph";
    p.setAttribute('id', 'demo');
    document.body.appendChild(p);
}