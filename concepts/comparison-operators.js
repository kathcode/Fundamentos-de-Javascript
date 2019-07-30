/**
 * Comparison operators
 */

/* --- Equal (==) Check the values --- */
10 == 10;
// Console: true
10 == 100;
// Console: false

/* --- Case sensitive --- */
"hello" == "hello";
// Console: true
"hello" == "Hello";
// Console: false

/* --- Others --- */

null == null;
// Console: true
true == true;
// Console: true
false == false;
// Console: true
false == true;
// Console: false
null == undefined;
// Console: true

/* --- Equal (===) check vallues and type as well --- */

null === undefined;
// Console: false

10 === "10";
// Console: false
