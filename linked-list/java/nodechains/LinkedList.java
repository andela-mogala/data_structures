package nodechains;

public class LinkedList {
  private Node head;
  private Node tail;
  private int count;

  public Node getHead() {
    return this.head;
  }

  public Node getTail() {
    return this.tail;
  }

  public int size() {
    return this.count;
  }

  public void addFirst(Node node) {
    Node temp = this.head;
    this.head = node;
    head.setNext(temp);
    this.count++;
    if (count == 1) {
      this.tail = this.head;
    }
  }

  public void addLast(Node node) {
    if (count == 0) {
      this.head = this.tail;
    } else {
      this.tail.setNext(node);
    }
    this.tail = node;
    count++;
  }

  public void removeFirst() {
    if (size() != 0) {
      this.head = this.head.getNext();
      this.count--;
      if (size() == 0) {
        this.tail = null;
      }
    }
  }

  public void removeLast() {
    if (size() != 0) {
      if (size() == 1) {
        this.head = null;
        this.tail = null;
      } else {
        Node current = this.head;
        while(current.getNext() != this.tail) {
          // traverse the List till you get to the second to the last
          current = current.getNext();
        }
        // set the tail to null
        current.setNext(null);
        this.tail = current; //make the second to the last the new tail
      }
      this.count--;
    }
  }
}
