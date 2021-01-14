// Implement the following functions that operate on your linked list class.
// Note that these should be free functions instead of methods of the linked list class, so implement them outside the linked list class. Test each function using the list created in exercise 1.

// display: displays the linked list
// size: returns the size of the linked list
// isEmpty: finds if the list is empty or not (without using the size() function)
// findPrevious: finds the node before the item you are looking for
// findLast: returns the last node in the linked list

const LinkedList = require("./01-linked-list-class");
const main = require("./02-singly-linked-list");

const ListFunctions = {
  display: (linkedList) => {
    items = [];
    //check to see if the list is empty
    if (linkedList.head === null) {
      return "The list is empty";
    } else {
      //start at the head
      let currNode = linkedList.head;
      //iterate, start at the head
      while (currNode.next !== null) {
        items.push(currNode.data);
        currNode = currNode.next;
      }
      //add the last item
      items.push(currNode.data);
    }
    //return the array joined with "->"
    return `Linked List Items: ${items.join("->")}`;
  },

  size: (linkedList) => {
    size = 0;
    //check to see if the list is empty
    if (linkedList.head === null) {
      return size;
    }
    //start at the head
    let currNode = linkedList.head;
    //iterate and increment
    while (currNode.next !== null) {
      size++;
      currNode = currNode.next;
    }
    //return the size
    return `Linked List Size: ${size} with ${
      size + 1
    } elements total(0-${size})`;
  },

  isEmpty: (linkedList) => {
    if (linkedList.head === null) {
      return `This list is empty`;
    }
    return `There are items in this list`;
  },

  findPrevious: (linkedList, key) => {
    //if key is at the beginning of the list
    if (linkedList.head === null) {
      return null;
    }
    let prevNode;
    let currNode = linkedList.head;
    //start itteration
    //while the current node data is not the key
    while (currNode.data !== key) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    //when current node value is the key
    return `The previous node is ${prevNode.data}`;
  },

  findLast: (linkedList) => {
    // if list is empty
    if (linkedList.head === null) {
      return null;
    }

    let currNode = linkedList.head;

    while (currNode.next !== null) {
      currNode = currNode.next;
    }

    return `The last node in the list is ${currNode.data}`;
  },
};

module.exports = ListFunctions;

//Test

let SSL = main();
let emptySSL = new LinkedList();

console.log(ListFunctions.display(SSL));
console.log(ListFunctions.size(SSL));
console.log(ListFunctions.isEmpty(SSL));
console.log(ListFunctions.isEmpty(emptySSL));
console.log(ListFunctions.findPrevious(SSL, "Boomer"));
console.log(ListFunctions.findLast(SSL))