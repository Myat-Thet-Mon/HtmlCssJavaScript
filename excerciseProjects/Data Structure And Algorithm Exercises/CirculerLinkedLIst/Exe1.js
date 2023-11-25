// 1. Write a program in C to create and display a Singly Linked List.
// Test Data :
// Input the number of nodes : 3
// Input data for node 1 : 5
// Input data for node 2 : 6
// Input data for node 3 : 7
// Expected Output :

//  Data entered in the list :                                                                                   
//  Data = 5                                                                                                     
//  Data = 6                                                                                                     
//  Data = 7 

import DoublyLinedList from "./DoublyLinkedList.js";

const doublyLinkedList=new DoublyLinedList();
doublyLinkedList.insertLast(5);
doublyLinkedList.insertLast(6);
doublyLinkedList.insertLast(7);
 
let temHead=doublyLinkedList.head;

while (temHead.next !== null && temHead.next !== doublyLinkedList.head) {
    temHead = temHead.next;
    console.log("tem",temHead);
}

