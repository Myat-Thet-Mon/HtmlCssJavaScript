// 16. Write a C program to remove duplicates from a single unsorted linked list.
// Test Data and Expected Output :

// Original Singly List:
// 1 2 3 3 4 
// After removing duplicate elements from the said singly list:
// 1 2 3 4 

// Original Singly List:
// 1 2 3 3 4 4 
// After removing duplicate elements from the said singly list:
// 1 2 3 4 

import SingleLinkedList from "./LinkedList.js";

const linkedList = new SingleLinkedList();
linkedList.insertLast(1);
linkedList.insertLast(2);
linkedList.insertLast(3);
linkedList.insertLast(3);
 linkedList.insertLast(3);
// linkedList.insertLast(3);
linkedList.insertLast(4);
linkedList.insertLast(4);
linkedList.insertLast(5);


let tempHead = linkedList.head;
let count=0;
while (tempHead !== null && tempHead.next !== null) {
    count++;
    tempHead = tempHead.next;
    console.log("head",tempHead)
    let temp = tempHead.next;
    while (temp !== null ) {
        console.log("Temmmm",temp)
        if(tempHead.data === temp.data ){
            linkedList.delete(count);
            tempHead.data=temp.data;
        }
        
        temp = temp.next;
        
    }

};

let temportHead = linkedList.head;

while (temportHead.next !== null) {
    temportHead = temportHead.next;
    console.log("ans",temportHead);
}

// console.log("Index",linkedList.get(5));

