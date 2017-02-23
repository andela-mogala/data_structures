const Node = require('./node').Node;

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._count = 0;
  }

  addFirst(node) {
    const temp = this._head;
    this._head = node;
    this._head.next = temp;
    this._count++;
    if (this._count === 1) {
      this._tail = this._head;
    }
  }

  addLast(node) {
    if (this._count === 0) {
      this._head = this._tail;
    } else {
      this._tail.next = node;
    }
    this._tail = node;
    this._count++;
  }

  removeFirst() {
    if (this._count !== 0) {
      this._head = this._head.next;
      this._count--;
      if (this._count === 0) {
        this._tail = null;
      }
    }
  }

  removeLast() {
    if (this._count != 0) {
      if (this._count === 1) {
        this._head = null;
        this._tail = null;
      } else {
        let current = this._head;
        while (current.next !== this._tail) {
          current = current.next;
        }
        current.next = null;
        this._tail = current;
      }
      this._count--;
    }
  }

  *[Symbol.iterator]() {
    let current  = this._head;
    while (current != null) {
      yield current.value;
      current = current.next;
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


for (let node of ll) {
  console.log(node);
}

ll.removeFirst();
console.log('Remove first')
for (let node of ll) {
  console.log(node);
}

ll.removeLast();
console.log('Remove Last')
for (let node of ll) {
  console.log(node);
}


module.exports = { LinkedList };