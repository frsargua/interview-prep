// what is the difference between var and let?

// 1st - Let was introduce in ES2015/ES6
// 1st - var has been there since the beginning

//2nd - Let has block scope
// It will die at the end of the block is defined or garbage is collected.
//2nd - Var has function block
//Block Scope

// 3rd var gets hoisted
// 3rd let does not get hoisted

//what is the difference between "==" and "===" ?
// == converts both to string
// === doesnt convert

//what is the difference between "const" and "let"?

//what is the difference between "null" and "undefined"?
// Both represent empty value
// When a variable is defined but not assigned, it automatically adds the placeholder "undefined"
// Null you are setting it yourself,
// Type of undefined is undefined, type of null is an object

// What is "use strict"?
// To throw errors when variables are not defined
// Tell the browser to use the latest functionality
//

// What is the use of arrow function?

function multiply(a, b) {
  return a * b;
}
const multiply = (a, b) => a * b;

//Normal function has function scope, hence it can define its own 'this' values
// A walk around, is to used a let value to define a variable called "that" that is defined to "this"
//Arrow function does not have function scope, so this values from the parent can be passed to it.

//What is prototypical inheritance?
// Every object has a property called prototype, you can add methods and properties to it.
// When you create an object from this object, the newly created object will inherit the property from the parent. Not by including in its own property
// instead it uses from its parent.
// During the search of a property or method inside an object, if they arent found, the prototype is inherited.

//What is the difference between function declaration and function expression?
//Function declaration has a name
//Function expression is an anonymous function saved into a variable.

//FD is hoisted
//FE is not hoisted

//FD cannot be passed to another function
//FE has a variable scoped, since it is saved as a variable.

// what is promises and why do we use them?

// what is closure and how do we use it?
