let userinformation={
    "@name":'Sheethal',
    "Is LoggedIn":true,
    "1age":23,
    reading:function(){
        console.log("Sheethal is reading");
    },
    sleeping:function(){
        console.log("sheethal is sleeping");
    },
    favcollors:['red','green','black'],
    address:{
        city:"Hyderbad",
        pincode:897,
    }
    
}
let key="name";
// console.log(userinformation);
// userinformation.reading();
// console.log(userinformation.favcollors);
// console.log(userinformation.favcollors[1]);
// console.log(userinformation.address.city); //^ accessing the nested object



// * dynamically we can access in [] not in .
// console.log(userinformation.key); //? undefined
// console.log(userinformation[key]);    //? Sheethal

//* Can access property with space in [] not in .
// console.log(userinformation.Is LoggedIn); //? error
// console.log(userinformation["Is LoggedIn"]);  //? true


//* by using speciacl symbols we can acees in [] not in .
// console.log(userinformation.@name);  //? error
// console.log(userinformation["@name"]); //? sheethal


// * by using the numbers
// console.log(userinformation.1age); //? error
// console.log(userinformation["1age"]);  //?23



//* creating the data
// let data ={
//     nam:"somu",
//     age:80,
//     flag:true
// }
//* adding the data
// data.lucky='8'
// console.log(data); //? { nam: 'somu', age: 80, flag: true, lucky: '8' }

//* updating
// data.age=88
// console.log(data);  //?{ nam: 'somu', age: 88, flag: true }

//* deleting 
// delete data.flag
// console.log(data);  //? { nam: 'somu', age: 80 }


//! Methods of a object

// let data ={
//     nam:"somu",
//     age:80,
//     flag:true
// }

//? keys()
// console.log(Object.keys(data));  //? [ 'nam', 'age', 'flag' ]

//? values
// console.log(Object.values(data)); //? [ 'somu', 80, true ]

//? enteris
// console.log(Object.entries(data));  //? [ [ 'nam', 'somu' ], [ 'age', 80 ], [ 'flag', true ] ]

//? fromemteries
// let newdata = Object.entries(data)
// console.log(newdata);

// console.log(Object.fromEntries(newdata));  //? { nam: 'somu', age: 80, flag: true }


//? 







// ^ Syntax

// let object ={
//     key:Value,
//     key:value 
// }



// & by using the dot
// let object= {
//     name:'somu',
//     age:23,
//     flag:true
// }
// console.log(object);  //* { name: 'somu', age: 23, flag: true }

//* to access the particular value by using dot
// console.log(object.name); //* somu
// console.log(object.age); //* 23








