class Node {
    constructor (value) {
        this.value = value;
        this.nextNode = null;
    };
};

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
    };

    prepend(value) {
        let newHead = new Node (value);
        newHead.nextNode = this.head;
        this.head = newHead;
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



let newLinkedList = new LinkedList;
newLinkedList.append(10);
newLinkedList.append(5);
newLinkedList.prepend(7)
newLinkedList.toString();
