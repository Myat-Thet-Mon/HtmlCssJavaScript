export default class DoublyLinedList {
    constructor() {
        this.head = new SingleNode();
    }
    insert(index, data) {
        const newNode = new SingleNode();
        newNode.data = data;
        let temportHead = this.head;

        for (let i = 0; i < index; i++) {
            if (temportHead.next !== null && temportHead.next !== this.head) {
                temportHead = temportHead.next;
            } 
        }
        newNode.next = temportHead.next;
        if (newNode.next === null) {
            newNode.next = this.head;
        }
        newNode.previous = temportHead;
        temportHead.next = newNode;
       
    }
    insertFirst(data) {
        const newNode = new SingleNode();
        newNode.data = data;
        newNode.next = this.head.next;
        newNode.previous = this.head;
        this.head.next = newNode;
    }
    insertLast(data) {
        const newNode = new SingleNode();
        
        newNode.data = data;
        let temportHead = this.head;
        while (temportHead.next !== null && temportHead.next !== this.head) {
            temportHead = temportHead.next;
        }
        newNode.next = this.head;
        newNode.previous = temportHead;
        temportHead.next = newNode;
    }
    get(index) {
        let temportHead = this.head;
        for (let i = 0; i < index; i++) {
            temportHead.previous = temportHead;
            temportHead = temportHead.next;
        }
        return temportHead.data;
    }
    size() {
        let temportHead = this.head;
        let count = 0;
        while (temportHead.next !== this.head) {
            temportHead = temportHead.next;
            count++;
        }
        console
        return count;
    }
    delete(index) {
        let temportHead = this.head;
        for (let i = 0; i < index - 1; i++) {
            temportHead.previous = temportHead;
            temportHead = temportHead.next;
        }
        temportHead.next = temportHead.next.next;
        temportHead.previous = temportHead;
    }
}

class SingleNode {
    constructor(data, next = null, previous = null) {
        this.data = data;
        this.next = next;
        this.previous = previous;
    }
}