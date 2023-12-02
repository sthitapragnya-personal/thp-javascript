// console.log('hello world'); //hello world
// console.log('hello world 1'); //hello world 1
 

//declairng variables and values in js

// var myname="sthita paragnya sahoo";
// var myage=26;
// var 1gfgf=34; error
// var $a=36;
// var _a=37;

// var _a b=66; //error

// console.log(myname);
// console.log(myage);
// console.log(1gfgf);
// console.log($a);
// console.log(_a);

//note : variables names are case sensitive;

//var var= 10; // error , we cannot use a variable name as the name of any keyword .


// data types in js
//---------------------

// var myname="sthita";
// console.log(myname);
// console.log(typeof(myname));

// var myage=22;
// console.log(myage);
// console.log(typeof(myage));

// var iamsthita=true;
// console.log(iamsthita);
// console.log(typeof(iamsthita));

// var iamsthita=false;
// console.log(iamsthita);
// console.log(typeof(iamsthita));


// console.log("---------------------------")
// console.log(10+"20"); //1020 // here it acts as string concatination
// console.log(10-"20"); //-10 // it is a bug that is substarction is done here as integers
// console.log("java"+"script");
// console.log("java"+    "script");
// console.log("java"+"  script");
// console.log(""+    "");
// console.log(""+0);
// console.log("sthita"-"pragnya"); // NaN means not a number used to check whether a value is number or not


// note : in js true=1 and false=0
// console.log(true+true);//2
// console.log(true+false);//1
// console.log(false+true);//1
// console.log(true-true);//0
// console.log(false-true);//-1



//the difference between null and undefined
//--------------------------------------------

// var iamuseless=null;
// console.log(iamuseless); //null

// var iamstandby;
// console.log(iamstandby); //unefined

// // note : undefined is a data type

// console.log(typeof(iamuseless)); //object -> but the null is not a object that is it is the second bug of the js

// console.log(typeof(iamstandby)); // undefined is the data type


//what is NaN
//-------------

//note : NaN stands for not a number 
//-> it is a property of the global object
//-> it is a variavle of the global scope 
//-> means it can be accessed anywhere
//-> its initial value is not a number
//--------------------------------------
// console.log("hello"-"world"); //NaN

// var myphonenumber=56478389292;
// var myname="sthita";
// console.log(myphonenumber);
// console.log(myname);

// console.log(isNaN(myphonenumber));
// console.log(isNaN(myname));
// //---------------------------------------------


// if (isNaN(myphonenumber)) {
//     console.log("please enter a valid phone number");
// }
// else{
//     console.log("correct phone number");
// }

// //------------------------------------------------

// if (isNaN(myname)) {
//     console.log("please enter a valid phone number");
// }
// else{
//     console.log("correct phone number");
// }



//NaN practice
//-------------------------

// console.log(NaN===NaN); //false
// console.log(Number.NaN===NaN); //false
// console.log(isNaN(NaN));//true
// console.log(Number.isNaN(NaN));//true
// console.log(isNaN(Number.NaN));//true



//expressions and operators
//---------------------------------

// console.log(5+20); //25


//assignment operator
//it assigns a value  to its left operand
//based on the value of its right operand
//the simplest assignment operator is (=)
// var x=10;
// var y=10;
// console.log("is both the values of x and y is same "+ (x==y));



//arithmatic opeator
//-----------------------------
//this operator takes numerical values
//it uses literals or variables as its operands and returns a single value as the output
// +,-,*,/,%
// console.log(3+3);//6
// console.log(3-3);//0
// console.log(3*3);//9
// console.log(3/3);//1
// console.log(3%3);//0

// we also have the increament and the dereament operator
//---------------------------------------------------------
//++, --
//x++,--x

//prefix increament , prefix decreament , postfix increament and postfix decreament operator
//--------------------------------------------
//x++ it first returns the value and then increaments itself
//++x it first increaments itself and then returns the value
// var num=15;
// var newnum=num++;
// console.log(num);//16
// console.log(newnum);//15


// var num=15;
// var newnum=++num;
// console.log(num);//16
// console.log(newnum);//16

//similarly we have --x and x--
// var num=15;
// var newnum=num--;
// console.log(num);//14
// console.log(newnum);//15


// var num=15;
// var newnum=--num;
// console.log(num);//14
// console.log(newnum);//14



//comparission operator
// it compares the operands and then returns the boolean value

// var a=10;
// var b=20;

// console.log(a==b);//false
// console.log(a!=b);//true
// console.log(a>b);//false
// console.log(a<b);//true
// console.log(a>=b);//false
// console.log(a<=b);//true


//logical operators
//it retruns the boolean values
// &&,||,!

// var a=30;
// var b=-20

// console.log(a>b && b>0); //false
// console.log(a>b || b>0); //true

// console.log(!true);//false
// console.log(!false);//true




//string operators
//---------------------

//string concatination operator (+)
//--------------------------------------

// console.log("hello world");//helloworld
// console.log("hello"+" world");//hello world

// var firstname="sthita";
// var lastname="sahoo";
// console.log(firstname+" "+lastname);//sthita sahoo




