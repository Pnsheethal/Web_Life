//* importing data
//* we need to run this one
//* use keyword as require

// let t=require('./china')
// console.log(t);

//? here we are importing the toy==> car frim the china by using require keyword


// let h=require('./china')
// h()   //* here we used the function for that we need to call the function

//* importing multiple data
// let multiple = require('./china')
// multiple.print()   //? access and executes the function
// console.log(multiple.toys);  //? access he variables



//? calling the task  
// let user=require('./china')
// console.log(user);


//? output
// {
//   userinfo: {
//     name: 'sheethal',
//     age: 23,
//     number: 879456251,
//     reading: [Function: reading]
//   }
// }


//& Another way: Destructuring

import object from './china.js'
console.log(object);
