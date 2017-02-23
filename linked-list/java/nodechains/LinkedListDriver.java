package nodechains;
import static nodechains.Node.printList;

public class LinkedListDriver {
  public static void main(String[] args) {
    Node first = new Node(5);
    Node second = new Node(3);
    Node third = new Node(10);

    LinkedList ll = new LinkedList();
    ll.addFirst(first);
    ll.addFirst(second);
    ll.addLast(third);

    System.out.println("After adding all nodes to the list");
    printList(ll.getHead());

    System.out.println("Remove the first");
    ll.removeFirst();
    printList(ll.getHead());;

    System.out.println("Remove the last");
    ll.removeLast();
    printList(ll.getHead());
  }
}
