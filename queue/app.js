//create queue class 
class Queue {
    constructor() {
        this.queue = [];
    }

    // push from start 
    push(element) {
        this.queue.unshift(element);
    }

    // pop from end
    pop() {
        this.queue.pop();
    }

    // print all elements
    printAll() {
        this.queue.forEach(x => {
            console.log(x);
        })
    }
}

let queue = new Queue();
queue.push(5);
queue.push(55);
queue.printAll();

queue.pop();
queue.printAll();

