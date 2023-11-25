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
import SingleLinkedList from "./LinkedList.js";

const linkedList = new SingleLinkedList();
linkedList.insertLast(5);
linkedList.insertLast(6);
linkedList.insertLast(7);
linkedList.insert(2,"A");
let temportHead = linkedList.head;

while (temportHead.next !== null) {
    temportHead = temportHead.next;
    console.log("tem",temportHead);
}


