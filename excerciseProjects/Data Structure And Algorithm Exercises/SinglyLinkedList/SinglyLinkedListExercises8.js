// 8. Write a program in C to delete a node from the middle of a Singly Linked List.
// Test Data and Expected Output :

// Input the number of nodes : 3                                                                                
//  Input data for node 1 : 2                                                                                    
//  Input data for node 2 : 5                                                                                    
//  Input data for node 3 : 8                                                                                    
                                                                                                              
//  Data entered in the list are :                                                                               
//  Data = 2                                                                                                     
//  Data = 5                                                                                                     
//  Data = 8                                                                                                     
                                                                                                              
//  Input the position of node to delete : 2                                                                     
                                                                                                              
//  Deletion completed successfully.                                                                             
                                                                                                              
//  The new list are  :                                                                                          
//  Data = 2                                                                                                     
//  Data = 8  

import SingleLinkedList from "./LinkedList.js";

const linkedList = new SingleLinkedList();
linkedList.insert(0, 2);
linkedList.insert(1, 5);
linkedList.insert(2, 8);
linkedList.delete(2);
let temportHead = linkedList.head;

while (temportHead.next !== null) {
    temportHead = temportHead.next;
    console.log("tem",temportHead.data);
}