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

import SingleLinkedList from "./LinkedList.js";

const linkedList = new SingleLinkedList();
linkedList.insert(0, 5);
linkedList.insert(1, 7);
linkedList.insert(2, 8);
linkedList.insertLast(9)
console.log(linkedList.get(4));
