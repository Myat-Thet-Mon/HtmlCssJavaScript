// 17. Write a C program to sort a singly linked list using merge sort.
// Test Data and Expected Output :

// Sort the said singly linked list using merge sort:
// 2 3 1 7 5 

// After sorting the said list:
// 1 2 3 5 7 

import SingleLinkedList from "./LinkedList.js";

const linkedList = new SingleLinkedList();
linkedList.insertLast(2);
linkedList.insertLast(3);
linkedList.insertLast(1);
linkedList.insertLast(7);
linkedList.insertLast(5);

// let tempHead = linkedList.head;

// while (tempHead.next !== null) {
//     temportHead = temportHead.next;
//     console.log("tem",temportHead);
//     console.log("head head",temportHead.next);
//     let tem=temportHead.next;
//     while(tem !== null){
//         tem=tem.next;
//         console.log("temmmmmmmm",tem);
//     }
//     console.log("TTT",temportHead)
    
// }
let tempHead = linkedList.head;
while (tempHead !== null && tempHead.next !== null) {

    tempHead = tempHead.next;
    console.log("head next", tempHead);

    let temp = tempHead.next;
    while (temp !== null ) {
        console.log("temmmmmmmm", temp);
        if(tempHead.data > temp.data ){
            tempHead.data=temp.data;
        }
        temp = temp.next;

    }
}
