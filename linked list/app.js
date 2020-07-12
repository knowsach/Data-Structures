// class for a node in linked list
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

linkedList = new Node();

// add function in linnked list
function addNode(element) {

    let newNode = new Node(element);

    let currentNode = this.linkedList;

    if (!linkedList.element) {    // checking if no element is inserted.
        linkedList.element = element;
        linkedList.next = null;
    }
    else {
        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;

    }

}

function printLinkedList() {
    let node = new Node();
    node = linkedList;

    while (node.next) {
        console.log('linked nodes:', node.element);
        node = node.next;
    }

    console.log('linked nodes:', node.element);    // printing last element
}

addNode(4);
addNode(5);
addNode(44);
addNode(411114);
printLinkedList();