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

















