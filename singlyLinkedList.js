
class SinglyLinkedList {
    constructor() {
        SinglyLinkedList.store = [];
        this.head = null;
        this.tail = null;
        this.length = 0;
        SinglyLinkedList.count = -1;
    }
    
    static loop(obj) {
        obj.head = SinglyLinkedList.store[0];
        for(let i = 1; i<SinglyLinkedList.store.length;i++){
            SinglyLinkedList.store[i-1].next = SinglyLinkedList.store[i];
                     if(i === SinglyLinkedList.store.length - 1){
                     obj.tail = SinglyLinkedList.store[i];       
                 }
             }
             obj.length = SinglyLinkedList.store.length;
    }
    push(value) {
        SinglyLinkedList.count++;
        let node = new Node(value);
        SinglyLinkedList.store[SinglyLinkedList.count] = node;
        SinglyLinkedList.loop(this);
        return this;
    }
    pop() {
        if(SinglyLinkedList.store.length){
            let popNode = SinglyLinkedList.store[SinglyLinkedList.count];
            SinglyLinkedList.store = SinglyLinkedList.store.slice(0,SinglyLinkedList.count);
            this.length = SinglyLinkedList.store.length;
            return popNode.val;
        }
        return undefined;
    }

    unshift(value) {
        let node = new Node(value);
        SinglyLinkedList.store.unshift(node);
        SinglyLinkedList.loop(this);
        return this;
    }

    shift()  {
        if(SinglyLinkedList.store.length){
            let shiftNode = SinglyLinkedList.store[0];
            SinglyLinkedList.store = SinglyLinkedList.store.slice(1);
            this.length = SinglyLinkedList.store.length;
            return shiftNode.val;
        }
        return undefined;
    }

    set(index,value) {
        for(let i = 0; i<=SinglyLinkedList.store.length-1;i++) {
            if(i === index) {
                SinglyLinkedList.store[i].val = value;
                SinglyLinkedList.loop(this);
                return true;
            }
        }
        return false;
    }

    get(index) {
       for(let i = 0; i <= SinglyLinkedList.store.length-1;i++){
           if(i === index) {
               return SinglyLinkedList.store[i].val;
           }
       }
       return null;
    }

    insert(index, node) {
        let newNode = new Node(node);
        SinglyLinkedList.store.splice(index,0,newNode);
        SinglyLinkedList.loop(this);
        return this.length;
    }

    remove(index) {
        let removed;
        let temp = [];
        for(let i = 0; i<=SinglyLinkedList.store.length-1;i++){
            if(i === index) {
                removed = SinglyLinkedList.store[i];
                continue;
            }
            temp.push(SinglyLinkedList.store[i]);
        }
        SinglyLinkedList.store = [...temp];
        SinglyLinkedList.loop(this);
        return removed.val;
    }

    reverse() {
        SinglyLinkedList.store.reverse();
        SinglyLinkedList.loop(this);
        return SinglyLinkedList.store;
    }
}

function Node(value) {
    this.val = value;
    this.next = null;
}