//challenge 4:
//-----------------

//what will be the output of 3**3 
// ** it is the exponantiation operator and helps to calculate the power 
// console.log(3**3);//9
// console.log(4**2);//4 rase to 2 = 16
// console.log(10 ** -1);// 1/10 = 0.1

//what will be the output if we add a number with a string
// console.log("hello"+13);
// console.log("10"+"23");

//write a programn to swap to numbers without the use of 3rd variable
// var a=10;
// var b=20;
// console.log(a+" "+b);// 10 20
// b=a+b;
// a=b-a;
// b=b-a;
// console.log(a+" "+b);// 20 10



// what is the difference between == and ===
//-------------------------------------------
//== it only checks the value
// === it checks both the value as well as the data type
// var num1=5;
// var num2="5";

// console.log(num1==num2);//true
// console.log(num1===num2);//false



//control statments and the loops
//--------------------------------

//if else 
// if ture then if part runs and if false then else part runs

// var tmrow="rain";
// if (tmrow=="rain") {
//     console.log("take a rain coat");
// } else {
//     console.log("no need of the raincoat");
// }


//write a program and find out wether the year is a leap year or not
// not required



// what is truthy and falsy values in js
//------------------------------------------

//in js we have 6 falsy values -> 0,"",undefined,null,NaN,false

// var score=0;
// if (score) {
//     console.log("we lost the game");
// } else {
//     console.log("yes we lost the game");
// }

// var score="";
// if (score) {
//     console.log("we lost the game");
// } else {
//     console.log("yes we lost the game");
// }

// var score=null;
// if (score) {
//     console.log("we lost the game");
// } else {
//     console.log("yes we lost the game");
// }

// var score=false;
// if (score) {
//     console.log("we lost the game");
// } else {
//     console.log("yes we lost the game");
// }

// var score=NaN;
// if (score) {
//     console.log("we lost the game");
// } else {
//     console.log("yes we lost the game");
// }

// var score=undefined;
// if (score) {
//     console.log("we lost the game");
// } else {
//     console.log("yes we lost the game");
// }

// var score2;
// if (score) {
//     console.log("we lost the game");
// } else {
//     console.log("yes we lost the game");
// }


//conditional ternary ooperator
//------------------------------
// it is the only operator in js that takes 3 operands
// var age=17;
// if (age>=18) {
//     console.log("you can vote");
// } else {
//     console.log("you can't gove the vote");
// }

// var value=age>=18?"yes you can give":"no you can't";
// console.log(value);

//if-elseif-nested if-else
//=---------------------------

// if (area="circle") {
    
// } else if() {
    
// }
// else if(){

// }
// else{

// }



//switch statement
//----------------------

// switch (area) {
//     case "circle":
        
//         break;
//         case "triangle":
        
//         break;
//         case "square":
        
//         break;
//         case "rectangle":
//            console.log("the raea of the rectangle");
//         break;    
//     default:
//         console.log("given area not here");
//         break;
// }


//break -> if we write break then it goes out of the conditional statement


//while loop
//---------------------

//print from 1 to 10
// var i=1;
// //block scope
// while(i<=10){
//     console.log(i);
//     i++; // if we don't write this line then it goes in the infinite loop
// }



//  do while loop
//-----------------------------------------

// var i=91;
// do{
//   console.log(i);
//   i++;
// }while(i<=100);



// for loop
//------------
// for(var i=201;i<=210;i++){
//     debugger;
//     console.log(i);
// }

// var x=8;
// for (let index = 1; index <=10; index++) {
//     console.log(x+"*"+index+"="+(x*index));
    
// }


//functions in the js
//------------------------

//function defination jn js
//-----------------------------
//-> it is a block of code designed to perform a perticular task
//-> before we use a function we need to define it => called as function declaration 

// function hello(s) {
//     console.log(s);
// }
// hello("geetanjali");


//what is the difference between the function parameter and the function arguments
//------------------------------------------------------------

// function parameter are the variables that are created inside the function and function arguments are the values that are passed to the function

// function sum(a,b){
//     var c;
//    return a+b;
// }
// console.log(sum(10,20));


//function expression
//------------------------
//-> means create a function and then assign to a variable
// function sum(a,b){
//     return a+b;
//  }
//  var x=sum(10,20);
//  console.log(x);



// anonymous function
//------------------------
//-> means the fucntion that has no name

// var hhh=function(a,b){
//     return a*b;
// }
//  console.log(hhh(10,20));



 //WELCOME TO ECMAscript
 //----------------------

 //var vs let vs const
 //--------------------

//  var aa="sthita";
//  console.log(aa); //sthita
//  aa="shubham";
//  console.log(aa); //shubham

// //--------------------------

// let bb="sthita";
// console.log(bb);//sthita
// bb="shubham"; 
// console.log(bb);//shubham

// //------------------

// const cc="sthita";
// console.log(cc); //sthita
// cc="shubham"; // error as the value of a const can never be changed
// console.log(cc);


 //var -> function scope
 //let and const -> block scope
 //------------------------------------

