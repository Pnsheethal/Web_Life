//& exapmle 1
// console.log(data);   //! undefined
// var data='somu'
// console.log(data);   //! somu

//? it will work on only var but for let and comst it will throw an error 


//! ex-2
// console.log(data);  //! errow 
// let data ='somu'
// console.log(data);  



//& Hosting is a process of declareing the variable before it's actual execution 
// var data     //?declearation
// console.log(data);  //? undefined
// data ='somu'  //? initialization
// console.log(data);  //? somu 

// console.log(a);
// let a =10



// console.log(data);   //! undefined
// function print(){
//     console.log("print");
    
// }
// var data='somu'
// print()



// print()
// console.log(data);   //? undefined
// function print(){
//     let name ='rani'
//     console.log(data);
//     console.log(name);
// }
// var data ="somu"
// console.log(data);  //?somu


// var num=100
// function test(){
//     console.log(num);
//     var num=200
//     console.log(num);
// }
// test()


// var num=100
// function test(){
//     console.log(num);
//     var num=200
//     console.log(num);
// }
// test()
// console.log(num);
//? if i use let and const it will throw a error
//? but using var it will give the output as 
//^ undefined,200,100


//! ex 3 
// console.log(data);
// printFun()//here the undefined() is called as the function
// var printFun = function print(){
//     let name = 'rani'
//     console.log(data);
//     console.log(name);
// }
// var data = "somu"
// console.log(data); //out :TypeError: printFun is not a function

//*3.1 ex
// console.log(data);
// printFun() 
// let printFun = function print(){
//     let name = 'rani'
//     console.log(data);
//     console.log(name);
// }
// var data = "somu"
// console.log(data);// out ReferenceError: Cannot access 'printFun' before initialization

//*3.2 ex
// console.log(data); 
// let printFun = function print(){
//     let name = 'rani'
//     console.log(data);
//     console.log(name);
// }
// var data = "somu"
// console.log(data);
// printFun()

//out:
// undefined
// somu
// somu
// rani

//! example of global scope
// console.log(data);
// function print(){
//     let name = 'shobha'    
//     console.log(data);
//     console.log(name);
// }
// var data = "somu"
// console.log(data);
// print()

//out
// undefined
// somu
// somu
// shobha

//! ex--o
// let x=10
// function print(){
//     x=20
//     console.log(x);
    
// }
// print()
// console.log(x); //20 20

//ex--
// let x=10
// function print(){
//      let x=20
//     console.log(x);
    
// }
// print()
// console.log(x);//20 10


//!exmaple of function scope
// console.log(data);
// function print(){
//     var name = "rani"
//     console.log(data);
// }
// print()
// console.log(name);
// var data = "somu"
// console.log(data); //ReferenceError: name is not defined


// & Block Scope

// let flag=true
// if(flag){
//     let data =100
//     console.log("the value is "+data);    //^ the value is 100 
    
// }
// else{
//     let data =200
//     console.log("The value is "+data);
    
// }




// & by calling the variable outside the block 
// let flag=true
// if(flag){
//     let data =100
//     console.log("the value is "+data);    
// }
// else{
//     let data =200
//     console.log("The value is "+data);
    
// }
// console.log(data);  //^ error



//& by using the var keyword

// let flag=true
// if(flag){
//     var data =100
//     console.log("the value is "+data);    //^ the value is 100 
    
// }
// else{
//     var data =200
//     console.log("The value is "+data);
    
// }
// console.log(data);   //^ 100



// ^ ScopeChaining

let data1 ='somu'
function outerfunction(){
    let data2 ='rani'
    function innerfunction(){
        let data3='Raja'
        console.log(data1);
        console.log(data2);
        console.log(data3);
        
    }
    innerfunction()
}
outerfunction()