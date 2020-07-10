class Queue {

    constructor(){
        this.item = [];
    }

    //enqueue
    Enqeue(data){
            this.item.push(data);
    } 

    //dequeue
    Dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        return this.item.shift();
    }

    Front(){
        return this.item[0];
    }

    Size(){
        return this.item.length;
    }

    isEmpty(){
        if(this.item.length === 0){
            return true;
        }else{
            return false;
        }
    }
}