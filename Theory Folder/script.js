// import a from './app.js';
// console.log(a);

// import b from './app.js';
// console.log(b);

// import {arr1} from './app.js';
// console.log(arr1);

import naam from './app.js';
console.log(naam);

import {age, skills} from './app.js';
console.log(age);
console.log(skills);

// ----------------------------------------

// Real DOM vs Virtual DOM

// Real DOM is the actual DOM that is rendered in the browser.

// Virtual DOM is a lightweight copy of the Real DOM that is kept in memory.

// When a change is made to the state of a component, a new Virtual DOM is created.

// The new Virtual DOM is then compared to the previous Virtual DOM using a process called "diffing".

// The differences between the two Virtual DOMs are then calculated and the Real DOM is updated accordingly.

// This process is called "reconciliation".

// The use of Virtual DOM improves performance because it minimizes the number of direct manipulations to the Real DOM, which can be slow and inefficient.

// ----------------------------------------