//  function biodata1(){
//     var myfirstname="sthita";
//     console.log(myfirstname); 
//     if (true) {
//         var mylastname="sahoo";
//         console.log("inner "+myfirstname);
//         console.log("inner "+mylastname);
//     }
//     console.log("innerouter "+mylastname);
//  }
//  biodata1();

 //------------------------------------

//  function biodata2(){
//     let myfirstname="sthita";
//     console.log(myfirstname);
//     if (true) {
//         let mylastname="sahoo";
//         console.log("inner "+myfirstname);
//         console.log("inner "+mylastname);
//     }
//     console.log("innerouter "+mylastname); //error
//  }
// biodata2();

 //-------------------------------------

//  function biodata3(){
//     const myfirstname="sthita";
//     console.log(myfirstname);
//     if (true) {
//         const mylastname="sahoo";
//         console.log("inner "+myfirstname);
//         console.log("inner "+mylastname);
//     }
//     console.log("innerouter "+mylastname);
//  }
//  biodata3();


//template literals
//----------------
//-> also called as the template strings

// var x=8;
// for (let index = 1; index <=10; index++) {
//     var p=x*i;
//     console.log(`${x}*${i}=${p}`);
//    console.log(x+"*"+"index"+"="+(x*index));
// }


//default argument
//-----------------------
//-> it gives default values to the variables if no value is given to the variable

// function mult(a,b){
//     return a*b;
// }
// console.log(mult(10,4));//40

// function mult(a,b){
//     return a*b;
// }
// console.log(mult(10));//NaN


// function mult(a,b=3){
//     return a*b;
// }
// console.log(mult(10)); //30


// function mult(a=2,b=3){
//     return a*b;
// }
// console.log(mult());//6



//fat arrow functions
//---------------------
// console.log(sum2());// the sum of the 2 numbers is 11
// function sum2() {
//     let a=5,b=6;
//     let sum=a+b;
//     return `the sum of the 2 numbers is ${sum}`;
// }

// now we will convert the above code into fat arrow function
//------------------------------------------------------------

// console.log(sum3()); // Cannot access 'sum3' before initialization

// const sum3=()=>{
//     let a=5,b=6; 
//     let sum=a+b;
//     return `the sum of the 2 numbers is ${sum}`;
// }
// console.log(sum3());


  
// const sum3=(a,b)=>{
//     //let a=5,b=6;
//     let sum=a+b;
//     return `the sum of the 2 numbers is ${sum}`;
// }
// console.log(sum3(10,20));

//--------------------------

// const sum3=()=>{
//     let a=5,b=6;
//     return `the sum of the 2 numbers is ${a+b}`;
// }
// console.log(sum3());

// const sum4=()=>`the sum of the 2 numbers is ${(a=10)+(b=7)}`;
// console.log(sum4());

// no need to write the return statemnt if there is only one line of code in the function and you want to return it
// we will see the use of this fat arrow funtion when we will study objects

// const sum5=(a,b)=>`the sum of the 2 numbers is ${a+b}`;
// console.log(sum5(10,20));



//arrays in js
//---------------
// in js we have the array class 
//and any array is the prototype of the Array class

// var friends=['kuna','muna','tuna',1,true,1234,23.77];
// console.log(friends);

// console.log(friends[0]); // used to see the first element of the array
// console.log(friends[friends.length-1]);// used to see the last elemnt of the array


// another way to create a array
//-------------------------------
// var arr= new Array; // any array is the prototype of the Array class 
// arr=['1','2','3'];
// console.log(arr);

// var friends=['kuna','muna','tuna','buna'];
// console.log(friends);
// console.log(friends.length);//used to get the length of the array


// so to navigate the array we use for loop
//------------------------------------------
//  var friends=['kuna','muna','tuna','buna'];
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

//for in loop -> it gives the index number of the array elements
//--------------------------
// var friends=['kuna','muna','tuna','buna'];
// for(let elements in friends){
//     console.log(elements);
// }
// for(let elements in friends){
//     console.log(friends[elements]);
// }


//for of loop -> it gives directly all the elemnts of the Array
//---------------------------------------------------
// var friends=['kuna','muna','tuna','buna'];
// for(let elements of friends ){
//     console.log(elements);
// }

// console.log("------------------------");

// for each loop
//----------------
// var friends=['kuna','muna','tuna','buna'];
// friends.forEach(function(element,index,array){
//    console.log(element);
// });


// var friends=['kuna','muna','tuna','buna'];
// friends.forEach(function(element,index,array,){
//     console.log(element+" index : "+index+" "+array);
//  });

 //note : in forEach loop we cannot use the forEach loop
 // that is we cannot use nested foreach loop


 // we will now do the forEach loop with the fat arrow function
 //---------------------------------------------
//  var friends=['kuna','muna','tuna','buna'];
//  friends.forEach((element,index,array)=>{
//      console.log(element);
//  });

//  array.forEach(element => {
      
//  });


// now we will see various functions of the array
//----------------------------------------------------

//searching and filter in the array
//------------------------------------


