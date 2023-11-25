// 6. Write a program in C to insert a node in the middle of a Singly Linked List.
// Test Data and Expected Output :

// Input the number of nodes (3 or more) : 4                                                                    
//  Input data for node 1 : 1                                                                                    
//  Input data for node 2 : 2                                                                                    
//  Input data for node 3 : 3                                                                                    
//  Input data for node 4 : 4                                                                                    
                                                                                                              
//  Data entered in the list are :                                                                               
//  Data = 1                                                                                                     
//  Data = 2                                                                                                     
//  Data = 3                                                                                                     
//  Data = 4                                                                                                     
                                                                                                              
//  Input data to insert in the middle of the list : 5                                                           
//  Input the position to insert new node : 3                                                                    
                                                                                                              
//  Insertion completed successfully.                                                                             
                                                                                                              
//  The new list are :                                                                                           
//  Data = 1                                                                                                     
//  Data = 2                                                                                                     
//  Data = 5                                                                                                     
//  Data = 3                                                                                                     
//  Data = 4  

import DoublyLinedList from "./DoublyLinkedList.js";

const doublyLinkedList=new DoublyLinedList();
doublyLinkedList.insert(0, 1);
doublyLinkedList.insert(1, 2);
doublyLinkedList.insert(2, 3);
doublyLinkedList.insert(3, 4);
doublyLinkedList.insert(2,5)
let temHead=doublyLinkedList.head;

while (temHead.next !== null && temHead.next !== doublyLinkedList.head) {
    temHead = temHead.next;
    console.log("tem",temHead);
}
