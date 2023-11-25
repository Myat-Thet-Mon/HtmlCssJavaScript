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

import SingleLinkedList from "./LinkedList.js";

const linkedList = new SingleLinkedList();
linkedList.insert(0, 2);
linkedList.insert(1, 5);
linkedList.insert(2, 8);
let temportHead = linkedList.head;
let count = 0;
while (temportHead.next !== null) {
    temportHead = temportHead.next;
    if (temportHead.data !== 5) {
        count++;
    } else {
        break;
    }
}
console.log("index", index)