// var friends=['kuna','muna','tuna','buna','muna','kuna'];
// console.log(friends.indexOf('tuna')); 
// // indexOf() gives the first index where the value is found

// console.log(friends.indexOf('kuna',2));// it starts searching from index=2; //5

// console.log(friends.indexOf('puna'));//-1 it will return -1 if he elemnt is not present/found


// indexOf() is case sensitive

//lastIndexOf() -> gives the index where it is found last
// that is it searches from backward direction from the last
// var friends=['kuna','muna','tuna','buna','muna','kuna'];
// console.log(friends.lastIndexOf("kuna"));


// includes() -> checks whether the element is present or not
// it gives the boolean value.
//---------------------------------------------------------
// var friends=['kuna','muna','tuna','buna','muna','kuna'];
// console.log(friends.includes("kuna"));//true
// console.log(friends.includes("heena"));//false

// // it also searches in the forward direction only
// console.log(friends.includes("tuna",4));//false
// console.log(friends.includes("tuna",3));//false
// console.log(friends.includes("tuna","muna"));//false
//it includes 4 i.e, the starting element



// find() method  ----->>>DOUBT DOUBT DOUBT
// -----------------
// var friends=['kuna','muna','tuna','buna','muna','kuna'];
// console.log(friends.find("kuna"));


//crud operations in the array
//------------------------------
//push()
//-> it adds at the last of the array
//-> it returns the length of the new array
// const animals=['cow','pig','goat','tiger'];
// console.log(animals);
// const count=animals.push('chicken');
// console.log(animals);
// console.log(count);
// animals.push('chicken');
// animals.push('chicken');
// console.log(animals);


// //unshift()
// // -> it adds at the first of the array
// // -> it also retwuns the new length of the array

// console.log(animals);
// animals.unshift('hello');
// console.log(animals);
// animals.unshift('ab','cd');
// console.log(animals);

// //pop()-> used to delete the last element
// // it returns the element that is deleted
// animals.pop();
// console.log(animals);
// console.log(animals.pop());
// console.log(animals);


// //shift() it deletes the element from the fisrt
// animals.shift();
// console.log(animals);




//challenge 8
//----------------
//  const months=['jan','march','april','june','july'];
//splice() method -> it adds as well as removes the elemnts at any index

// 1.add dec at the 5th place
// 2.what is the return value of the slice method
// 3.update march to March(update)?
// 4.delete june from the array

// const newmonth=months.splice(4,0,"dec");
// console.log(months);
// console.log(newmonth);//[] -> means it retuens only the element that is deleted

// suppose i want to add element at the last of the array
// months.splice(months.length,0,"lasttt");
// console.log(months);


// upadet the value of the element
// const updatemonth=months.splice(1,1,"March");

// console.log(months);
// console.log(updatemonth);


// now we will first check wether the elemnt that we want edit or update is present or not if present then only we will edit or update that data
//-------------------------------------------------------------

// const months1=['jan','march','april','june','july'];

// const indexofmonth=months1.indexOf("april");
//const indexofmonth=months1.indexOf("uuu");
// if (indexofmonth!=-1) {
//     const updatemonth1=months1.splice(indexofmonth,1,"aapprriill");
// } else {
//     console.log("the element that we want to update is not presnt in the array");
// }
// console.log(months1);


// delete june from the array
//-------------------------------
// const months2=['jan','march','april','june','july'];
// const deletedmonth=months2.splice(3,1);
// console.log(months2);
// console.log(deletedmonth);


// suppose we want to delete all the data from a month to the last 
//months2.splice(3,Infinity); // deletes all the elements from index 3 to the last



//map()
//----------
//-> it do not changes the original array rather it returns a new array
//  const array=[1,4,9,16,25];
// let newarr=array.map((currelement,index,arr)=>{
//     return element>9;
// });
// console.log(array);
// console.log(newarr);


// const array=[1,4,9,16,25];
// let newarr1=array.map((currele, index, arr)=>{
//     return `index no = ${index} and the value is ${currele} of the array ${arr}`;
// });

// console.log(array);
// console.log(newarr1);


//note:
// the difference between map and for each is 
//----------------------------------------------
// map do not changes the original array rather it returns a new array
// but foreach returns undefined and changes the original array
// map is chainable as multiple methods can be chained with it


//challenge 10
//---------------
//how to find out the square root of each element in the array
//------------------------------------------------------------
// const array2=[16,25,36,49,64];
// let xxx=array2.map((currele,index,arr)=>{
//     return Math.sqrt(currele);
// });
// console.log(xxx);



// we will take a array and multiply each element of the array by two and return the elements of the array that are greater than 10
//--------------------------------------------------------------

// // first i tried this Way
// // ---------------------------
// const array=[1,2,3,4,5,6,7,8,9,10];
// const newarray=array.map((ele,index,arr)=>{
//          return ele*2
// });
// console.log(newarray);
// const newarray2=newarray.map((ele,index,arr)=>{
//          return ele>10;
// });
// // console.log(newarray2);

// but it lastly displayed in true and false 
// -> now lets see the actual solution


