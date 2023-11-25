// 4. Write a program in C to insert a new node at the beginning of a Singly Linked List.
// Test Data and Expected Output :

//  Input the number of nodes : 3                                                                                
//  Input data for node 1 : 5                                                                                    
//  Input data for node 2 : 6                                                                                    
//  Input data for node 3 : 7                                                                                    
                                                                                                              
//  Data entered in the list are :                                                                               
//  Data = 5                                                                                                     
//  Data = 6                                                                                                     
//  Data = 7                                                                                                     
                                                                                                              
//  Input data to insert at the beginning of the list : 4                                                        
                                                                                                              
//  Data after inserted in the list are :                                                                        
//  Data = 4                                                                                                     
//  Data = 5                                                                                                     
//  Data = 6                                                                                                     
//  Data = 7  

import SingleLinkedList from "./LinkedList.js";

const linkedList = new SingleLinkedList();
linkedList.insert(0, 5);
linkedList.insert(1, 6);
linkedList.insert(2, 7);
console.log(linkedList.get(2));

