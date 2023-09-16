# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @csnow28/lotide`

**Require it:**

`const _ = require('@csnow28/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: A function that checks if two arrays are equal and prints a message accordingly.
* `tail(...)`: A function that will take every element in the array except the first.
* `middle(...)`: A function that will take in the middle element(s) of an array
* `assertArraysEqual(...)`: A function that compares two arrays and print a corresponding message.
* `assertEqual(...)`: A function that tests if two values are equal, and prints an appropriate message.
* `assertObjectsEqual(...)`: A function that compares two objects and prints an appropriate message.
* `countLetters(...)`: A function that will take in a string and returns a count of each letter in said string.
* `countOnly(...)`: A function that counts occurrances of items listed in an object within an array.
* `eqArrays(...)`: A function to check if two arrays are equal, and prints an appropriate message.
* `eqObjects(...)`: A function to compare two objects for equality and prints an appropriate message.
* `findKey(...)`: A function that takes an object and callback, returning the first truthy key.
* `indKeyByValue(...)`: A function that will find the first key containing a specific value in an object.
* `flatten(...)`: A function that takes in an array with a nested element, and returns one array.
* `letterPositions(...)`: A function that will return all letter index from a string that is given.
* `map(...)`: A function that takes two arguments and will return a new array from the callback results.
* `takeUntil(...)`: A function that will collect elements from an array until the callback returns truthy.
* `without(...)`: A function that returns elements while removing any that were asked to remove.