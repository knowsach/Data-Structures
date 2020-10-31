class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    //adds element in stack
    this.stack.push(element);
  }

  pop() {
    //removes element from stack
    if (!this.stack.length) {
      console.log("under flow.");
      return;
    }
    this.stack.pop();
  }

  printStack() {
    //print all elements in stack
    this.stack.forEach((s) => {
      console.log("stackk elements:", s);
    });
  }
}

let stack = new Stack();
stack.pop();
stack.push(1);
stack.push(2);

stack.printStack();

stack.pop();
stack.printStack();
