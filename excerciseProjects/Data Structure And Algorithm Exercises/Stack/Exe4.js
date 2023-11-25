// 4. Write a C program that accepts a string and reverse it using a stack. >
// Expected Output:

// Input a string: w3resource
//  Reversed string using a stack is: ecruoser3w
import Stack from "./Stack.js";

let stack=new Stack();
// stack.push("w");
// stack.push(3);
// stack.push("r");
// stack.push("e");
// stack.push("s");
// stack.push("o");
// stack.push("u");
// stack.push("r");
// stack.push("c");
// stack.push("e");
let inputString="w3resource";
for(let i=0;i<inputString.length;i++){
    stack.push(inputString.charAt(i));
}
while(stack.pointer.previous !== null){
    console.log("data",stack.peek());
}
