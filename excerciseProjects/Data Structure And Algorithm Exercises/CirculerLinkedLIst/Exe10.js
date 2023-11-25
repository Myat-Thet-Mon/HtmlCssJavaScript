// 10. Write a program in C to search for an existing element in a singly linked list.
// Test Data and Expected Output :

// Input the number of nodes : 3                                                                                
                                                                                                              
//  Input data for node 1 : 2                                                                                    
//  Input data for node 2 : 5                                                                                    
//  Input data for node 3 : 8                                                                                    
                                                                                                              
//  Data entered in the list are :                                                                               
//  Data = 2                                                                                                     
//  Data = 5                                                                                                     
//  Data = 8                                                                                                     
                                                                                                              
//  Input the element to be searched : 5                                                                         
//  Element found at node 2 

import DoublyLinedList from "./DoublyLinkedList.js";

const doublyLinkedList=new DoublyLinedList();
doublyLinkedList.insertLast(2);
doublyLinkedList.insertLast(8);
doublyLinkedList.insertLast(4);
doublyLinkedList.insertLast(5);


let temHead=doublyLinkedList.head;
let count=0;
while (temHead.next !== null && temHead.next !== doublyLinkedList.head) {
    temHead = temHead.next;
    count++;
    if(temHead.data === 5){
        console.log("Node",count);
    }
}