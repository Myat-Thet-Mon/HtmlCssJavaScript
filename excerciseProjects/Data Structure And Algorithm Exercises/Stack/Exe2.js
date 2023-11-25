// 2. Write a C program to implement a stack using a singly linked list.
// Expected Output:

//  Push data 1
//  Push data 2
//  Push data 3
//  Push data 4

//  Pop data: 4
//  Pop data: 3
//  Pop data: 2
//  Pop data: 1

//  Check a stack is empty or not?
//  Stack is empty!

import Stack from "./Stack.js";

let stack=new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);


// let pointer=stack.pointer;
// while(pointer.previous !== undefined){
//     pointer = pointer.previous;
//     console.log("pointer",pointer);
// }

while(stack.pointer.previous !== null){
    console.log("data",stack.peek());
}
