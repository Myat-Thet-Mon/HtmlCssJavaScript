import DoublyLinedList from "./DoublyLinkedList.js";

const doublyLinkedList=new DoublyLinedList();
 
doublyLinkedList.insertFirst("A");
doublyLinkedList.insert(1,"B");
doublyLinkedList.insert(2,"C");
doublyLinkedList.insert(3,"D");
doublyLinkedList.insertLast("E");
doublyLinkedList.insertLast("F");

console.log("doubly",doublyLinkedList.get(3));
doublyLinkedList.delete(3);
console.log("doubly",doublyLinkedList.get(5));
 console.log("size",doublyLinkedList.size())
