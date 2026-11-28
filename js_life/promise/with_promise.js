//* creating the promise

// let mypromise = new Promise((resolve,reject)=>{
//     console.log("I am inside the executor function");
//     // resolve("data is recived")
//     reject("data is not recived")
// })

// console.log(mypromise); 
//* output
// I am inside the executor function
// Promise { <pending> }
// Promise { 'data is recived' }
// Promise { <rejected> 'data is not recived' }

//* handling the promise
//* we have two ways 
//* traditional ways by using the ( .then() and .catch())

// mypromise.then((data)=>{
//     console.log(data);    //* data is recived
    
// }).catch((error)=>{
//     console.log(error);   //* data is not recived
     
// })


//* moderan way (async and await)

// async function HandlingmyownPromise(){
//     let result = await mypromise
//     console.log(result);  //? data is recived
    
// }
// HandlingmyownPromise()



//* to handle the success and failure we have try and catch 
// async function HandlingmyownPromise(){
//   try{
//       let result = await mypromise
//     console.log(result);  
//   }catch(error){
//     console.log(error);
    
//   }
    
// }
// HandlingmyownPromise()

//* task1
// let thumb=true;
// let mypromise = new Promise((resolve,reject)=>{
//     if(thumb){
//         resolve('employee is logged')
//     }else{
//         reject('employed logged is  reject')
//     }
   
// });
// async function handling() {
//     try{
//         let result = await mypromise
//         console.log(result);
        
//     }catch(error){
//         console.log(error);
        
//     }
    
// }
// handling()


//& cafe by using the tradational way of handing the promise
function orderedfood(){
    return new Promise((resolve)=>{
        setTimeout(() => {
        console.log("your order is getting ready");
        resolve()
    }, 2000);
    })
}


function preparedfood(){
    return new Promise ((resolve)=>{
        setTimeout(() => {
        console.log("your order is prepared");
        resolve()
    }, 2000);
    })
}

function payment(){
  return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Your payment is done');
        resolve()
        
    }, 2000);
  })
}

function takeaway(){
    return new Promise((resolve)=>{
        setTimeout(() => {
        console.log("food is ready for takeaway");
        resolve()
    }, 2000);
    })
}

//* traditional way 
// orderedfood().then(()=>{
//     return preparedfood()
// }).then(()=>{
//     return payment()
// }).then(()=>{
//     return takeaway()
// }).then (()=>{
//     console.log("Enjoy your food 🍽️"); 
// })



//* modern way
async function handing(){
    await orderedfood()
    await preparedfood()
    await payment()
    await takeaway()
    console.log("Enjoy the meal 🍽️");
    
}
handing()
