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
    };

    size() {
        let counter = 0;
        if (!this.head) {
            return counter;
        } else {
            counter += 1;
            let currentNode = this.head;
            while (currentNode.nextNode) {
                counter += 1;
                currentNode = currentNode.nextNode
            };
            return counter;
        };        
    };

    first() {
        return this.head.value
    };

    last() {
        let currentNode = this.head;
            while (currentNode.nextNode) {                
                currentNode = currentNode.nextNode
            };
            return currentNode.value;
    };

    at(index) {
        let counter = 0;
        if (!this.head) {
            return "The list is empty";
        } else {            
            let currentNode = this.head;
            while (counter < index) {
                counter += 1;
                if (!currentNode.nextNode && counter < index) {
                    return `List not long enough for ${index} indices`
                }
                currentNode = currentNode.nextNode
            };
            return currentNode.value;
        };    
    };
    pop() {
        let previousNode = "";
        let currentNode = this.head;
        while (currentNode.nextNode) {
            if (previousNode === "") {
                previousNode = this.head;
                currentNode = currentNode.nextNode;
            } else {
                previousNode = currentNode;
                currentNode = currentNode.nextNode;
            };
        }; previousNode.nextNode = null;        
        return;
    };
    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true
            } else {
                currentNode = currentNode.nextNode;
            };
        }; return false;
    };
    find(value) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.value === value) {
                return index;
            } else {
                index += 1;
                currentNode = currentNode.nextNode
            }
        }; return null;
    }

    toString() {
        let currentNode = this.head
        let output = ""
        if(!this.head) {
            console.log("The list is empty")
        } else {
            while (currentNode.nextNode) {
                output += "( "+ currentNode.value + " ) -> "; 
                currentNode = currentNode.nextNode;
            };       
            output += "( " + currentNode.value + " ) -> null"
            console.log(output)  
        }
           
    }
}



let newLinkedList = new LinkedList;
newLinkedList.append(10);
newLinkedList.append(5);
newLinkedList.prepend(7);
console.log(newLinkedList.size())
console.log(newLinkedList.first());
console.log(newLinkedList.last());
console.log(newLinkedList.at(5))
console.log(newLinkedList.find(10))

newLinkedList.toString();
