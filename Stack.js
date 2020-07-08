class Stack {
//
    constructor(){
        this.item = []
    }

    push(data){
        this.item.push(data);
    }

    pop(){
        if(this.item.length === 0){
            return undefined;
        }
        this.item.pop();
    }

    peek(){
        return this.item.peek();
    }

    isEmpty(){
        if(this.item.length === 0){
            return true;
        }else{
            return false;
        }
    }

    printStack(){
        console.log(this.item);
    }
}


var stack = new Stack;

stack.push(1);
stack.push(2);
stack.push(3);

stack.printStack();
stack.isEmpty();