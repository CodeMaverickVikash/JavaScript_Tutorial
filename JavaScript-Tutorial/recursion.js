/**
 * Recursion is a programming concept where a function calls itself in order to solve a problem. recursion is a powerful technique that can be used to solve problems in a more elegant and concise way.
 * Base Case: A base case is a condition that stops the recursive calls. It's essential to have a base case to prevent infinite recursion.
 * Recursive Case: The recursive case defines the logic of the function and includes the recursive call. It's the part of the function that breaks the problem into smaller subproblems.
 * ✅ When to Prefer Recursion:
    When the problem is naturally recursive (e.g., tree traversal)
    When the recursive version is clearer than the iterative one
    When using divide-and-conquer algorithms (Merge Sort, Quick Sort)
 */
function factorial(n) {
    // Base case
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Recursive case
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // 120
