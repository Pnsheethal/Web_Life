// ? ARRAY

// let d =[1,2,3,4,5]  //* homogenoues array
// console.log(d);

// let d1=["Hello",14,5.5,true] //*heterogenous array
// console.log(d1);
// console.log(typeof d1); //& object

// d1[2]="Array"  //* mutable 
// console.log(d1);  //! [ 'Hello', 14, 'Array', true ]


//^ length count will satrt from 1
// console.log(d1.length);  //? 4


//* to create a function and calling the function  
//*array literal
// let data=['somu',80,true,function(){console.log('Hello i am inside array as items of array');}]  //& creating the function
// data[3]() //& function calling by using the ()
//& if w give the consloe.log it will give output as undefind


//* using constructors
// let array = new Array(10,20,30,40)  //&[ 10, 20, 30, 40 ]
// console.log(array);

//* if we pass single item in array it will consider as the length
// let array1 = new Array(100)
// console.log(array1);  //?[ <100 empty items> ]
// console.log(array1.length);  //? 100


 

//! Array.from
// let data ='Javascript' 
// [
//   'J', 'a', 'v', 'a',
//   's', 'c', 'r', 'i',
//   'p', 't'
// ]
// let data = "1,2,3,45"
// console.log(Array.from(data));

// let data =[1,0,2 ," ",5,null]
// console.log(Array.from(data,Boolean));

// * Array.from(ArrayRef,function)

// let data=[1,2,3,4,5]
// console.log(data);
// console.log(Array.from(data,(num)=> num*5));  //! by using the array function we can perform the operations 
// console.log(Array.from(data,(num)=>num-8));

//? convert str javascript in to array after that for each i need to add 0
// let data = 'Javascript'
// console.log(Array.from(data));
// console.log(Array.from(data,(num)=>num+0).toString().replaceAll(',',''));


//*Array.isArray()
// let data =[1,2,3,4.5,'Hello']
// // console.log(Array.isArray(data));
// if(Array.isArray(data)){
//     console.log('Data is in array formate');
    
// }else{
//     console.log('Data is not in array formate');
    
// }


//! Array.of()
// console.log(Array.of(1,2,3,4));  //?[ 1, 2, 3, 4 ]
// console.log(Array.of(10));  //?[10]


// * instance methods
// ! push()  add element at end of an array
// let array=[1,2,3,4,5]
// array.push('somu')
// console.log(array);  //?[ 1, 2, 3, 4, 5, 'somu' ]

// ! pop()  remove the element at end of the array
// array.pop()
// console.log(array);  //?[1,2,3,4,5]

//! shift()  remove the element at the start of an array
// array.shift() 
// console.log(array);   //?[ 2, 3, 4 ]

//! unshift() add the elemnet at begin of an array
// array.unshift('somu')
// console.log(array);   //?[ 'somu', 2, 3, 4 ]

//! slice()
// let array =[10,20,30,40,50]
// console.log(array.slice(2)); //?[ 30, 40, 50 ]
// console.log(array.slice(2,3));  //?[30]
// console.log(array.slice(-4));  //?[ 20, 30, 40, 50 ]
// console.log(array.slice(7,2)); //?[]
// console.log(array.slice(-1,-4)); //?[]


//! splice()
// let array =[10,20,30,40,50]
// let deletedata = array.splice(1,2)
// console.log("deleted array is " +deletedata);  //?deleted array is 20,30
// console.log(array);  //?[ 10, 40, 50 ]

// let deletedata=array.splice(1,2,'sheethal','javascript')
//  console.log("deleted array is " +deletedata);  
// console.log(array);  //? [ 10, 'sheethal', 'javascript', 40, 50 ]

//! if i don't want to delete the items in array but need to add the items for that we need togive the deletecount as 0
// let deletedata = array.splice(1,0,'sheethal','rani','python')
// console.log(array);  //?[ 10, 'sheethal', 'rani', 'python', 20, 30, 40, 50 ]



//& concate
// let a=[10]
// let b =[20]
// let c =a.concat(b)
// console.log(c);  //?[ 10, 20 ]


//& reverse()
// let arr=[10,20,30,40,50,60]
// console.log(arr.reverse());  //?[ 60, 50, 40, 30, 20, 10 ]


//& join()

// let arr=[10,20,30,40,50,60]
// console.log(arr.join());  //?10,20,30,40,50,60
// console.log(arr.join('*'));  //? by using the seperator 10*20*30*40*50*60
// console.log(arr.join(''));  //?102030405060 without having any space 


//& indexof()
// let arr=[10,20,30,40,50,60,20]
// console.log(arr.indexOf(30)); //? 2

//& lastindexof()
// console.log(arr.lastIndexOf(20)); //? 6
// console.log(arr.lastIndexOf(60)); //? 5
// console.log(arr.lastIndexOf(100));  //?-1 if index is not there 


//& includes
// let arr=[1,2,3,4]
// console.log(arr.includes(2));  //?true
// console.log(arr.includes(100));  //?false


//& entries  returns the result as key value pair 
//  let arr=[10,20,30,40,50,60]
//  for(let x of arr.entries()){
//     console.log(x);  
//  }

 //* output
//  [ 0, 10 ]
// [ 1, 20 ]
// [ 2, 30 ]
// [ 3, 40 ]
// [ 4, 50 ]
// [ 5, 60 ]


//! to access the key  give result as keys only
// for(let x of arr.keys()){
//     console.log(x);

// }
// 0
// 1
// 2
// 3
// 4
// 5

//& values   it will give the result as values only 
// let arr=[10,20,30,40,50,60]
// for(let x of arr.values()){
//     console.log(x);
// }


//& every()
let arr=[2,4,6,7]
let data =['red','white','green']
console.log(arr.every((num)=>num%2 ===0));  //?false
console.log(data.every((data)=>data === undefined)); //?false
console.log(data.every((data)=>data !== undefined)); //? true








 

















