//* function are resuable bolck of code 

// function print(){
//     console.log('hello jvascript');
//     console.log('how are you?');
// }
// print()



// function mor(){
//     console.log('good morning');

// }
// mor()


// function after(){
//     console.log('good afternoon');

// }
// after()


// function evening(){
//     console.log('good evening');

// }
// evening()



//* parameters and arguments
// function greet(anything){
//     console.log('welcome' + anything);

// }
// greet('sheethal')


//* printing the time
// function greet(timing){
//      if (timing >= 9 && timing < 12) {
//         console.log('good morning');
//     }
//     else if (timing >= 12 && timing < 17) {
//         console.log('good afternoon');
//     }
//     else if (timing >=17 && timing >=18) {
//         console.log('good evning');
//     }

// }
// greet(11.59)
// greet(14)
// greet(18)


//* using the return keyword

// function totalmarks(m,c,s,k,e){
//     // console.log('hell');

//     return m+c+s+k+e
// }

// let result = totalmarks(60,40,80,35,99)
// console.log(result +5);


//* anonymous function
//* by using a variable and assigning the function

// let bhoot = function (){
//     console.log('greeting from anonymous function');
// }
// bhoot()


//* arrow function
//^ 1
// let addition = (a,b) => a+b   //* implicit return
// console.log(addition(10,20));

//*explicit return 
// let add = (a,b) =>{
//     return a+b;
// }
// console.log(add(20,10));



//^ 2
// let addition = a => a+20
// console.log(addition(10));

//^ 3
// let addition = _ => 20+20
// console.log(addition());


//* function expression
// let addition = function printadd(){
//     console.log(10+20);
// }
// addition()


//* callback function
// function add(){    //* it is a callback function
//     console.log(10+20);

// }
// function task(fun){
//     fun()
// }
// task(add)


//* usecase for using anonymos function


// function task(fun) {
//     fun()
// }
// task(
//     function () {    //* no need to mention name we ca use the anonymos function 
//         console.log(10 + 20);

//     }
// )


//* HOF function
//! one way
// function task(){  //^ by using return 
//     return function(){
//         console.log("thank you"); 
//     }
// }
// let result =task()
// result()


//! 2nd way  
// function task(fun){  //^ by using parameter
//     fun()
// }
// function add(){
//     console.log(20+30);  
// }
// task(add)


//* cal using callback function

// function add(a,b){
//     console.log(a+b);
// }
// function sub(a,b){
//     console.log(a-b);

// }
// function mul(a,b){
//     console.log(a*b);

// }
// function div(a,b){
//     return a/b
//     //* console.log(a/b);

// }

// function calci(calback,a,b){

//     //* if we use the return in above function we can use log
//     console.log(calback(a,b));

//     // calback(a,b)

// }
// calci(div,10,5)


function greeting(callback, takeaway) {      //! HOF function
    console.log("Welcome to meghana hotel");
    console.log('Your order is geeting ready');
    console.log('Your order is ready ');
    console.log('...................');
    callback(takeaway)
}

function chicken_biryani(takeaway) {  //! callback function
    setTimeout(() => {
        console.log('Thank you for the order');
        console.log('Your chicken-biryani is getting ready');
        console.log('Here is yourr order ');
        takeaway()
    }, 5000)
}

function veg_biryani(takeaway) {
    setTimeout(() => {
        console.log('Thank your for your order');
        console.log('Your veg - biryani is getting ready');
        console.log('Here is your order');
        takeaway()
    }, 5000)
}

function takeaway() {  //! creating the takeaway function for the time it wil take in milliseconds 
    console.log('Your order is ready for Takeaway');

}
greeting(chicken_biryani, takeaway)
// greeting(veg_biryani)