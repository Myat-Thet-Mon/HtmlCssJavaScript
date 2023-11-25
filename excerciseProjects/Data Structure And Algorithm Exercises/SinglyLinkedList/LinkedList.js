export default class SingleLinkedList {
    constructor() {
        this.head = new SingleNode();
    }
    insert(index, data) {
        const newNode = new SingleNode();
        newNode.data = data;
        let temportHead = this.head;
        for (let i = 0; i < index; i++) {
            if (temportHead.next !== null) {
                temportHead = temportHead.next;
            }

        }
       console.log("temhead",temportHead);
        newNode.next = temportHead.next;
        temportHead.next = newNode;
    };

    insertFirst(data) {
        const newNode = new SingleNode();
        newNode.data = data;
        newNode.next = this.head.next;
        this.head.next = newNode;
    };

    insertLast(data) {
        const newNode = new SingleNode();
        newNode.data = data;
        let temportHead = this.head;
        while (temportHead.next !== null) {
            temportHead = temportHead.next;
           
        }
        newNode.next = temportHead.next;
        temportHead.next = newNode;

    }

    get(index) {
        let temportHead = this.head;
        for (let i = 0; i < index; i++) {
            temportHead = temportHead.next;
        }
        return temportHead.data;
    };

    size() {
        let temportHead = this.head;
        let count=0;
        while (temportHead.next !== null) {
            temportHead = temportHead.next;
            count++; 
        }
        return count;
    }

    delete(index) {
        let temportHead = this.head;
        for (let i = 0; i < index - 1; i++) {
            temportHead = temportHead.next;
        }
        temportHead.next = temportHead.next.next;
    }

}

class SingleNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
// const linkedList = new SingleLinkedList();
// linkedList.insertFirst('a');
// linkedList.insert(1, 'b');
// linkedList.insert(2, 'c');
// linkedList.insert(4, 'd');
// linkedList.insert(5, 'e');
// linkedList.insertLast("f");
// linkedList.size();
// console.log(linkedList.get(2));
// linkedList.delete(2);
// console.log(linkedList.get(2));


// h -|
// th -> a

//  d,ne ->   a,ne -> b,ne-> null

//  c, next

//  insert(2, 'c'); // d, a, c, b