// Write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch.

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, key) {
    //if list is empty
    if (!this.head) {
      return;
    }
    //if key is the first value
    if (this.head.data === key) {
      this.insertFirst(item);
      return;
    }
    //find the target, starting at the head
    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.data !== key) {
      //save the previous node
      previousNode = currNode;
      // increment the current node
      currNode = currNode.next;
    }
    //check to make sure the given key is there in the first place
    if (currNode === null) {
      console.log(`key value not found`);
      return;
    }
    //insert the new node, pointing prvNode.next to the item and connecting the itrm to currNode
    previousNode.next = new _Node(item, currNode);
  }

  insertAfter(item, key) {
    //if list is empty
    if (!this.head) {
      return;
    }
    //if key is the first value
    if (this.head.data === key) {
      this.insertFirst(item);
      return;
    }

    let currNode = this.head;
    let nextNode = this.head;

    //go through list looking for target. Save the prev node and increment the next node
    while (currNode !== null && currNode.data !== key) {
      currNode = nextNode;
      nextNode = nextNode.next;
    }

    //check to make sure the given key is there in the first place
    if (currNode === null) {
      console.log(`key value not found`);
      return;
    }

    //when currNode.value === key set currNode.next to new Node(item, nextNode)
    currNode.next = new _Node(item, nextNode);
  }

  insertAt(item, index) {
    //if list is empty, return
    if (!this.head) {
      return null;
    }

    if (index === 0) {
      this.insertFirst(item);
    }

    let previousNode = this.head;
    let currNode = this.head;
    let counter = 0;

    //when counter = index, insert
    while (counter < index) {
      if (currNode.next === null) {
        return null;
      } else {
        counter++;
        previousNode = currNode;
        currNode = currNode.next;
      }
    }
    previousNode.next = new _Node(item, currNode);
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.data === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.data !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
    //   console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }

  find(item) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }

    while (currNode.data !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
}

module.exports = LinkedList;
