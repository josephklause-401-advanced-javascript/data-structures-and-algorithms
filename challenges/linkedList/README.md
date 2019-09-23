# Challenge Summary
Sixth Code Challenge of Career track

## Challenge Description
extend linked list to include
append(value) which adds a node to the end of the list
insertBefore(value, newVal)
insertAfter(value,newVal)

## Stretch
Write a method to delete a node with valuse

## Approach & Efficiency
Append
traverse the node list to the (where .next = null), add the node with the value, make that the new end

insertBefore
find value, find previousNode, make newNode(newVal)
previousNode.next = newNode
newNode.next = value

insertAfter
find value, find nextNode, make newNode(newVal)
value.next = newNode
newNode.next = nextNode


## Solution
![LL-insert Whiteboard](IMG_5271.jpg)