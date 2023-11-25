// 7. Write a program in C to delete the first node of a Singly Linked List.
// Test Data :
// Input the number of nodes : 3
// Input data for node 1 : 2
// Input data for node 2 : 3
// Input data for node 3 : 4
// Expected Output :

//  Data entered in the list are :                                                                               
//  Data = 2                                                                                                     
//  Data = 3                                                                                                     
//  Data = 4                                                                                                     
                                                                                                              
//  Data of node 1 which is being deleted is :  2                                                                
                                                                                                              
//  Data, after deletion of first node :                                                                         
//  Data = 3                                                                                                     
//  Data = 4 

import SingleLinkedList from "./LinkedList.js";

const linkedList = new SingleLinkedList();
linkedList.insert(0, 2);
linkedList.insert(1, 3);
linkedList.insert(2, 4);
linkedList.delete(0);
let temportHead = linkedList.head;

while (temportHead.next !== null) {
    temportHead = temportHead.next;
    console.log("tem",temportHead);
}