// so to this type of questions we need the filter() function
//-----------------------------------------------------------
// const arr12=[2,3,4,6,8];
// let valuearr=arr12.map((curr,index,arr)=>{
//    return curr*2;
// }).filter((curr,index,arr)=>{
//     return curr>10;
// })
// console.log(arr12);
// console.log(valuearr);


//-------------------------------------

// we can also do this with the help of method chaining
// const arr12=[2,3,4,6,8];
// let valuearr=arr12.map((curr,index,arr)=>{
//    return curr*2;
// })
// console.log(valuearr);
// let hellox=valuearr.filter((curr,index,arr)=>{
//     return curr>10;
// })
// console.log(arr12);
// console.log(hellox);


//reduce method
//------------------
// it is used to convert the 3d or 2d array to 1d array
// that is used to flattern the array
// the reduce method executes a reducer method (that we provide) on each element of the array , and results in a single output
// it takes four arguments :
   // -> accumulator
   // ->current value
   // -> current index
   // ->source array

// generally it is used to find the sum, product, average , etc of the elements in the array
//at last the value of the accumulator is getting stored in the variable

// let arr=[5,6,2]; // the default value of the accumulator is zero
// let sum22=arr.reduce((accumulator,currele,currindex,arr)=>{
//     debugger;
//     return accumulator=accumulator+currele;
// })
// console.log(sum22);


//suppose i forgot to add a value in the array
//and i need to use that value only with the help of reduce
//------------------------------------------------------------
//note: only single extra element can be added
// let arr=[5,6,2];
// let sum22=arr.reduce((accumulator,currele,currindex,arr)=>{
//     debugger;
//     return accumulator+=currele;
// },7)
// console.log(sum22);


//note : multiple initial values using reduce() can't be used
//-------------------------------------------------------------
// let arr=[5,6,2];
// let sum22=arr.reduce((accumulator,currele,currindex,arr)=>{
//     debugger;
//     return accumulator+=currele;
// },7,3,4)
// console.log(sum22); 



//how to flattern an array
//----------------------------
//2d aray to 1d array -> yes possible
//------------------------------------
// let arr111=[1,2,3];
// const arrr=[
//     ['zone-1','zone-2'],
//     ['zone-3','zone-4'],
//     ['zone-5','zone-6'],
//     ['zone-7','zone-8']
// ];

// let valv=arrr.reduce((accumulator,currele)=>{
//    return  accumulator.concat(currele);
// });

// console.log(valv);

//---------------------------------

//3d aray to 1d array -> not possible
//------------------------------------
// const arrr=[
//     ['zone-1','zone-2'],
//     ['zone-3','zone-4'],
//     ['zone-5','zone-6'],
//     ['zone-7',['zone-111','zone-112']]
// ];

// let valv=arrr.reduce((accumulator,currele)=>{
//    return  accumulator.concat(currele);
// });

// console.log(valv);



//strings in js
//--------------------

//things we will learn in string 
//-----------------------------------

//escape character
//finding string in string
//searching for a string in string
//extracting string parts
//replacing string contents
//extracting the string characters
//other usefull methods


//in js string is something writen in '' or ""
//strings are used for storing and manupulating the objects
//we can use '' or ""
//these are the primitive datatype
//they can be created from  -> string literals
//                          -> as objects
//                          -> string constructor()

// creating using string literals
// let myname1="sthita";
// let myname2='shubham';
// console.log(myname1);
// console.log(myname2);

//creating using the string constructor
// note : contructor in java
// student s= new Student("sthita",60,56.5);
// s.name=
//-------------------------------------
// let ytname= new String("ja re bhasi bhasi ja"); // creating string using string constructor
// console.log(ytname);

// let mynamess="1234567890 1234567890";
// console.log(mynamess.length);


//backslash or escape character
//-------------------------------
// let anysentence="we are the so called "vikings" from the north"; //error
// console.log(anysentence);

//use of backslash \
// let anysentence="we are the so called \"vikings\" from the north"; 
// console.log(anysentence);

//note: we can use '' in "" and vice versa
// let anysentence='we are the so called "vikings" from the north'; 
// console.log(anysentence);



//finding a string in a string -> indexOf() method
//----------------------------------------------------
// const mybiodata="iam sthita pragnya sahoo a engeenieer";
// console.log(mybiodata.indexOf("pragnya")); //11
// console.log(mybiodata.indexOf("ppp")); //-1
// console.log(mybiodata.indexOf("s",14));//19 // index no. 14 is included
// console.log(mybiodata.lastIndexOf("e"));//35

//searching a string in a string
//----------------------------------
//search() method -> it searches the string and then returns the index where it is found
//it can't search from any perticular index it searches from start to last
//returns -1 if string not found
//------------------

// const mbd="iam sthita a engeeneer";
// let sdata=mbd.search("sthita");
// console.log(sdata); //4

//  sdata=mbd.search("sthita",3); //error
// console.log(sdata); 

//  sdata=mbd.search("zz");
// console.log(sdata); //-1


