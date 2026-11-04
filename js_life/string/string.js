//! using single quotes
// let name ='sheethal'
// console.log('by using single quotes');
// console.log(name);
// console.log(typeof name);


//! using double quotes
// let name ="sheethal"
// console.log('by using double quotes');
// console.log(name);
// console.log(typeof name);

//! using backtick or templete literal
// let name =`sheethal`
// console.log('using back tick or templete literal');
// console.log(name);
// console.log(typeof name);


//! concatating the string
// let first_name="sheethal"
// let last_name="nagaraj"
// console.log('My first name is' + first_name +' and last name is '+last_name);
// console.log('My full name is ' + first_name + last_name);


//! by using backtick
// ! ${} --> is a interpolation
// let first_name ='sheethal'
// let last_name =' nagaraj'
// console.log(`My first name is ${first_name} and last name is ${last_name}`);
// console.log(`My full name is ${first_name + last_name}`);

// * using string object
// let str = new String('java script')
// console.log(str);
// console.log(typeof str);


//* length and indexing
// let data ='sheethal'
// console.log(data.length);
// console.log(data[0]);
// console.log(data[data.length-1]);  //^ to access the last char

//* fromcharcode it work only the range of 65,000
// let str =String.fromCharCode(83,104,101,101,116,104,97,108)
// console.log(str);

//* fromcodepoint will work on above 65,000
// let str =String.fromCodePoint(128545)
// console.log(str);

//* raw code will give the exact code will be output use backtick
// let str = String.raw`hello\n"+world`
// console.log(str);



//! at()
// let str = 'Javascript'
// console.log(str.at(0));
// console.log(str.at(-1));

// //! charat()
// let a ='Javascript'
// console.log(a.charAt(0));
// console.log(a.charAt(-1));  //^ it will give empty space 

//! charcodeat()
// let a ='Javascript'
// console.log(a.charCodeAt(0));
// console.log(a.charCodeAt(1));

// ! concate()
// let str1 ='Java'
// let str2 ='script'
// let newStr = str1.concat(" ",str2," ", "Wonderful"," ","Language")
// console.log(newStr);

// *includes
let str = 'Javascript is a good language '
// console.log(str.includes('is'));    //*true
// console.log(str.includes('isthe')); //*false
// console.log(str.includes('is',20)); //* the last one index


//! indexof()
// console.log(str.indexOf('a'));

// console.log(str.indexOf('i')); //* index 7
// console.log(str.indexOf('j'));  //* -1
// console.log(str.indexOf('o',5));  //* starting index i can specify (17)

// ! lastindexof()
// let a ='somu rajo'
// console.log(a.lastIndexOf("o"));  //! 8 
// console.log(a.lastIndexOf("o",1));  //! 1

// ! split(separ, limit)
// let str = 'Javascript is a good language '
// console.log(str.split(" ")); //! using separators [ 'Javascript', 'is', 'a', 'good', 'language', '' ]
// console.log(str.split("")); //! it will split the each char 
                            // [
                            //   'J', 'a', 'v', 'a', 's', 'c',
                            //   'r', 'i', 'p', 't', ' ', 'i',
                            //   's', ' ', 'a', ' ', 'g', 'o',
                            //   'o', 'd', ' ', 'l', 'a', 'n',
                            //   'g', 'u', 'a', 'g', 'e', ' '
                            // ]
// console.log(str.split("",2)); //![ 'J', 'a' ]
// console.log(str.split(" ",2)); //![ 'Javascript', 'is' ]

//! touppercase
// let str = 'javascript is a good language '
// console.log(str.toLocaleUpperCase());
// ! to lowercase()
// let str ='JAVASCRIPT IS A GOOD LANGUAGE '
// console.log(str.toLocaleLowerCase());


// ! trim
// let str ="            javascript is a good language "
// console.log(str.length);
// console.log(str.trim());

// console.log(str.trim().length);

// ! trimstart
// let str = "      Javacsript    "
// console.log(str.length);
// console.log(str.trimStart());
// console.log(str.trimStart().length);

// ! trimend
// let str ="    javascript    "
// console.log(str.length);
// console.log(str.trimEnd());
// console.log(str.trimEnd().length);

//! startwith
// let str ="https://www.google.com"
// console.log(str.startsWith("https")); //* true
// console.log(str.startsWith("www")); //* flase
// console.log(str.startsWith("h")); //* true

//! endswith
// let str = "JavaScript";
// console.log(str.endsWith("J")); //* fasle
// console.log(str.endsWith("t")); //*true
// console.log(str.endsWith('Script')); //*true


// !repeat()  
// let a ='Hello '  //^ Hello Hello Hello Hello 
// console.log(a.repeat(4));

// ! padStart()
// let a ="5"  
// console.log(a.padStart(3,"0"));  //005

// let str = 'ramu'  //^ooooooramu
// console.log(str.padStart(10,"o"));


// ! padend()
// let str = 'ramu'
// console.log(str.padEnd(3,"0")); //* ramu
// console.log(str.padEnd(10,"0")); //* ramu000000


// ! replace() -- replace the first occurance only
// let str ="ramu ramu"
// console.log(str.replace('ramu',"somu"));   //*somu ramu


// ! replaceall()
// let str ="ramu ramu"
// console.log(str.replaceAll('ramu',"somu")); //*somu somu
 
// !toString()  returns the string representation of a value
// let str = new String ("hello")
// console.log(typeof str);   //* object
// console.log(str);
// console.log(typeof str.toString());   //* string
// console.log(str);

// ! slice
// let str =" java script is wonderful language"
// console.log(str.slice(0,4));  //* jav
// console.log(str.slice(32,11));  //* empty string
// console.log(str.slice(-15,-7));  //*derful l

// ! substring()
// console.log(str.substring(4));  //*ascript is wonderful language
// console.log(str.substring(0,15));  //*javascript is 
// console.log(str.substring(-5));  //*java script is wonderful language
// //* it will accept from 0 
// console.log(str.substring(22,11)); //*it will swap the index

//^ problems 
//& count the string without using len function
// let data = 'Javascript is wonderful language'
// let count =0
// for(let i=0;i<data.length;i++){
//     count++
// }console.log("length of the string is : ",count);


//& without using len function
// for(let i in data){
//     count++
// }
// console.log(count);

// & count of vowels
// for(let i of data){
//     if ( i=='A' || i=='E' || i=='I' ||i=='O' ||i=='U' || i=='a' || i=='e' || i=='i'  ||i=='o' || i=='u'){
//         count++
//     }
// }
// console.log(count);

// & by using methods
// for(let i=0;i<data.length;i++){
//     if('AEIOUaeiou'.includes(data[i]))
//         count++
// }console.log(count);

// & convert the first char of the sentance in uppercse
//  let data = 'javascript is wonderful language'
//  console.log(data.charAt(0).toUpperCase()+data.slice(1));

// & remove the space b/w the char
// console.log(data.replaceAll(" ",""));


 
 


































































