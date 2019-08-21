/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Whenever the function is called in the global scope `this` points to window object, and undefined in strict mode
* 2. When a function is called as a method on an object, `this` references the object
* 3. When a new object is instantiated with the new Keyword, `this` is bound to that object
* 4. when a function is called by using any of `call`, `bind , or `apply` this is explicitly set to the object in the first argument of of all thress metjods
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function foo(name) {
    this.name = name;
    console.log(`My name is ${this.name}`);
}

foo("sam");
// Principle 2

// code example for Implicit Binding
const obj = {
    foo
}

obj.foo("sam");

// Principle 3

// code example for New Binding

new foo("sam")

// Principle 4
foo.call(null,"sam")
// code example for Explicit Binding