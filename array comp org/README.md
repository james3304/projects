COSC2425 : Fall 2023
Lab10 : Addressing Array Elements

Introduction:

In this lab, you are to create an ARM32 assembler application that demonstrates using an array.

Requirements:

1) the 'main' function should allocated memory from the stack to store an array of integers. It should then initialize that array with values.
2) the 'main' function should call a function to print the elements of the array (print the initial values)
3) the 'main' function should call a function that doubles tohe value of each element of the array
4) the 'main' function should call a function to print the elements of the array (print doubled values)

5) the 'main' function should call a function to find and then print the maximum element of the array
6) the 'main' function should call a function to find and then print the minium element of the array
7) the 'main' function should call a function to find and then print the sum of all elements of the array

Note: because there willbe so many source code files ( 1 per function is recommmended ), I've included a makefile that you may choose to use.

Sample "RUN" of the application:

make arrayDemo
gcc -g -Wall arrayDemo.s maxArray.s minArray.s sumArray.s printArray.s doubleValues.s -o arrayDemo
./arrayDemo
75
50
100

150
100
200

max = 200
min = 25
sum = 475