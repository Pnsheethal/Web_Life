//* Unary Operator

//! unary +
//& convert the operand to numbers
// let a = 10
// console.log(+a);

// let b ="10"
// console.log(+b);
// console.log(typeof +b);

// let c= true
// console.log(+c);


//!unary -

// let a= 10
// let b =true
// console.log(-a);
// console.log(-b);


//! increment 

//* pre-increment

// let a = 10
// console.log(++a);  //! 11


// //*post-increment
// console.log(a++); //! 10


//*pre-dec
// let a = 10
// console.log(--a);

//*post-dec
// console.log(a--);
// console.log(a);


//!Logicalnot

// let a =true
// console.log(!a);



// console.log(!0);
// console.log(!5);
// console.log(!"");
// console.log(!"JavaScript");


//!Arthmetic Operator

// let a =10
// let b = 20
// console.log(a+b); //*30
// console.log(a*b); //*200
// console.log(a-b); //*-10
// console.log(a/b); //*0.5
// console.log(a%b); //*10
// console.log(a**b); //*1000000000


//!Assignmnet Operators

//^ Simple assignmnet
// let a =10

//^ Addition Assignment
// a+=1
// console.log(a);

// //^Subtraction aassignment
// a-=2
// console.log(a);

//^Multiplication assignment
// a*=2
// console.log(a);

//^division assignment
// a/=5
// console.log(a);

//^modulus assignment
// a%=2
// console.log(a);




//!comparsion operators

//^equal to (==) check value only not data type
// let a = 10 //~
// let b= 10
// console.log(a == b);


//^not equal to (!=)  check value only not data type
// let a =10
// let b =10
// console.log(a!=b);

//^strict equal(===) check value along with data type
// let a ="10"
// let b =10  
// console.log(a===b);


//^ stict not-equal to(!==) check value along with data type

// let a ="20"
// let b= 10
// console.log(a!==b);


//^ greater than and lesser 
//^ greater equal to and lesser than equal to

// let a =10
// let b = 20
// console.log(a>b);
// console.log(a<b);

// console.log(a>=b);
// console.log(a<=b);




//!Bitwise Operator
//* 32 bits were working in js
//!AND operator

// let a=6  //*4
// let b=4
// console.log(a&b);


// let a =3   //*2
// let b =2
// console.log(a&b);

//*11
// let a=11
// let b=15
// console.log(a&b);


// let a=8  //*0
// let b=7
// console.log(a&b);


//! OR
// let a = 5
// let b =6
// console.log(a|b);

// let a = 6  //*6
// let b =4
// console.log(a|b);


// let a = 3 //*3
// let b =2
// console.log(a|b);


// let a = 11 //*15
// let b =15
// console.log(a|b);

// let a = 8 //*15
// let b =7
// console.log(a|b);

//! XOR

// let a =5  //*3
// let b =6
// console.log(a^b);

// let a =6  //*2
// let b =4
// console.log(a^b);


// let a =11  //*4
// let b =15
// console.log(a^b);


// let a =3 //*1
// let b =2
// console.log(a^b);


// let a =8 //*15
// let b =7
// console.log(a^b);


//!NOT (~)

// let a =5  //* -6
// console.log(~a);

// let a =-8
// console.log(~a);

// let a =8
// console.log(a<<2);  //*left shift

// console.log(a>>2); //*right shift


//!Ternary Operators

// let age =10

// let result = age>=18 ? "eligibale" : "not-eligible"
// console.log(result);


// let a=10
// console.log(a>5 ? 'pass' :'fail');



// ^ ternary operator
let a = 10
let b = 25
let c =15
let result = (a>b)?(a>c?a:c):(b>c?b:c);
console.log(result);
































