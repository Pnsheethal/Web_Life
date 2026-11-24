//* dealing wit object(how it will store in JS engine)
// let userinfo= {
//     name:'ramu',
//     age:80,
//     flag:false,

//     working:function(){
//         console.log("ramu is working");

//     }
// }
// console.log(userinfo);




//* function storing in the heap memory
// function add(a,b){
//     console.log(a+b);

// }
// add(10,20)
// console.log(add.name);   //* add
// console.log(add.length);    //* 2


//! pass data as values
// let data1 =10
// let data2 =data1
// console.log(data1);  //* 10
// console.log(data2);   //* 10


// console.log("After updating");
// data1=100
// data2=200
// console.log(data1);  //* 100
// console.log(data2); //* 200


//! passing a data as refernece
// let object1={
//     name:'somu',
//     age:20
// }

// obj2=object1

// console.log(object1);   //* { name: 'somu', age: 20 }
// console.log(obj2);       //* { name: 'somu', age: 20 }
// console.log("after updating");
// obj2.age=100


// console.log(object1);   //* { name: 'somu', age: 100 }
// console.log(obj2);       //* { name: 'somu', age: 100 }



//******************************************************************* */

//* closur: accesses variables from its outer (parent) function even after the outer function has finished executing.
// function outerfunction() {
//     console.log('outerfunction is stared');

//     let outerfunctionData = 10
//     function innerfunction() {
//         console.log('innerfunction started');

//         console.log("accessing outerfunction " + outerfunctionData);
//         console.log("innerfunction is ended");


//     }
//     console.log('outerfunction ended');

//     return innerfunction
// }
// let result = outerfunction()
// result()


function first() {
    console.log("First function started");

    let x = 50;

    function second() {
        console.log("Second function started");

        let y = 100;

        function third() {
            console.log("Third function started");
            console.log("x =", x);
            console.log("y =", y);
            console.log("Third function ended");
        }

        return third;
    }

    return second;
}

let result1 = first();
let result2 = result1();
result2();