//extracting the string parts
//-------------------------------
// there are 3 methods to to this
// 1>slice(start,end)
// 2>substring(start,end)
// 3>substr(start,length)

// slice()
//------------
// it extracts the part of the string and returns it in a new string
// it takes 2 parameters start and end , and the end is not included in the output

// var str="apple,banana,kiwi";         
// let ress=str.slice(0,4);
// console.log(ress); //appl

// ress=str.slice(7,-2); //here index -2 is not included in the output
// console.log(ress); //anana,ki

// ress=str.slice(7);//anana,kiwi  -> from given index to the last
// console.log(ress);


//challenge time 11:
// display only 280 characters in the string twitter

// var twiter="kjdbchusdvchusdvcuhsdvcuhsdcjhvsdcjhdscbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbhdsbcuisdvcgsdivcgudvcsudvcusdcusdvcuvsdchusdc sducsdhubcusdbcuvhsdvcusdvcyusdvcusdvcudbchudvcusdvcusvgusdvcusdvyuvsducvshduvchdsvchdbchdsbcywegfywevctyi  evdyu   egbdcyuwevduevtyw   evuivcoywevdueovcyuveCOUDAVCADYOVCDOAUBOYADvcywvcudVCHUDBCUhbcy8dvcydubcudvcyudbcyosdubuydvcydbcyudcduabxouadvcudabxydbchudabxyuabxyuadbyusabxudcadbyAOBXCUDAyvcAUHBXy8agd9 qhd9puqwhd92    73gfeyuvdayvdbvyfbwuebcvcuABXIPUAXHBSAIUXBYAUVahy8ABCyagduyabyuabayubxAYSVXTYASXATXVATYCVAQWZEXRCTVYBUNIMOZWEXRCTFVYGBHUNJMKZXDRCFTVGBHNJMKQWERTYUIOPASDFGHJKLZXCVBNM,QWERTYUIOPASDFGHJKL;ZXCVBNM,WSERTYUIOPZXCVYUBINMO,ZEXRDCTFVYGBHUNJIMXCFVGBHUNIJMK,";


// console.log(twiter.slice(0,280));
 



//substring method
//--------------------
//it is similar to slice but it cannot accept the negative indexes

// var ccxx="apple,banana,guava";
// var  resss=ccxx.substring(0,4); 
// console.log(resss); //appl


// //note : so here when we give (4,-2) i.e, any -ve index then it extracts it like (0,4) that is a bug DOUBT ASK TO SIR
// var ccxx="apple,banana,guava";
// resss=ccxx.substring(-7,-2);//
// console.log(resss);
// resss=ccxx.substring(-7,2);//ap
// console.log(resss);
// resss=ccxx.substring(7,-2); //apple,b
// console.log(resss); 

// resss=ccxx.substring(8,-2); //apple,ba
// console.log(resss); 

// resss=ccxx.substring(0,-2); //
// console.log(resss); 


//substr() method
//----------------
//it is similar to slice()
// the second parameter specifies the length of the extracted part
// var ccxx="apple,banana,guava";
// var resss=ccxx.substr(0,4); 
// console.log(resss);//appl

// resss=ccxx.substr(1,5);
// console.log(resss);//pple, 

// resss=ccxx.substr(7,-2);  // no output if we give negative index
// console.log(resss);

// // the main use of the substr is to extract the text from last
// resss=ccxx.substr(-5);
// console.log(resss); //guava



//replacing the string content
//------------------------------
//the replace() method replaces the specified part of a string with another string
// it do not changes the original string
// it returns a new string
// by default it changes the first time it finds the string to be replaced
//it is case sensitive
// that is vindo can't be replaced by VINOD
// that is vinod not equals to VINOD 

// let biodata="iam sthitapragnya sahoo a boy sahoo";
// var replacedata=biodata.replace("sahoo","mishra");
// console.log(biodata);
// console.log(replacedata);


//how to extract the string characters
//----------------------------------
//we have 3 methods for this
//-------------------------

//1. charAt(index)
//2. charCodeAt(index)
//3. Property access that is -> []


//charAt() method
//-------------------
//retuns the character at a specied index in the String

// var stst="HELLO WORLD";
// console.log(stst.charAt(0)); //H
// console.log(stst.charAt(4)); //O



//charCodeAt()  method
//----------------------
//returns the unicode of the character at a peticular index in the string
//  simply it returns the ASCII value
// var stst="HELLO WORLD";
// console.log(stst.charCodeAt(0)); //72
// console.log(stst.charCodeAt(4));//79


//challenge 12:
//return the unicode of the last charecter in a given string
// var stst="good morning everyone a";
// console.log(stst.charCodeAt(stst.length-1));//97




//Property access [] 
//-------------------
// var str="HELLO WORLD";
// console.log(str[0]);//H
// console.log(str[1]);//E



//other usefull method of the string
//-------------------------------------
// var myname="STHITA pragnya";
// var myname2222=myname.toUpperCase();
// console.log(myname2222);
// console.log(myname);

// console.log(myname.toUpperCase());//STHITA PRAGNYA
// console.log(myname.toLowerCase());//sthita pragnya

