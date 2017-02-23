const Node = require('./node').Node;
const printList = require('./node').printList;

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  addFirst(node) {
    const temp = this.head;
    this.head = node;
    this.head.setNext(temp);
    this.count++;
    if (this.count === 1) {
      this.tail = this.head;
    }
  }

  addLast(node) {
    if (this.count === 0) {
      this.head = this.tail;
    } else {
      this.tail.setNext(node);
    }
    this.tail = node;
    this.count++;
  }

  removeFirst() {
    if (this.count !== 0) {
      this.head = this.head.getNext();
      this.count--;
      if (this.count === 0) {
        this.tail = null;
      }
    }
  }

  removeLast() {
    if (this.count != 0) {
      if (this.count === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let current = this.head;
        while (current.getNext() !== this.tail) {
          current = current.getNext();
        }
        current.setNext(null);
        this.tail = current;
      }
      this.count--;
    }
  }
}


const first = new Node(5);
const second = new Node(2);
const third = new Node(10);


let ll = new LinkedList();
ll.addFirst(first);
ll.addFirst(second);
ll.addLast(third);

console.log('Print All');
printList(ll.head);

ll.removeFirst();
console.log('Remove first')
printList(ll.head);

ll.removeLast();
console.log('Remove Last')
printList(ll.head);

module.exports = { LinkedList };