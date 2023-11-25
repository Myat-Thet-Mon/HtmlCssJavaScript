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

import DoublyLinedList from "./DoublyLinkedList.js";

const doublyLinkedList=new DoublyLinedList();
doublyLinkedList.insertLast(3);
doublyLinkedList.insertLast(4);
doublyLinkedList.insertLast(2);



let temHead=doublyLinkedList.head;
let count=0;
while (temHead.next !== null && temHead.next !== doublyLinkedList.head) {
    temHead = temHead.next;
    count++;
    if(temHead.data === 2){
        doublyLinkedList.delete(count);
    }
}


let temHead2=doublyLinkedList.head;
while (temHead2.next !== null && temHead2.next !== doublyLinkedList.head) {
    temHead2 = temHead2.next;
    console.log("tem",temHead2);
}