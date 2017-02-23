function Node(value, next) {
  this.value = value;
  this.next = next;
}

Node.prototype.getValue = function() {
  return this.value;
};

Node.prototype.setValue = function(value) {
  this.value = value;
};

Node.prototype.setNext = function(next) {
  this.next= next;
};

Node.prototype.getNext = function() {
  return this.next;
};

const first = new Node(5);
const second = new Node(2);
const third = new Node(10);

first.setNext(second);
second.setNext(third);

function printList(node) {
  while(node) {
    console.log(node.getValue());
    node = node.getNext();
  }
}

module.exports = { Node, printList };
