# TypeScript Type Error: Argument of type string[] is not assignable to parameter of type string
This repository demonstrates a common TypeScript error: TS2345. This error occurs when you try to pass an argument of an incompatible type to a function. In this specific case, we're passing a string array to a function that expects a single string.

## The Problem
The `greeter` function is designed to accept a single string and prepend "Hello, " to it. However, the `user` variable is an array of strings.  Attempting to use the array directly results in the TS2345 error.

## The Solution
The solution involves either modifying the `greeter` function to handle arrays or modifying how the `user` variable is handled to provide a single string argument.

This repo shows both approaches.