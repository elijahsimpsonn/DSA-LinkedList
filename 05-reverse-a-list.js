// Write an algorithm to reverse a linked list.
// The time complexity of your algorithm should be linear (O(n)).
// For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order.
// Your program should reverse the direction of a given singly linked list.
// In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.

const main = require("./02-singly-linked-list");
const ListFunctions = require("./03-supplemental-functions");

const reverse = (list) => {
  let current = list.head;
  let originalHead = list.head;
  let tempNext;
  let temp = current.next;
  while (temp !== null) {
    tempNext = temp.next;
    temp.next = current;
    current = temp;
    temp = tempNext;
  }
  list.head = current;
  originalHead.next = null;
};

let SSL = main();
reverse(SSL);
// console.log(`Reversed ${ListFunctions.display(SSL)}`);

// Time Complexity should be O(n) since it has one While loop, so it is dependent on the size of the input
// Ask Alfredo about making it recursive
