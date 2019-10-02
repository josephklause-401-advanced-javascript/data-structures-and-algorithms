# Challenge Summary
13the Class Code Challenge of Career track

## Challenge Description
Write a function called multiBracketValidation(input) that takes a string and returns a boolean whether or not the brackets are balanced. 
Return 'no brackets in string' if there are no brackets?
There are two types of brackets (), {}, []

## Approach & Efficiency/Solution
loop through string
keep count of all bracket values
if ) count === 1 and ( count === 0 return false
if number of times ( appears equals the number of times ) appears, return true
else return false

O(n)