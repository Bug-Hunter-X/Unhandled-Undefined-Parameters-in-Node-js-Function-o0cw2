# Unhandled Undefined Parameters in Node.js Function

This repository demonstrates a common yet subtle error in Node.js: incorrectly handling undefined function parameters.  The `bug.js` file shows a function that returns 0 when undefined parameters are encountered.  This behavior might be unintended if undefined is a valid input value that should be processed differently.

The `bugSolution.js` file provides a solution to handle undefined parameters more effectively, depending on the application's specific logic. 

## How to Reproduce the Bug
1. Clone the repository.
2. Navigate to the directory in your terminal.
3. Run `node bug.js`.  Observe the output.  The function returns 0 even when one parameter is defined.

## Solution
Examine `bugSolution.js` for a refined approach to handling undefined inputs. This illustrates a better approach based on specific business requirements.