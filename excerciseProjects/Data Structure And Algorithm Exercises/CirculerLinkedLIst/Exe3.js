// 3. Write a program in C to create a singly linked list of n nodes and count the number of nodes.
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
      
//  Total number of nodes = 3  
import DoublyLinedList from "./DoublyLinkedList.js";

const doublyLinkedList=new DoublyLinedList();
doublyLinkedList.insertLast(5);
doublyLinkedList.insertLast(6);
doublyLinkedList.insertLast(7);


console.log("Number of node:",doublyLinkedList.size())