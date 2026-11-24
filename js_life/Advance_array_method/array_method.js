//* map(), filter(),reduce()

//  let a=[1,2,3,4,5]
// for(let i =0;i<a.length;i++){
//     console.log(a[i]);
    
// }



//^ map()
// let a=[1,2,3,4,5]
// function multi(x){
//     return x*5
// }
// let newarray=a.map(multi)  //* callback function
// console.log("new Array: "+newarray);  //* new Array: 5,10,15,20,25
// console.log(newarray);      //* [5,10,15,20,25]
// console.log("Original array: " +a);   //* Original array: 1,2,3,4,5
 


// let a=[1,2,3,4,5]
// a.map((item,index,orgarray) =>{
//     console.log(item,index,orgarray);
    
// })

//* Output
// 1 0 [ 1, 2, 3, 4, 5 ]
// 2 1 [ 1, 2, 3, 4, 5 ]
// 3 2 [ 1, 2, 3, 4, 5 ]
// 4 3 [ 1, 2, 3, 4, 5 ]
// 5 4 [ 1, 2, 3, 4, 5 ]


//! write a cube of this 


// let a=[1,2,3,4,5]
// let res=a.map((item,index,orgarr)=>item*item*item)
// console.log(res);   //* [ 1, 8, 27, 64, 125 ]

// let a=[1,2,3,4,5]
// function multi(x){
//     return x**3
// }
// newarray =a.map(multi)
// console.log(newarray);
// console.log(a);


//! square
// let arr=[10,20,30,40,50]
// let result = arr.map((item,inde,orgarr)=> item*item)
// console.log(result);       //* [ 100, 400, 900, 1600, 2500 ]


//^ filter()
// let Data=[1,2,3,4,5,6,7,8,9,10]
// let result= Data.filter((item,index,org)=> item % 2 ===0)
// console.log(result);   //* [ 2, 4, 6, 8, 10 ]


//! conside a item having 5 items i want output len is >5 that items in string stored in array
// let names=["sheethal",'shobha','somu','rani','renuka','','','web','']
// let result = names.filter((item,index,org)=> item.length>5)
// console.log(result);


// //! filter out the names which is start with  R
// let result1=names.filter((item,index,org)=> item.startsWith('r'))
// console.log(result1);


// //! filterout empty string from the array
// let result2=names.filter((item,index,org)=> item!=='')
// console.log(result2);


// //! filterout  the name which consist of 'a'
// let result3=names.filter((item,index,org)=>item.includes('a'))
// console.log(result3);

// //! filter the numbers which consists of 5 in the value
// let a =[20,55,78,65,99,100,105]
// let res=a.filter((num)=>num.toString().includes("5"))
// console.log(res);


//^ reduce()
// let data=[1,2,3,4,5,6,7,8,9,10]
// let result=data.reduce((sum,currnum)=>sum+currnum)
// console.log(result); //? 55


// //* to find the product
// let result1=data.reduce((acc,currnum)=>acc*currnum)
// console.log(result1);  //? 3628800

// let newdata = data.reduce((acc,x) =>{
//     return acc+x  //* here currently x value is 55 after the intialvalue (accumulator) 100 it become 155
// },100)
// console.log(newdata);


//! find out the sum of all the even numbers in array
let data=[1,2,3,4,5,6,7,8,9,10]

// let result=data.filter(x=> x%2==0).reduce((acc,curnum)=>acc+curnum)
// console.log(result);

//! count all the odd numbers in array

// let result=data.filter(x=>x%2!=0).reduce((acc,cunum)=>acc+1)
// console.log(result);  //* 5


//! find the sum of square of an elemntes
// let result=data.map((item,index,org)=> item*item).reduce((acc,curnum)=>acc+curnum)
// console.log(result);

//! count how many numbers are divisible by 2 and 3

// let result=data.filter((item,index,org)=>item%2==0 && item%3==0).length
// console.log(result);

//* [6] and count 1

//! find total number odd char in all the string
// let data = ["sheethal", "shobha", "html", "css", "web"];
// // let result=data.filter((item,index,orgn)=>item.length %2!=0).reduce((acc,curnum)=>acc+curnum.length,0)
// let result1 =
// console.log(result);


