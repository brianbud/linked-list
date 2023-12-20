class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = new ListNode(value);
  }

  prepend(value) {
    let node = null;
    if (this.head != null) {
      node = this.head;
      this.head = new ListNode(value);
      this.head.next = node;
    }
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getTail() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
  clear() {
    this.head = null;
  }

  at(index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
      if (node == null) {
        return 'no item in this index';
      }
      return node;
    }
  }

  pop() {
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode.next != null) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = null;
  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(5);
node1.next = node2;
node2.next = node3;
let list = new LinkedList(node1);

console.log(list.prepend(100));
console.log(list.at(1));
