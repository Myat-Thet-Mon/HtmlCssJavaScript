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

import DoublyLinedList from "./DoublyLinkedList.js";

const doublyLinkedList=new DoublyLinedList();
doublyLinkedList.insertLast(3);
doublyLinkedList.insertLast(5);
doublyLinkedList.insertLast(2);
doublyLinkedList.insertLast(4);


let temHead=doublyLinkedList.head;
let count=0;
while (temHead.next !== null && temHead.next !== doublyLinkedList.head) {
    temHead = temHead.next;
    count++;
    if(count === 2){
        doublyLinkedList.delete(count);
    }
}

let temHead2=doublyLinkedList.head;
while (temHead2.next !== null && temHead2.next !== doublyLinkedList.head) {
    temHead2 = temHead2.next;
    console.log("tem",temHead2);
}