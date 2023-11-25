// 3. Write a C program to check a stack is full or not using an array with push and pop operations. >
// Expected Output:

// Stack size: 3
// Original Stack: 1 2 3 
// Push another value and check if the stack is full or not!
// Stack is full!

// Stack size: 3
// Original Stack: 10 20 
// Check the said stack is full or not!
// Stack is not full!

import Stack from "./Stack.js";

let stack=new Stack();
stack.push(1);
stack.push(2);
// stack.push(3);

let count=0;
while(stack.pointer.previous !== null){
    count++;
    console.log("data",stack.peek());
}
if(count >= 3){
    console.log("Stack is full");
}else{
    console.log("Stack is not full");
}