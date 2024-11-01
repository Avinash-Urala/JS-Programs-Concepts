// constructor() - initialize empty array to hold stack elements
// push() pop() peek() isEmpty() clear() size() print()

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
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

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.size());
stack.clear();
console.log(stack.isEmpty());



