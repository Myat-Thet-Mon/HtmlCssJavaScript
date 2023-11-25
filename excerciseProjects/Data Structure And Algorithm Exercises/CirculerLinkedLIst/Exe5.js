// 5. Write a program in C to insert a new node at the end of a Singly Linked List.
// Test Data and Expected Output :


// Input the number of nodes : 3                                                                                
//  Input data for node 1 : 5                                                                                    
//  Input data for node 2 : 6                                                                                    
//  Input data for node 3 : 7                                                                                    
                                                                                                              
//  Data entered in the list are :                                                                               
//  Data = 5                                                                                                     
//  Data = 6                                                                                                     
//  Data = 7                                                                                                     
                                                                                                              
//  Input data to insert at the end of the list : 8                                                              
                                                                                                              
//  Data, after inserted in the list are :                                                                       
//  Data = 5                                                                                                     
//  Data = 6                                                                                                     
//  Data = 7                                                                                                     
//  Data = 8

import DoublyLinedList from "./DoublyLinkedList.js";

const doublyLinkedList=new DoublyLinedList();
doublyLinkedList.insert(1,5);
doublyLinkedList.insert(2,6);
doublyLinkedList.insert(3,7);
doublyLinkedList.insertLast(8);
doublyLinkedList.insertLast(9);


let temHead=doublyLinkedList.head;

while (temHead.next !== null && temHead.next !== doublyLinkedList.head) {
    temHead = temHead.next;
    console.log("tem",temHead);
}