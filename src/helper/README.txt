Addition.js -

Function Addition(array) requires an array of numbers to be passed in as an
argument which will be summed and returned. Time compexity O(n). Used primarily
for calculating total expenses for any amount of time. Relies on Validate.js in
order to confirm the array can be used (is all numbers).

Validate.js -

Function Validate(array, type_ex) requires an array to be passed in and a typed
variable for type_ex. Returns a boolean that confirms whether the array has all
data of the same type as type_ex. Used to ensure that information being passed
is of the required type easily. Time compexity O(n).

Percentage.js

Function Percentage(array_cost, array_names) requires two arrays of equal length
as arguments, one with numbers (total cost of a category) and one with names (the
associated category of the cost, i.e. food, entertainment, etc.). Used to generate
pie charts and other analysis views based on percentages. Returns an object with
properties mirroring the array_names and values of percentages totaling 100. Time
complexity O(n). Returns null if the arrays are not equal in length. Relies on
Addition.js for finding total cost of all in array_cost.

Timeperiod.js - 


