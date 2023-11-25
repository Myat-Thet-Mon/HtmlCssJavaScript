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

import DoublyLinedList from "./DoublyLinkedList.js";

const doublyLinkedList=new DoublyLinedList();
doublyLinkedList.insertLast(5);
doublyLinkedList.insertLast(6);
doublyLinkedList.insertLast(7);
doublyLinkedList.insertLast(8);
doublyLinkedList.insertLast(9);

let temHead=doublyLinkedList.head;
 let last=null;
while (temHead.next !== null && temHead.next !== doublyLinkedList.head) {
    temHead = temHead.next;
    console.log("tem",temHead);
    console.log("tem next",temHead.next);
    console.log("tem previ",temHead.previous)
    if(temHead.next === doublyLinkedList.head){
        console.log("Last",temHead);
        last=temHead;
    }
}
for(let i=0;i<doublyLinkedList.size();i++){
    console.log("previous",last);
    last=last.previous;
}

