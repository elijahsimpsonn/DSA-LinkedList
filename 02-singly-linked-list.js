// Write a function main. 
// Within the function, use the linked list class from 01. 
// Create a linked list with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.
// Add Tauhida to the list.
// Remove squirrel from the list.
// Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
// Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
// Implement a function called insertAt() that inserts an item at a specific position in the linked list.
// Add Athena before Boomer using your insertBefore() function.
// Add Hotdog after Helo using the insertAfter() method.
// Using the insertAt() method insert Kat in the 3rd position of the list.
// Remove Tauhida from the list.

const LinkedList = require ('./01-linked-list-class')

const main = () => {

    let SSL = new LinkedList()
    const addItems = ["Apollo", "Boomer", "Helo", "Husker", "Starbuck"]
    addItems.forEach((item) => SSL.insertLast(item))
    SSL.insertLast('Tauhida')
    SSL.remove('squirrel')
    SSL.insertBefore("Athena", "Boomer")
    SSL.insertAfter("Hotdog", "Helo")
    SSL.insertAt("Kat", 3)
    SSL.remove('Tauhida')
    
    return SSL
}

main()

module.exports = main