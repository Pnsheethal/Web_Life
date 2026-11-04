                                                                JAVA SCRIPT NOTES

high level programming lang which use to create the interactive web pages
only lang inderstood by browser
it's a scripting language
it is lang use at browser side as well as server sideit is commonly and popular language

charactersics (5):
    1.client-side scripting lang:runs inside the browsr(chrome),no need for server to process evey action
            (REPL (read evaluate print loop) env:envernoment where we can directly execude the code no needfolder  )
    2.dynamiclly typed lang :no need to define the variable types,it take automatically detects the type at run time
    3.weakly typed lang : allows operations b/t differnt datat types.it may cause unexcepted behvouior that's y it called as(weekly typed)
    4.interpreted lang :executs line by line in the browser
    5.synchronous in nature(single-thread):executes one task at a time in order,can cause delays if one task takes too long
                but also support the asynchronous

        6. Case-sensitive language
        JavaScript distinguishes uppercase letters from lowercase letters.
        7. Event-driven language
        JavaScript can respond to events such as mouse clicks, key presses, and form submissions.
                When the user clicks the button, JavaScript displays an alert.
        8.DOM manipulation
        JavaScript can access and modify HTML elements and their content or styles through the Document Object Model (DOM)

ways to add JS:
        internal JS: by using <script> tag at end of the body tag
        external js:writing the code in other file by using .js and connecting to HTML
        inline js:

variable: a variable is like a container that stores data
ways to declare variable:
                var:    only declarazition is possible using  var
                        intialization and declarazition can be done in difffernt line
                        intialization and declarazition can be done in same line
                        re-intialization is possible
                        re-declarazition is possible

                let:   only declarazition is possible using  let
                        intialization and declarazition can be done in difffernt line
                        intialization and declarazition can be done in same line
                        re-intialization is possible
                        re-declarazition is not - possible


                const: only declarization is not possible using const
                        intialization and declarazition can not done in difffernt line
                        intialization and declarazition can be done in same line
                        re-intialization is not  possible
                        re-declarazition is not - possible
DataType:
        primitive datatype: 7 types deails with single data
                number: it contain intergers and decimal (1,2.3,55..etc)
                string: combination of char enclosed with single or double quotes
                boolean:true (1)or false(0)
                null: the typeof null is object :
                        it give object as a output when we check for the typeof it  bcz it is bug in javascript (object)
                undefined: a variable that exist but has no value assigned yet

                symbol: even though the data is same it will create the unique identity or variable
                                it will give a unique reference
                big-int:to spificy this we need to add the "n"
        non-primitive datatype:3
                object:
                array:
                function:


Operators:
1. Unary Operator: work on single operator
        1. Unary +:converts an oprand to a num
        2. Unary -: create the negative value
        3. Increment (++): 
              pre-increment (++a)
              post-increment (a++)
        4. Decrement (--)
        5. Logical not: (!)

2. Arthmetic operaotr 
3. Comparsion:boolean output
        equal to (==) :it will check only value not the datatype
        not equal to (!=)
        strict equal(===):it will check the value as well as datatype also 
        strict not equal to(!===)
        greater than(>):
        lesser than(<):
        greater equal to(>=):
        lesser than equal to(<=)

4. Bitwise operator:
        AND (&)
        OR (|)
        XOR ()
        NOT
5. Logical 
6. ternary
7. Assignmnet operator:
        simple assignmnet (=) : assign the value
        addition assignment(+=) : 
        subtraction assignment(-=):
        modules assignment(%=):
        multiplication(*=)
        division(/=)


Hoisting : accessing the vaiabe before declarization.
          variables comes top of the scope 

                in var it is possible (it show the undefined)
                but in let,const is possible but it move to a temporal dead zone(it is a timespan b/w accessing var and declar a var in leat and const) it show the reference error

variable phase and execution phase: js engine will read the js code 2times
                                1st js engine reading the js code is in variable phase (only read the variables)
                                2nd time it will be a execution phase


