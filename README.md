# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working. 


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function`

Higher Order Function;

From what I've read these are tools to help you not only keep your code simple but more efficent. They are short hand solutions, which are helpful(if I knew more of them). This will come with practice I assume.


Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:


* `max` gives you numbers that are larger
* `min` gives you numbers that are smaller 
* `each` for running something on each of an array
* `map` mutliply things 
* `filter`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
Filter gives you the ablity to filter the params you want in your function or whatever.
* `reduce`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
" method applies a function against an accumulator and each value of the array (from left-to-right) has to reduce it to a single value." -mdn. Not totally sure what that means I'll have to try it.
* `reject`: [note](http://underscorejs.org/#reject)
Couldn't really find a good explanation of what reject is.

Use the notes provided to help guide you explanation.




### Phase-2 

* Write a test in the `test` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration. 

* Re-implement the `each` function we did in class, but write the spec for it first. Continue this exercise with `map` and `filter`.


### Phase-3

Implement the remaining iterator methods in the namespace.


### Phase-4

Refactor the following code using `map` to make only one call to the `map` function versus the two below.


```
var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
	return num * num;
};

var sqrRoot = function(num) {
	return Math.sqrt(num);
};


var sqrNumbers = map(myNumbers, square);
var absNumbers = map(sqrNumbers, sqrRoot);
```





