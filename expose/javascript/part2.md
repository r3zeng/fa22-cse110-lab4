1 - 3

i starts at 0 incremented by 1 for each element in the first argument array

2 - 150

the value discountedPrice is overriden with each iteration of the for loop.  The value printed is from apply a 50% discount to 300, the last value in the prices array argument

3 - 150

final price is the same as discountedPrice rounded to 2 decimal places

4 - [ 50, 100, 150 ]

the function apply the discount rate to a list of prices and pushed that resulting numbers into another array that is returned

5 - ReferenceError: i is not defined

i does not have scope outside the for loop

6 - ReferenceError: discountedPrice is not defined

discountedPrice does not have scope outside the for loop

7 - 150

why 150 is printed is same as question 3.  why no error is because finalPrice has function scope and the log message is within the function

8 - [ 50, 100, 150 ]

same as question 4.  Although discounted has function scope, the returned value has global scope

9 - ReferenceError: i is not defined

i does not have scope outside the for loop

10 - 3

length is set to the size of the argument array

11 - [ 50, 100, 150 ]

same as question 8

12 -

- A - student.name
- B - student['Grad Year']
- C - student.greeting();
- D - student['Favorite Teacher'].name
- E - student.courseLoad[0]

13 -

- A - '32'

the two was converted to a string and sting concatanation was applied

- B - 1

'3' was converted to an int and interger subtraction was applied

- C - 3

null was converted to an int and interger addition was applied

- D - '3null'

null was converted to a string and sting concatanation was applied

- E - 4

true was converted to an int and interger addition was applied

- F - 0

false and null were converted to ints and interger addition was applied

- G - '3undefined'

null was converted to a string and sting concatanation was applied

- H - NaN

there is no possible conversion that would make this operation valid

14 -

- A - true

`2` was converted to 2 and integer comparison was used

- B - false

string alphanumerical order comparison was used

- C - true

`2` was converted to 2 and integer comparison was used

- D - false

strict equality operator does no implict type conversions

- E - false

true was converted to 1 and integer comparison was used

- F - true

the type casting is done first and the resulting value is used for boolean comparison

15 - == is abstract equal which does implict type conversion while === is strict equality and does not do that 

17 - [ 2, 4, 6 ]

the for loop iterate over a array with [1,2,3] and multiples each indivudual value by 2 and pushes the result to another array that is returned

19 - 

1

4

3

2
