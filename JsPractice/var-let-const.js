//1st disadvantage of var

// console.log(greeter);
// var greeter = 'say hello';

// it is interpreted as this

//     var greeter;
//     console.log(greeter); //greeter is undefined
//     greeter = "say hello"

//     So var variables are hoisted to the top of its scope and initialized with a value of undefined.


//2nd disadvantage of var

// var greeter = 'hiio';
// var times = 4;
// if ( times > 3) {
//     var greeter = 'Hello Again';
// }
// console.log(greeter);

// So, since times > 3 returns true, greeter is redefined to "say Hello instead". While this is not a problem if you knowingly want greeter to be redefined, it becomes a problem when you do not realize that a variable greeter has already been defined before. 
// If you have use greeter in other parts of your code, you might be surprised at the output you might get. This might cause a lot of bugs in your code. This is why the let and const is necessary.