//concat() method
//-------------------
//used to join to strings

// var fname="sthita";
// var lname="sahoo";
// console.log(fname+lname);
// console.log(fname.concat(lname));
// console.log(fname.concat(" ",lname));
// console.log(fname.concat(" ",lname," ",123));

//string trim()
//----------------
// it removes white space from both the ends
// it do not removes the space in middle

// var str="       hello world       ";
// console.log(str.trim()); //hello world


//convert a string to an array
//--------------------------------
//then we use the split() method
// var txt="a,b,c,d,e";
//    console.log(txt.split("")); //it splits every every single character of the entire string
//    console.log(txt.split(",")); //splits on the basis of coma
//    console.log(txt.split(" ")); // splts on the basis of space
//    console.log(txt.split("|")); // splits on the basis of pipe [ 'a,b,c,d,e' ]

   // note: if it is unable to split then it shows the entire string as a single element of the array 



   // Date and Time object in js
   //-------------------------------
   // date methods(get and set)
   //time methods(get and set)
    
   // in js the date objects represent a single moment time in a platform independent format
   // date objects contains a number that represents milliseconds single 1 january 1970 UTC


   // creating the date objects
   // there are 4 ways to create a date object
   
   // new Date()

   // new Date(year,month,day,hours,minutes,seconds,milliseconds)
   // // it takes 7 arguments

   // new Date(milliseconds)
   // //we cannot avoid the month section

   // new Date(date String)


   //1st way 
   //--------
   // new Date()
   // date objects are created with the new Date() contructor.Date
// let currdate=new Date();
// console.log(currdate);//2023-04-08T17:19:49.571Z
//  currdate=new Date();
// console.log(currdate);//2023-04-08T17:19:49.591Z
//  currdate=new Date();
// console.log(currdate);//2023-04-08T17:19:49.592Z

// console.log(new Date()); // used to get the generalised time 
// console.log(new Date().toLocaleString()); //it shows the date and the time of the local place that u are currently in //8/4/2023, 10:55:45 pm

// console.log(new Date().toString());//it also shows the date and the time of the local place that u are currently in //Sat Apr 08 2023 22:55:45 GMT+0530 (India Standard Time)

// console.log(Date.now()); // it gives the total milliseconds from jan 1 1970
//1680974857231


// 2nd method
// new Date(year,month,.....)
// 7 number of arguments we enter here  year,month,day,hour,minute,secondand millisecond (order is fixed)
// Note: js counts the months from 0 to 11
// that is january is 0 and december is 11

// var d=new Date(2023,4,13,10,33,30,0);
// console.log(d.toLocaleString()); //13/5/2023, 10:33:30 am

// note it is cumpolsorry to mention the month if you are passing any 1 argument also that is you have to pass minimun 2 arguments that are the year and the month
// var d=new Date(2023);
// console.log(d.toLocaleString()); //wrong date and time //1/1/1970, 5:30:02 am

// var d=new Date(2023,4);
// console.log(d.toLocaleString()); //1/5/2023, 12:00:00 am


// last method
//---------------
//new Date(date string)

// var d=new Date("October 13,2021,11:30:00");
// console.log(d.toLocaleString());//13/10/2021, 11:30:00 am



//date methods()
//---------------------

// how to get the current date
// that is get methods  
// let curdate=new Date();
// console.log(curdate.toLocaleString()); // gives moth date + time 
// console.log(curdate.getFullYear());// gives the year 
// console.log(curdate.getMonth()); // gives the month
// console.log(curdate.getDate());// gives the date
// console.log(curdate.getDay());// gives the day


// how to set our own date
//------------------------
// that is set methods
// console.log(curdate.setFullYear(2020)); //it sets the year but in milliseconds
// console.log(curdate.setMonth(2020)); // sets the month but in milliseconds
// console.log(curdate.setDate(2020)); // sets the date but in milliseconds


//time methods()
//---------------------
// let curtime=new Date();
// console.log(curtime.getTime()); // gives only the time
// console.log(curtime.getHours()); // gives the hour
// console.log(curtime.getMinutes()); // gives the minutes
// console.log(curtime.getSeconds());// gives the seconds
// console.log(curtime.getMilliseconds());//gives the milliseconds


//now we will set our own time
//------------------------------
// let currtime=new Date();
// console.log(currtime.setHours(5));
// console.log(currtime.setMinutes(5));
// console.log(currtime.setSeconds(5));
// console.log(currtime.setMilliseconds(5));
 

// now refer to p1.html


//console.log(new Date().toLocaleDateString()); // it gives the date only

//console.log(new Date().toLocaleTimeString()); // it gives the time only

//console.log(new Date().toLocaleString()); // it gives the date and time both

// now refer to 1.html again


//js Math Object
//---------------

// the math object allows you to perform yhe mathematical tasks on numbers

//console.log(Math.PI); // gives the value of pi //3.141592653589793

//Math.round()
// it returns the value of x rounded to its nearest integer

//let num=10.2565;
//console.log(Math.round(num)); //
 //num=10.5;
//console.log(Math.round(num)); //11