looping: is a way to repeat a block of code multiple times based on a condition
Functions: 
        reusable block of code to perform a specific task  .
        It executes when they were called.
        avoid the repetition of code

parameters: is a variable defined in a function's definition
arguments: are the actual values when ever function is called
return: The return statement stops the execution of a function and returns a value.
        should be written at last line of the funcction body

types of function:
        1. named func: if func having a name is known as named function
                         it is also called as function declaration
        2. anonymous func:  a function doesn't have any name
        3. arrow func: shorter way of writing func
                        it is also called as fat arrow function 
                        writing the tradationalin modern apporach 
                        syntax: () => {}
        4. callback func is a function passed into another function as an arrgumnets 
        5. HOF func ( higher order function): which accept a callback function as an parameter  or returning it's function is know as hof function
                       

function expression: if we store a function in a variable is know as function expression

                difference b/w function declaration and expression

not mentioning return keyword it is a : implicit return
writing the return keywoed: explict return


string: im-mutable
        types:
        1. string literals
            * using single quotes
            * double quotes
            * backtick (templete_ literal) is use for static
            and interpolition is for dynamic purpose
        2. string object:
        the output will be in the from of 
            * [String: 'java script']
                object
string methods:
        static methods:
                        string.fromcharcode: fromcharcode it work only the range of 65,000
                        string,fromcodepoint : fromcodepoint will work on above 65,000
                        string.raw: code will give the exact code will be output use backtick
        string Instance (25):
                        at() -->return the char at specified position  both positive and negative index will work
                                return type is string
                        charat() -->return the char at specified position but work in positive index
                                        if we give negative index it will give empty space
                        charcodeat()-->return unicode at specified index
                        concat() --> concate one or more str
                        includes()--> check if a string contains a specified substring
                                        return in boolean values 
                        indexof()-->returns the index of the first occurance of a specified substring if not found return -1
                        lastindexof() --> return the index last occurance
                        slice()-->
                        substring()-->
                        split()---> split a str into a array based on separator
                        touppercase()-->
                        tolowercase()-->
                        tolocallowercase()
                        tolocaluppercase()
                        trim()--> it will remove the space starting and ending 
                        trimsart
                        trimend
                        startwith: Checks whether a string starts with a specified character or substring.
                        endswith: Checks whether a string ends with a specified character or substring.
                        repeat: Returns a new string containing the original string repeated a specified number of times.
                        padstart: Adds characters to the beginning of a string until it reaches the specified length.
                        padend: Adds characters to the end of a string until it reaches the specified length.
                        replace:
                        replaceall
                        tostring

Non-primitive data:
array: is mutable   
        use to store multiple values in a single variable    
        typeof array is object        

ways to create:
        * using array literal
        * using array constructor:  if we pass single item in array it will consider as the length

array methods:
        static methods (3):
                Array.from{} : converts an iterable or array-like object into an array
                       we can't itterate on boolean and numbers only string
                Array.isArray():it will check given data is array or not 
                                always return boolean values 
                Array.of()=> creates a new array using the given values.
                                    it will return the data in array
                                if we give the single item it will take as item only
                
        instance methods (31):
                1        push(): add one or more element at end of the array
                2       pop(): remove the end element
                3        shift():remove the starting of the array
                4       unshift():add an element at start of an array
                5       slice(): return a shallow caopy of a portion of array into a new array
                6       splice():changes the contents of an array by removing,replacing,or adding elements
                               it will return the 
                               if i don't want to delete the items in array but need to add the items for that we need togive the deletecount as 0
                7       concat(): merge the 2 or more array and retrn new array
                8       reverse(): reverse the array
                9       join(): convert the array into a string by specified seperator
                10       indexof()-->returns the index of the first occurance of a specified substring if not found return -1
                11      lastindexof() --> return the index last occurance
                12       includes()--> check if a array includes a specified element or not
                13       entries(): return the object of key ,value pair by using the iterative for it will give in nested array
                14      keys()
                15      values()
                16      every():

Object: 