class Node {
  constructor(value, next) {
    this._value = value
    this._next = next
  }

  get value() {
    return this._value
  }

  set value(value) {
    if (value != null) {
      this._value = value
    }
  }

  get next() {
    return this._next
  }

  set next(next) {
    this._next = next
  }
}

const first = new Node(5)
const second = new Node(2)
const third = new Node(10)

first.next = second
second.next = third

function printList(node) {
  while(node) {
    console.log(node.value);
    node = node.next
  }
}

module.exports = { Node, printList }
