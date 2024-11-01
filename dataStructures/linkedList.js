class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert at the end of the list
    append(data) {
        const node = new Node(data);
        if(!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    // insert at the beginning of the list
    prepend(data) {
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    // insert node at specified location
    insertAt(index, data) {
        const newNode = new Node(data);
        if(index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // remove a node
    remove(data) {
        if(!this.head) {
            return null
        }

        if(this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        while(current.next) {
            if(current.next.data === data) {
                current.next = current.next.next;
                this.size--;
                return;
            }
            current = current.next;
        }
    }

    print() {
        let elements = [];
        let current = this.head;
        while(current) {
            elements.push(current.data);
            current = current.next;
        }

        console.log(elements.join(' -> '));
    }

    // Clear linked list
    clear() {
        this.head = null;
        this.size = 0;
    }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.prepend(5);
list.print();