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

import SingleLinkedList from "./LinkedList.js";

const linkedList = new SingleLinkedList();
linkedList.insert(0, 1);
linkedList.insert(1, 2);
linkedList.insert(2, 3);
linkedList.delete(linkedList.size());
let temportHead = linkedList.head;

while (temportHead.next !== null) {
    temportHead = temportHead.next;
    console.log("tem",temportHead.data);
}