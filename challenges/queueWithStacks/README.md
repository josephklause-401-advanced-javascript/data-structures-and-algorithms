# Challenge Summary
Code Challenge 11

## Challenge Description
Write a new PseudoQueue class.
Has a enqueue(value) method
that puts the value to the top of the inStack list
dequeue() method that pops off the top value of the outStack list
or repopulates the outStack list from the inStack list FIFO style



## Approach & Efficiency
PsuedoQueue makes two stacks
enqueue takes value, pushes it onto the inStack
dequeue: if value at top of outStack, it pops off top value
if there is no value on outStack, then it goes to inStack and takes value off top of inStack and pushes to outStack (first in first out)
if there is no value in inStack or outStack it returns undefined.

## Solution
![QueueWithStacks Whiteboard](IMG_5281.jpg)