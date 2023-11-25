// 15. Write a C program to check if a singly linked list is a palindrome or not.
// Test Data and Expected Output :

// Original Singly List:
// 1 2 3 4 5
// Linked list is not a palindrome.

// Original Singly List:
// 1 2 2 1
// Linked list is a palindrome.

// Original Singly List:
// MADAM
// Linked list is a palindrome.

import SingleLinkedList from "./LinkedList.js";

const linkedList = new SingleLinkedList();
linkedList.insertLast(1);
linkedList.insertLast(2);
linkedList.insertLast(3);
linkedList.insertLast(2);
linkedList.insertLast(1);

let j=linkedList.size();
let isPalindrome=false;
 for(let i=1;i<=Math.floor(linkedList.size()/2);i++){
    if(linkedList.get(i) === linkedList.get(j)){
        isPalindrome=true;
        j--;
    }else{
        isPalindrome=false;
        break;
    }
 }
 console.log("Given list is palindrome :",isPalindrome);