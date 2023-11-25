// 13. Write a C program to merge two sorted singly linked lists into a single sorted linked list.
// Test Data and Expected Output :

// Two sorted singly linked lists:
// 1 3 5 7 
// 2 4 6 

// After merging the said two sorted lists:
// 1 2 3 4 5 6 7 

import SingleLinkedList from "./LinkedList.js";

const linkedList = new SingleLinkedList();
linkedList.insert(0, 1);
linkedList.insert(1, 3);
linkedList.insert(2, 5);
linkedList.insert(3, 7);

const linkedList2 = new SingleLinkedList();
linkedList2.insert(0, 2);
linkedList2.insert(1, 4);
linkedList2.insert(2, 6);

let array=[];
let i=0;
let temportHead = linkedList.head;
while (temportHead.next !== null) {
    temportHead = temportHead.next;
    array[i]=temportHead.data;
    i=i+2;
}

let j=1;
let temportHead2 = linkedList2.head;
while (temportHead2.next !== null) {
    temportHead2 = temportHead2.next;
    array[j]=temportHead2.data;
    j=j+2;
}

console.log("array",array);