1 - values added:  20

2 - final result:  20

3 - values added:  20

4 - ReferenceError: result is not defined

result variable only has scope within the if statement, it does not have scope on line 13 which is outside of the if statement

5 - TypeError: Assignment to constant variable.

result was assigned a value of 0 on line 5.  the value cannot be reassigned so attempting to reassign it on line 7 causes an error

6 - Line 7 with the TypeError will cause the program to throw an error even before the message is logged.  Even if we remove line, we get a ReferenceError just like in question 4 since the const keyword does not give scope to the result variable outside of the if statement
