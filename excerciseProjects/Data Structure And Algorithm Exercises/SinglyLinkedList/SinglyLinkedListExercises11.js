// 11. Write a C program that converts a singly linked list into a string and returns it.
// Test Data and Expected Output :


// Linked List: Convert a Singly Linked list into a string
// -------------------------------------------------------------
// Input the number of nodes: 3
//  Input data for node 1 : 10
//  Input data for node 2 : 20
//  Input data for node 3 : 30

// Return data entered in the list as a string:
// The linked list: 10 20 30

import SingleLinkedList from "./LinkedList.js";

const linkedList = new SingleLinkedList();
linkedList.insert(0, 10);
linkedList.insert(1, 20);
linkedList.insert(2, 30);
let temportHead = linkedList.head;
let finalString="";
while (temportHead.next !== null) {
    temportHead = temportHead.next;
    finalString+=temportHead.data +" ";
}
console.log("finaString",finalString)