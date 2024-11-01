// Queue is First In First Out (FIFO) data structure
// enqueue() dequeue() size()
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.unshift(element);
    }

    dequeue() {
        if(this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if(this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    clear() {
        this.items = [];
    } 
    size() {
        return this.items.length;
    } 
    print() {
        console.log(this.items.toString());
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.print();
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.print();
