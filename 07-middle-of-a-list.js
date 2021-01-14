// Write an algorithm to find the middle element of a linked list. 
// Note You may be tempted to add a length property to your linked list class. 
// The length property is not a typical property of linked list, 
// Therefore don't make any modification to the linked list class that is provided to you. 
// Also, finding the size of the linked list using the size() function and dividing it by half will not find the correct middle of the linked list. 
// So, don't use either of these approaches.

const main = require('./02-singly-linked-list')
const functions = require("./03-supplemental-functions")

let SLL = main()

const middleOfList = (list) => {
    let sNode = list.head
    let fNode = list.head

    while (fNode.next !== null && fNode.next.next !== null) {
        fNode = fNode.next.next
        sNode = sNode.next
    }

    return sNode
}

console.log(functions.display(SLL))
console.log(middleOfList(SLL).data) // Should be Kat

