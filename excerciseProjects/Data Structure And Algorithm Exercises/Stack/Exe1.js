// Write a C program to implement a stack using an array with push and pop operations.
// Expected Output:

// Elements in the stack are: 3 5 4 3 2 1 

import Stack from "./Stack.js";

let stack=new Stack();
stack.push(3);
stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);

// stack.pop();
console.log("POP",stack.pop());
