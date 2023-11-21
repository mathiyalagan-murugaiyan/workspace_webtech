
// console.log("hi")
// console.log(window)

//string with double quote

// let str = 'hi'
// console.log(str)
// console.log(typeof str)

// //string with double quote
// let str1 = "let's do it"

// console.log(str1)
// console.log(typeof str1)

// //string with backsticks quote template string
// let str2 = ` hi "there" `

// console.log(str2)
// console.log(typeof str2)

//advantages of template string

// let str = 'smith'

// let str1= 'phone'

// //console.log(str + "\n"+str1)

// console.log(`${str} 
// ${str1}`)

// let str = 'smith'

// let str1=`${str} phone`

// console.log(str1)

// // NUMBER

// let num1 = 5

// console.log(num1)

// console.log(typeof num1)

// let num2 = 5.5

// console.log(num2)

// console.log(typeof num2)

// let num3=-5

// console.log(num3) 

// console.log(typeof num3)

// let num4=10/2

// console.log(num4) 

// console.log(typeof num4)

// let num = Number.MAX_SAFE_INTEGER

// let num1 = Number.MIN_SAFE_INTEGER

// console.log( num)

// console.log(num1)

// let num2=2**53-1

// console.log(num2)

// let num3 = -(2**53-1)

// console.log(num3)

// console.log(num2+ " "+ num3)

// console.log(typeof 9n)

/* BOOLEAN */

// let bool1= true
// console.log(bool1)
// console.log(typeof bool1)

// let bool2 = false
// console.log(bool2)
// console.log(typeof bool2)

/*  NULL */

// let tamil = 100

// console.log(typeof tamil)

// let eng = null

// console.log( typeof eng)

// let  a ;

// console.log(a)

// a=10

// console.log(a)

// //console.log(num)

// let b;

// console.log(b)

// b=20

// console.log(b)

// let person = {
//     ename:"smith",
//     salary:20000
// }
// console.log(person)

// const name1 = "jack"

// console.log(name1)

// let name1; //declaration is can be don

// name1="jack" //initialization can be don

// name1= "rose" //re-iniztialization can be don

// console.log(name1)

// //let name1 = arun; //redeclaration and initialization not be don

// let name2= vasu

// console.log(name2)

//var

// var name1;
// name1=sudhan

// name1= robert

// scenario 1

// var a=1
// var b=2

// var c=a+b
// console.log(typeof c)

// console.log(c)

// scenario 2

// 

// var a=5

// var b ="5a"

// var c="w"

// console.log(isNaN(a))

// console.log(isNaN(b))

// console.log(isNaN(c))

/////////////////////////////////////////////

// var a = alert("hi")

// console.log(a)

// var b = confirm(click)

// console.log(b)

//window.location = "https:www.wikkipedia.com"

// var a = prompt("Enter the name")

// console.log(typeof a)

// var b = Number(prompt("Enter the age"))

// console.log(b)

// var a =Boolean( 1)

// console.log(a)

// console.log(typeof a)


// var fristName = prompt("Eter the fname")

// var lastName = prompt("Enetr the lname")

// var age = Number(prompt("Enter the age"))

// var mobile = Number(prompt("Enter the mobile"))

// var qulification = prompt("Enter the qulification")

// console.log(`fname:${fristName},lname:${lastName} 
// age:${age}
// mobile:${mobile}
// qulification:${qulification}`
// );

// var res = true
// while(res){

//   res = confirm( )

// }


//  var res =false
// while( res== false ){
// res = confirm( window.location = "https:www.pixabay.com")
// }
   
// let res = confirm("do you continue")

// if(res==true){
//     window.location = "https:www.pixabay.com"
// }
// else{
  
//    while(true){
//     res = confirm("do you continue")
//    }
//    }


// while(true){
//    var res1= confirm("do you continue")
//     if(res1 == true){
//         window.location = "https:www.pixabay.com"
//         break
//     }
//     else if (res1){

//          confirm("do you continue")
         
//     }
// }
// ebility of js engine  search for a variable inside block and go to the globale 

// var  a = 10
// console.log(window)

// {
//     let a =20
//     console.log(a) 
        
//     }
// console.log(a)


// var b = 20
// {

//     let b=23
    
// }

//var suporting hoisting

// console.log(a)

// var a
//  a= 10

//  console.log(a)
 

// let not suport hoisting  //they are belong to TDZ
//(temporal dead zone)- time gap between declaration and intialization

//variable which are belong to tdz we can not mak hoisting

//  console.log(a)
 
//  let a
//   a= 10
 
//   console.log(a)

//program1

// var a=10
// {
//     a=25
//     {
//         let a=45
//         console.log(a)
//     }
    
//     console.log(a)
// }
// console.log(a)

//program2

// var a=45
// {
//     let a=80
//     {
//         let a=90
//         console.log(a)
//         console.log(window.a)
//     }
//     console.log(a)
// }

//program3

// var a1=50
// {

//     let a=45
//     var a1=95
//     {
//         let a=55
//         var a1=105
//         console.log(a)
//         console.log(window.a1)
//     }
//     a="parent"
//     console.log(a)
//     console.log(a1)
// }
// console.log(a1)


// let a = "smith"

// console.log(a instanceof String)

// let a1 = new String( "smith")

// console.log(a1 instanceof String)

/* ***************************************************************************************************** */

//call bu value

// let a = "java"

// let person = a

//  a ="python"

// console.log(a)

// console.log(person)


// call by reference


// let home = {

//     value:20

// }

// let home1 = home

// console.log(home)

// home1.value=50

// console.log(home)

// console.log(home1)

// let a = prompt();

// let b = prompt();

// let c=(a+b)
// console.log(c)
//  c=(a-b)
// console.log(c);
// c=(a/b)
// console.log(c);
// c=(a%b)
// console.log(c);
// c=(a++)
// console.log(c);
// c=(++a)
// console.log(c);
// c=(b--)
// console.log(c);
// c=(--b)
// console.log(c);

// compond assingment

// let a= 10

// a+=10
// console.log(a);
// a-=10
// console.log(a);
// a/=10
// console.log(a);
// a%=10
// console.log(a);
// a*=10

// console.log(a);

//relational operator

// console.log(10<15);
// console.log(10>15);
// console.log(10<=10);
// console.log(10<10);
// console.log(10>=10);
// console.log(10>10);


// var str1 ="smith"

// // var str2 ="smith"

// var str2 = new String("smith")

// console.log(str1 == str2);

// var str3 = new String("jack")

// var str4 = new String("jack")

// console.log(str3 == str4);

// console.log(true == 1);

// console.log(0 == null);

// console.log(true == "");

// console.log(undefined == false);

// console.log(null == null);

// console.log();



var str1 = new String("smith")
var str2 = new String("smith")

console.log(str1===str2);

var str = "smith"

var str1 = new String("smith")

console.log(str === str1.valueOf());









