class SingleNode {
    constructor(data,previous=null) {
        this.data = data;
        this.previous =previous;
    }
}
export default class Stack{
    constructor() {
        this.pointer = new SingleNode();
    }
    push(data){
        let newNode=new SingleNode;
        newNode.data=data;
        newNode.previous=this.pointer.previous;
        this.pointer.previous=newNode;
    }
    pop(){
        let data=this.pointer.previous.data;
        this.pointer.previous=this.pointer.previous.previous;
        return data;
    }
    peek(){
        let data=this.pointer.previous.data;
        this.pointer=this.pointer.previous;
        return data;
    }

}