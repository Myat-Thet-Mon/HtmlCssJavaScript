// 9. Write a program in C to delete the last node of a Singly Linked List.
// Test Data :
// Input the number of nodes : 3
// Input data for node 1 : 1
// Input data for node 2 : 2
// Input data for node 3 : 3
// Expected Output :

//  Data entered in the list are :                                                                               
//  Data = 1                                                                                                     
//  Data = 2                                                                                                     
//  Data = 3                                                                                                     
                                                                                                              
//  The new list after deletion the last node are  :                                                             
//  Data = 1                                                                                                     
//  Data = 2 

import DoublyLinedList from "./DoublyLinkedList.js";

const doublyLinkedList=new DoublyLinedList();
doublyLinkedList.insertLast(1);
doublyLinkedList.insertLast(5);
doublyLinkedList.insertLast(2);
doublyLinkedList.insertLast(4);
doublyLinkedList.delete(doublyLinkedList.size());

let temHead=doublyLinkedList.head;

while (temHead.next !== null && temHead.next !== doublyLinkedList.head) {
    temHead = temHead.next;
    console.log("tem",temHead);
}