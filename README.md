# Working With Linked List

## Key Concepts

- <b>Linked List</b> is a linear data structure similar to an array. However, unlike arrays, elements are not stored in a particular memory location or index. Rather each element is a separate object that contains a pointer or a link to the next object in that list.
- <b> Node </b> is the name of each element in the list. They contain two items: the data stored and a link to the next node. The data can be any valid data type.
- <b> Head </b> is the entry point to a linked list. The head is a reference to the first node in the linked list. The last node on the list points to null. If a list is empty, the head is a null reference.

## Pros and Cons

- Nodes can easily be removed or added from a linked list without reorganizing the entire data structure. This is one advantage it has over arrays.
- Search operations are slow in linked lists. Unlike arrays, random access of data elements is not allowed. Nodes are accessed sequentially starting from the first node.
- It uses more memory than arrays because of the storage of the pointers.

## Types of Linked List

<b>Singly Linked Lists</b> - Each node contains only one pointer to the next node. 
<b>Double Linked Lists</b> - Each node contains two pointers, a pointer to the next node and a pointer to the previous node.
<b>Circular Linked Lists</b> - Circular linked lists are a variation of a linked list in which the last node points to the first node or any other node before it, thereby forming a loop.

## JavaScript Code Examples

<b>List Node Class</b>
```
class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}
```

<b>Linked List Class</b>
```
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}
```

<b>Create Linked List</b>
```
let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2
let list = new LinkedList(node1)

console.log(list.head.next.data) //returns 5
```

### Linked List Methods

- <b>Size</b> - This method returns the number of nodes present in the linked list.

```
size() {
    let count = 0; 
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}
```

- <b>Clear</b> - This method empties out the list.

```
clear() {
    this.head = null;
}
```

- <b>getLast</b> - This method returns the last node of the linked list.

```
getLast() {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode
}
```

- <b>getFirst</b> - This method returns the first node of the linked list.

```
getFirst() {
    return this.head;
}
```

## Drills Overview

In these drills, you'll practice creating a linked list, implementing its core, and some supplemental operations. You will also use your linked list to solve interview questions. Don't forget to assess the big O for each of these exercises. Start each problem by stating 1 or more sample inputs and outputs.

### 1. Create A Linked List Class

Write a linked list class and these core functions (insertFirst, insertLast, remove, find) from scratch.

### 2. Create A Singly Linked List


- Write a function main. Within the function, using the linked list class above, create a linked list with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.
- Add Tauhida to the list.
- Remove squirrel from the list.
- Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
- Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
- Implement a function called insertAt() that inserts an item at a specific position in the linked list.
- Add Athena before Boomer using your insertBefore() function.
- Add Hotdog after Helo using the insertAfter() method.
- Using the insertAt() method insert Kat in the 3rd position of the list.
- Remove Tauhida from the list.


### 3. Supplemental Functions For A Linked List

Implement the following functions that operate on your linked list class. Note that these should be free functions instead of methods of the linked list class, so implement them outside the linked list class. Test each function using the list created in exercise 1.

- display: displays the linked list
- size: returns the size of the linked list
- isEmpty: finds if the list is empty or not (without using the size() function)
- findPrevious: finds the node before the item you are looking for
- findLast: returns the last node in the linked list


### 4. Mystery Program

Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the time complexity of this algorithm?

```
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
```

### 5. Reverse A List

Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.


### 6. 3rd From The End

Write an algorithm to find the 3rd element from the end of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you.

### 7. Middle Of A List

Write an algorithm to find the middle element of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you. Also, finding the size of the linked list using the size() function and dividing it by half will not find the correct middle of the linked list. So, don't use either of these approaches.

### 8. Cycle In A List

Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its next value pointing to an earlier node in the list). For this exercise, create a linked list with the name CycleList. Be sure to insert nodes in the list so that it has a cycle. Then test your program with a cycleList function.


### 9. Doubly Linked List

Implement a doubly linked list. The primary functions of the doubly linked list would be insert (First, Last, Before, After, and At), remove, and find. Write a function mainDLL, and within it create the doubly linked list DLL and add the following items to it: Aquaria, Caprica, Gemenon, Picon, Sagittaron.

- Add Tauron to the list
- Remove Picon from the list

### 10. Reverse A DLL

Given the doubly linked list above, write a program that reverses the doubly linked list. How is this implementation different than reversing the singly linked list?
