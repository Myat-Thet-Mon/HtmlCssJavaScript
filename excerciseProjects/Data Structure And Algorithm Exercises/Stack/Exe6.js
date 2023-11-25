// 6. Write a C program to sort a given stack using another stack. >
// Expected Output:

// Original stack: 1 5 5 2 3 8 
// Sorted stack: 1 2 3 5 5 8 

import Stack from "./Stack.js";

let stack=new Stack();
stack.push(1);
stack.push(5);
stack.push(5);
stack.push(2);
stack.push(3);
stack.push(8);

let pointer=stack.pointer;
while(pointer.previous !== null){
    pointer = pointer.previous;
    console.log("pointer",pointer);
    let newPointer=pointer;
    while(newPointer.previous !== null){
        console.log("new pointer",newPointer.previous);
        newPointer=newPointer.previous;

    }
}