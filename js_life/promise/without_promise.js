//^ creating the dependencce b/w the function and creatinfg the nested fuction again and again we call this as callback hell or prymid DOM 
function orderedfood(callback){
    setTimeout(() => {
        console.log("your order is getting ready");
        callback()
    }, 2000);
}


function preparedfood(callback){
    setTimeout(() => {
        console.log("your order is prepared");
        callback()
    }, 5000);
}

function payment(callback){
    setTimeout(() => {
        console.log('Your payment is done');
        callback()
        
    }, 2000);
}

function takeaway(callback){
    setTimeout(() => {
        console.log("food is ready for takeaway");
        callback()
    }, 2000);
}


//* callback function
//* callback hell
orderedfood(()=>{
    preparedfood(()=>{
        payment(()=>{
            takeaway(()=>{
            console.log("enjoy your food ");

        })
            
        })
    })
})