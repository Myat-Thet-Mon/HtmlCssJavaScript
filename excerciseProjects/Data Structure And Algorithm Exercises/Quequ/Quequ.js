class SingleNode {
    constructor(data, next = null) {
        this.data = data;
        this.previous = this.previous;
    }
}
export default class Queue{
    constructor() {
        this.en = new SingleNode();
        this.dq=new SingleNode();
    }
    push(data){
        let newNode=new SingleNode();
        newNode.data=data;
        this.en.previous.previous=newNode;
        this.en.previous=newNode;
    }
    pop(){
        let data=this.dq.previous.data;
        this.dq.previous=this.dq.previous.previous;
        return data;
    }
    peek(){

    }
}