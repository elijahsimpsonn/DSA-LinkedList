// Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its next value pointing to an earlier node in the list).
// For this exercise, create a linked list with the name CycleList.
// Be sure to insert nodes in the list so that it has a cycle.
// Then test your program with a cycleList function.

const LinkedList = require("./01-linked-list-class");
const functions = require("./03-supplemental-functions")
const main = require("./02-singly-linked-list")

const SLL = main()

const cycleList = new LinkedList();
const addItems = [
  "Leonardo",
  "Raphael",
  "Michelangelo",
  "Donatello",
  "Splinter",
];

addItems.forEach((item) => cycleList.insertLast(item));

const isCycle = (list) => {
    let currNode = list.head
    while (currNode !== null) {
        if (currNode.flagged) return true
        currNode.flagged = true
        currNode = currNode.next
    }
    return false
};


// cycleList.head.next.next.next.next.next = cycleList.head.next;
// console.log("\nIs there a cycle in this linked list?");
// console.log(isCycle(cycleList)); //should be true

// console.log("\nIs there a cycle in this linked list?");
// console.log(isCycle(SLL)); //should be false


