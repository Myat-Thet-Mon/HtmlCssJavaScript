export default class DoublyLinkedList {
    constructor() {
        this.head = new SingleNode();
        this.tail = new SingleNode();
    }
    insert(index, data) {

        const newNode = new SingleNode();
        newNode.data = data;
        let temTail = this.tail;
        let temportHead = this.head;
        if (this.size() > 1) {
            let size = Math.ceil(this.size() / 2);
            if (size >= index) {
                //head
                console.log("HHHHHHH")

                for (let i = 0; i < index; i++) {
                    if (temportHead.next !== null) {
                        temportHead = temportHead.next;
                    }
                }
            } else {
                //tail
                console.log("TTTTTTT")
                for (let i = 0; i < this.size - index; i++) {

                    if (temTail.previous !== null) {
                        temTail = temTail.previous;
                    }
                }
            }
        }
        console.log("temp", temportHead);
        console.log("tem tail", temTail);
        newNode.next = temportHead.next;
        newNode.previous = temportHead;
        temportHead.next.previous = newNode;
        temportHead.next = newNode;

    }
    insertFirst(data) {
        const newNode = new SingleNode();
        newNode.data = data;
        newNode.next = this.head.next;

        if (this.head.next === null) {
            this.head.next = newNode;
            this.tail.previous = newNode;
        } else {
            this.head.next.previous = newNode;
            this.head.next = newNode;
        }


    }
    insertLast(data) {
        const newNode = new SingleNode();
        newNode.data = data;
        newNode.previous = this.tail.previous;
        if (this.tail.previous === null) {
            this.head.next = newNode;
            this.tail.previous = newNode;
        } else {
            this.tail.previous.next = newNode;
            this.tail.previous = newNode;
        }

    }
    get(index) {
        let temTail = this.tail;
        let temportHead = this.head;

        if (this.size() > 1) {
            let size = Math.ceil(this.size() / 2);
            if (size >= index) {
                //head
                for (let i = 0; i < index; i++) {
                    if (temportHead.next !== null) {
                        temportHead = temportHead.next;
                    }
                }
                return temportHead.data;
            } else {
                // //tail
                for (let i = 0; i <= this.size() - index; i++) {
                    temTail = temTail.previous;
                }
                return temTail.data;
            }

        }

    }
    size() {
        let temportHead = this.head;
        let count = 0;
        while (temportHead.next !== null) {
            temportHead = temportHead.next;
            count++;
        }
        return count;
    }
    delete(index) {

    }
}

class SingleNode {
    constructor(data, next = null, previous = null) {
        this.data = data;
        this.next = next;
        this.previous = previous;
    }
}