// 2. Write a program in C to create a singly linked list of n nodes and display it in reverse order.
// Test Data :
// Input the number of nodes : 3
// Input data for node 1 : 5
// Input data for node 2 : 6
// Input data for node 3 : 7
// Expected Output :

//  Data entered in the list are :                                                                               
//  Data = 5                                                                                                     
//  Data = 6                                                                                                     
//  Data = 7                                                                                                     

//  The list in reverse are :                                                                                    
//  Data = 7                                                                                                     
//  Data = 6                                                                                                     
//  Data = 5 

import SingleLinkedList from "./LinkedList.js";

const linkedList = new SingleLinkedList();
linkedList.insert(0, 5);
linkedList.insert(1, 6);
linkedList.insert(2, 7);

let i = 3;
while (i >= 1) {
    console.log(linkedList.get(i));
    i--;
}


