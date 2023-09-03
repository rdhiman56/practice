/* A linked list is a linear data structure, in which the elements are not stored at 
contiguous memory locations. The elements in a linked list are linked using pointers as shown in the below image:*/

class Node {
    constructor(data) {
        this.data = data;  // data to be stored in node
        this.next = null;  // refrence to next node intially null
    }
}

class LinkedList {
    constructor() {
        this.head = null // head of list
    }

    // add a new node with given data to end of list
    append(data) {
        const newNode = new Node(data); //create new node
        if(!this.head){
            this.head = newNode; // if list isempty, set new node as head
            return;
        }
        let current = this.head;
        while(current.next) {
            current = current.next; // traverse to last node
        }
        current.next = newNode; // set new node as next node of last node
    }

    // Display Data
    display(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const linkedlist = new LinkedList();

// Append node with data;
linkedlist.append(7);
linkedlist.append(25);
linkedlist.append(3);

// Display the linked list
linkedlist.display(); // Output 7, 25, 3