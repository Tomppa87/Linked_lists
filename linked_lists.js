class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        let newNode = new Node(value)
        while (!this.head) {
            this.head = newNode;
            return
        };
        let currentNode = this.head
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = newNode;

    }
    toString() {
        let currentNode = this.head
        let output = ""
        while (currentNode.nextNode) {
            output += "( "+ currentNode.value + " ) -> "; 
            currentNode = currentNode.nextNode;
        };       
        output += "( " + currentNode.value + " ) -> null"
        console.log(output)     
    }
}

class Node {
    constructor (value) {
        this.value = value;
        this.nextNode = null;
    }
};

let newLinkedList = new LinkedList;
newLinkedList.append(10);
newLinkedList.append(5);
newLinkedList.toString();
