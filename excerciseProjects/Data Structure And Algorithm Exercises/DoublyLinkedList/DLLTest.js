import DoublyLinkedList from "./DoublyLinedList1.js";

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.insertFirst("e");
doublyLinkedList.insertFirst("d");
doublyLinkedList.insertFirst("c");
doublyLinkedList.insertFirst("a");

console.log("Get",doublyLinkedList.get(3));

// console.log("Size", doublyLinkedList.size())
// doublyLinkedList.insert(3, "f");

let temportHead = doublyLinkedList.head;
// console.log("head next",temportHead.next)
console.log("Tail",doublyLinkedList.tail.previous);
while (temportHead.next !== null) {
    temportHead = temportHead.next;
    // console.log("tem", temportHead);
    // console.log("tem next", temportHead.next)
    // console.log("tem pre", temportHead.previous)


}
