# Challenge Summary
Code Challenge 12

## Challenge Description
Write a class called animal shelter
implements these methods:
enqueue(animal), animal can either be cat or dog
dequeue(pref), if not dog or cat, return whicenever animal has been in shelter the longest



## Approach & Efficiency
Similar to PsuedoQueue
instantiate two stacks
enqueue takes animal value, either cat or dog, pushes it onto the inStack
dequeue(pref): if value pref at top of outStack, it pops off top value
go through pref to find pref. 
if there is no value on outStack, then it goes to inStack and takes value off top of inStack and pushes to outStack (first in first out)
if there is no value called, pop off longest pet in shelter.
if no animal equal to preference, return undefined


## Solution
![QueueWithStacks Whiteboard](IMG_5281.jpg)