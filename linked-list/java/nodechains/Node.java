package nodechains;

public class Node {
  private int value;
  private Node next;

  Node(int value, Node next) {
    this.value = value;
    this.next = next;
  }

  Node(int value) {
    this.value = value;
  }

  void setValue(int value) {
    this.value = value;
  }

  int getValue() {
    return this.value;
  }

  void setNext(Node next) {
    this.next = next;
  }

  Node getNext() {
    return this.next;
  }

  static void printList(Node node) {
    while (node != null) {
      System.out.println(node.getValue());
      node = node.getNext();
    }
  }
}
