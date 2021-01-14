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

<b>Create List Node</b>
`class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}
`

<b>Create Linked List</b>
`class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}
`

