# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @philteigne/lotide`

**Require it:**

`const _ = require('@philteigne/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns first element in a given array.
* `tail(array)`: Returns all but first element in a given array.
* `middle(array)`: Returns the middle element in a given array of at least length 3. If the array has an equal number of elements it will return both middle elements.
* `map(array, callback)`: Returns array with callback specified adaptations made to each element of the inputted array.
* `assertArraysEqual(array1, array2)`: Returns a true assertion if the two given arrays are identical, and a false assertion if they are not.
* `assertEqual(value1, value2)`: Returns a true assertion if the two given values are identical, and a false assertion if they are not.
* `assertObjectsEqual(object1, object2)`: Returns a true assertion if the two given objects are identical, and a false assertion if they are not.
* `countLetters(string)`: Returns an object containing the counts of instances of letters in the given string.
* `countOnly(array, object)`: Return an object containing counts from the given array, of everything that the given object listed.
* `eqArrays(array1, array2)`: Returns true if the two given arrays are identical, return false if they are not.
* `eqObjects(object1, object2)`: Return true if the two given objects are identical, return false if they are not.
* `findKey(object, callback)`: Returns the first instance that satisfies callback in the given object.
* `findKeyByValue(object, value)`: Returns the first key in the provided object that contains the input value.
* `flatten(array)`: Returns a 1 dimensional array given an array with nested elements.
* `letterPositions(string)`: Returns an object that lists the index location of all letters in the input sentence. 
* `takeUntil(array, callback)`: Returns all characters in a string up until the callbacks conditions are met.
* `without(array1, array2)`: Returns an array with all values listed in the filter array (array2), removed.