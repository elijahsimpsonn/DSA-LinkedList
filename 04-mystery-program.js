// Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. 
// What is the time complexity of this algorithm?

function WhatDoesThisProgramDo(lst) {
    //set current to the first node
    let current = lst.head;
    //while current is not null
    while (current !== null) {
        //set newNode to current
        let newNode = current;
        //while the node next up after newNode is not null
        while (newNode.next !== null) {
            //if the next value is the same as the current(aka newNode) value
            if (newNode.next.value === current.value) {
                //set the next node to the node after it
                newNode.next = newNode.next.next;
            }
            else {
                //otherwise set newNode to the node after it
                newNode = newNode.next;
            }
        }
        //set current to the node after it
        current = current.next;
    }
}

//This function is removing duplicate/double values from a linked list
//It has a time complexty of O(n * log(n)), so O(log(n)). It runs two while loops.