// Math.pow()
//used to find the power
//console.log(Math.pow(2,3));//8

//Math.sqrt()
//used to give the square root of a number
// console.log(Math.sqrt(16));//4
// console.log(Math.sqrt(66));//8.12403840463596

// Math.abs()
// converts the negative value to positive value

// console.log(Math.abs(-99));//99 
// console.log(Math.abs(-89.7876)); //89.7876
// console.log(Math.abs(2-4));//2

 // left space to cpmplete all the remaining math object methods from the notes


//DOM in js
//---------------
//stands for document object model


// what we will do 
// Window vs Documnet
// DOM vs BOM
//DOM Navigation
// searching and getting elements by reference


//what is the difference between Window and Document
//----------------------
 // go through the notes for this


 // DOM vs BOM
 //-------------
// THE DOM IS THE DDocumnet object model which deals with the document, the html elements themselves, ex: document and all traversals u would do in it and events etc

// for ex:
//change the color of the background to red
// document.body.style.background="red";


// bom is the browser object model which deals with the browser components aside from the document , like history, location, navigator, and the screen 
// or simply we an say that all the Window operations which comes under BOM are performed using BOM


// the window also has verios properties
// ex: innerheight and innerwidth



//now lets see more practical on the History object
//-----------------------------
 //refer to 2.html
 //DOUBT why 2.html is not working


 // use thsi code in console by copy paste
 //the functions alert/promt/confirm are the part of BOM
 //they are directly not related to the DOM
 //but they represent pure browser methods of communiting with the user.

 alert(location.href);//shows the current url
 if (confirm("want to visit sthita website ? ")) {
   location.href="https://www.google.com"; // redirects to google page 
 }


//DOM Navigation
//-----------------
// navigation through dom
//refer 3.html

// 1: document.documentElement
      // returns the Element that is the root element of the document. 
// 2: document.head
// 3: document.body
// 4: document.body.childNodes (include tab,enter and whiteSpace)
  // list of the direct children only 
// 5: document.children (without text nodes, only regular Elements)
// 6: document.childNodes.length

// 👉 Practice Time 
// How to check whether an element has child nodes or not?
// we will use hasChildNodes()

// 👉 Practice Time  
// How to find the child in DOM tree 
// firstChild vs firstElementChild
// lastChild vs lastElementChild 
// const data = document.body.firstElementChild;
// undefined
// data
// data.firstElementChild
// data.firstElementChild.firstElementChild
// data.firstElementChild.firstElementChild.style.color = "red"
// vs 
// document.querySelector(".child-two").style.color = "yellow";

// 👉 How to find the Parent Nodes 
// document.body.parentNode
// document.body.parentElement

// 👉 How to find or access the siblings
// document.body.nextSibling
// document.body.nextElementSibling
// document.body.previousSibling
// document.body.previousElementSibling


// how to search the elements and the references 
// we will see the new file
// refer for 4.html for this


//interview question
//---------------------

// what is the difference and the similarities between document .getElementById and document.querySelector
// by the help of .getElementById we get the element that has a unique id but with the help of the .querySelector() we can access the elements through id,class,name,tag, etc ---->doubt


//js events
//------------
/**** Section 11👉 EVENTS in JavaScript ****/


// HTML events are "things" that happen to HTML elements.
// When JavaScript is used in HTML pages, JavaScript can "react" on these events.


// 👨‍🏫 HTML Events
// An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:

// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked
// Often, when events happen, you may want to do something.

// JavaScript lets you execute code when events are detected.

// HTML allows event handler attributes, with JavaScript code, 
// to be added to HTML elements.



// section 1️⃣ 4 ways of writing Events in JavaScript

// 1: using inline events alert();
// 2: By Calling a funcion (We already seen and most common way of writing) 
// 3: using Inline events (HTML onclick="" property and element.onclick)
// 4: using Event Listeners (addEventListener and IE's attachEvent)


// refer to 5.html
 




//js event objects
//----------------------
 //note : Event object is the parent of the event object
    

//js objects
//-------------
/**** Section 7👉 Objects in JavaScript ****/
// A JavaScript object is a collection of properties and values.
// It is an unordered set of data values, which are stored as name / value pairs.
// The following example shows how to create an empty object called person:
var person = {};
console.log(person);
// You can add new properties to this object by assigning them key names. For example:
person.name = 'John';
person.age = 20;
person.city = 'New York';
console.log(person);
// To access these properties, use dot notation like so:
console.log('Name:', person.name);
console.log('Age:', person.age);
console.log('City:', person.city);
// If the desired property does not exist, accessing it will return undefined.
console.log('Does John live in New York?', person.city == 'New York');
// You can also delete properties from an object. Here we remove the age property:
delete person.age;
console.log(person);
// However, if there is no such property, nothing happens.
delete person.address;
// You can check whether a specific property exists or not using the hasOwnProperty() method:
if (person.hasOwnProperty('age')) {
  console.log("The 'age' property exists.");
  } else {
    console.log("The 'age' property doesn't exist.")
    }
    //-------------------------------------------

   
