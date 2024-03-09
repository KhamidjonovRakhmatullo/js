// var a = 10;
// var b = 3;
// var d = a / b;
// var result =  d.toFixed(2)


// console.log(parseInt( a / b))
// console.log( parseFloat(a / b))
// console.log(typeof d)
// console.log( d.toFixed(2))
// console.log( parseInt(result))

//

// var c = 20
// var d = 3
// var e = c / d 
// var f =  +e.toFixed(2)



// console.log(c)
// console.log (d)
// console.log ( parseFloat (c / d ))
// console.log (e.toFixed(2))
// console.log (typeof f)

//


// var a = 30
// var b = 9
// var c = a / b 
// var d = c.toFixed (2)


// console.log (typeof parseFloat (a)) 

// console.log (typeof parseFloat (b))

// console.log (c.toFixed (2))

// console.log (typeof parseInt (d))

//

// var a = 100
// var b = 23
// var c = a / b
// var d =c


// console.log (typeof parseFloat (a))
// console.log (typeof parseFloat (b))
// console.log (typeof parseFloat (c.toFixed(3)))
// console.log (typeof parseInt (d.toFixed(2)))

//

// var a = 51
// var b = 53
// var c = 3.5
// var d = a+b
// var e = c * d
// var f = 3
// var g = e / f

// console.log (parseFloat (a))
// console.log (parseFloat (b))
// console.log (parseFloat (c))
// console.log (d)
// console.log (e)
// console.log (f)
// console.log (g)

//

// var a = 4
// var b = 3
// var c = a / b
// var d = c.toFixed(3)

// console.log (parseFloat (a))
// console.log (parseFloat (b))
// console.log (typeof c.toFixed(3))
// console.log (typeof parseInt (d))

//
 
// var a = 100
// var b = 30
// var c = a / b
// var d = c.toFixed(2)



// console.log (parseFloat (a / b))
// console.log (typeof parseFloat(c.toFixed(3)))  //if i use "parseFloat" it shows //number
// console.log (typeof c.toFixed(2))             // with out it, the answer is //string. But why?  ===.toFixed answers only string
// console.log (typeof d)

//


////////

// var a = 100
// var b = 30
// var c = a / b
// var d = c.toFixed(2)

// console.log (Math.round (c)) //yaxlitlash 5+/-  (2,995 = 3) (2,330 = 2)
// console.log (Math.ceil (2.150))  //yuqoriga yaxlitlash  2.150=3
// console.log (Math.floor (2.995))  //pastga yaxlitlash   2.995=2

// console.log (Math.pow (3,3))  //darajani ko'tarish  "3x3x3" 3x3=9 x3=27 

// console.log (Math.sqrt(9))    //ildiz '2 ostida daraja = 3  9x9=81 
// console.log (Math.cbrt (125)) //kub '3 ostida daraja = 5    5x5x5=125

// console.log (Math.abs(b - a))  //module doim -a son chiqarmaydi
// console.log (b - a)  

// console.log (Math.max(2,4,5,7,9))  //sonlarning ichidan eng kattasini tanlab beradi =9
// console.log (Math.min(2,4,5,7,9))  //sonlarning ichidan eng kichigini tanlab beradi =2

// console.log (parseInt (Math.random() *100)) //raqamni tasodifiy tanlash

//////////



// 

// var a = 20
// var b = 5
// var c = a * b + Math.floor (Math.random () * 10)

// console.log (a)
// console.log (b)
// console.log (Math.floor (Math.random () * 10))
// console.log (Math.round (Math.sqrt (c)))


// a va b natijasini bir-biriga koyaptirng, =kopaytmani darajasini 2 qiling, chiqqan darajani kubga aylantirib kasr sonni 5tagacha qoldiring, va darajasini yuqorilang

// var a = 3
// var b = 2
// var c = a * b
// var d = Math.pow (c,2)
// var e = Math.cbrt (d).toFixed(5)

// console.log (a)
// console.log (b)
// // console.log (Math.min (a, b))
// console.log (Math.pow (c,2))
// console.log (Math.cbrt (d).toFixed(5))
// console.log (Math.ceil (e))


//


// Generate random 100 numbers and choose two answers. With the chosen numbers find the max and make it to math.ceil

// var randomNumber1 = Math.random () * 100
// var randomNumber2 = Math.random () * 99

// /// console.log (Math.random () * 100)                                         
// /// console.log (Math.random() * 99)
// console.log (randomNumber1)                                             //95.14726888827025
// console.log (randomNumber2)                                             //49.50408501326508
// console.log (Math.ceil (Math.max(randomNumber1, randomNumber2)))        //96


//

// a / b yasang va a kvadratini 2 qiling va uni b kub natijasida hosil bo'lgan kasr sonni o'chirib  a1 b1 yig'gindisini modulga o'rang

// var a = 22
// var b = 34
// var a1 = Math.pow (a, 2)
// var b1 = parseInt (Math.cbrt (b))
// var c = b1 - a1

// console.log (Math.pow (a, 2))
// console.log (parseInt (Math.cbrt (b)))
// console.log (Math.abs (c))

// 

// Ikkita o'zgaruvchi a va b yozing, b dan a ni bo'ling while a ni b ga kopaytirib, ikkala natijani bir-biriga qo'shing. Chiqqan kasr sonni 4tagacha kamaytiring va pastga yaxlitlang

// var a = 11
// var b = 23
// var c = b/a + a*b
// var d = c.toFixed(4)

// console.log (a)
// console.log (b)
// console.log (c.toFixed(4))
// console.log (Math.floor (d))


//


// a dan katta sonni va b dan kichik sonni bir biriga qo'shing va kub darajasini aniqlang

// var a = Math.max (1,2,3,4,5,6,7,8,9) 
// var b =  Math.min (1,2,3,4,5,6,7,8,9)

// // console.log (Math.max (1,2,3,4,5,6,7,8,9))
// // console.log (Math.min (1,2,3,4,5,6,7,8,9))
// console.log (a)
// console.log (b)
// console.log (Math.cbrt (a + b))


//


// a dan b ni bo'lib natijasidagi kasb sonlarni 4tagacha kamaytirib umumiy yaxlitlang

// var a = 35
// var b = 12
// var c = a / b 

// console.log (a)
// console.log (b)
// console.log (Math.round (c.toFixed(4)))








//Binary number with 2numbers  "0 and 1"

// let a = 12
// let b = Number (a).toString(2)

// console.log (Number (a).toString(2))
// console.log (parseInt (b, 2))


// let c = "testing code"
// let d = 'Testing code'
// let e = `testing code Name:${d}`

// console.log(c)
// console.log(d)
// console.log(e)


//        //1234567890123456
// let f = `Be coder Academy`

// console.log (f.length) //length of info.  =16 
// console.log (f[15])    //to know which number has what  "counts from 0-1-2-3-4". =y

// console.log (f.indexOf("coder"))   //to know the searched string is in which number, else -1. =3
// console.log (f.search("coder"))    // same with indexOf. =3  
// console.log (f.includes("coder"))  //answers with true or false. =true

// console.log (f.slice(1, -1))  // can slice from end to start, counts from 0 till -1 not with -1. = e coder Academ
// console.log (f.slice(3, 10))  //to slice exact info among the infos, from 0 till 10 not includes 10 =9. =coder A
// console.log (f.substring(3, 10)) // same with slice but can not get -1. =coder A
// console.log (f.substr(3, 10))  // slices 10 spaces from 3 "=means 0", not till 10th space. =coder Acad

// console.log (f.replace("coder", "Developer")) //just replace info from a to b. = Be Developer Academy
// console.log (f.replace(/coDer/i, "Developer")) // /info/i corrects upper and lower cases. =Be Developer Academy
// console.log (f.replace(/Coder/gi, "Developer"))// to replace more same infos  "g", if case differance "gi". =Be Developer Developer Academy

// console.log (f.endsWith("coder")) // =false
// console.log (f.startsWith("Be")) // =true

// console.log (f.toUpperCase());  //=BE CODER ACADEMY
// console.log(f.toLowerCase());  //=be coder academy

// let g = "2 + 2"
// console.log (eval (g));   // we can use math function in string "" =4



//binary numbers
// let aa = 9
// let bb = Number (aa.toString(2))

// console.log (Number (aa.toString (2)))
// console.log (parseInt (bb, 2))

//         //01234567890123456789012
// let cc = "Every soul tastes death"

// console.log (cc.length)
// console.log (cc [11])
// console.log (cc.indexOf("tastes"))
// console.log (cc.search("tastes")) 
// console.log (cc.includes("tastes")) //boolean true 
// console.log (cc.slice(-10))
// console.log (cc.substring(4, 10))
// console.log (cc.substr(4, 10))
// console.log (cc.replace("soul", "-soul-"))



// let str = "Be coder Academy"

// console.log (str.length)
// console.log (str.substring(0, 9))
// console.log (str.includes("Academy"))
// console.log (str.replace(/coder/i, "IT"))



// function StudentList (){
//     console.log (`Rahmatulllo Hamidhonov`)
// }

// StudentList();



// function DevList (name, fname){
//     console.log (name, fname);
// }   

// DevList(`Rahmatullo`,  `Hamidhonov`);



// const DevList = (name, fname,) => {
//     return(
//         console.log(name, fname)
//     )  
// }

// DevList  (`Rahmatullo`, `Hamidhonov`)




// const limit = 60;
// const speed = limit >= 60 ? "over speed" : "Nice!!!"
// console.log (speed);




// let age = 23

// if (age >= 23) {
//     console.log (`Uylanish kerak!`);
// }
// else {
//     console.log (`Sabr qilish kerak!!!`)
// }

// let grade = (parseInt (Math.random () *100))
// console.log (parseInt (Math.random () *100))








//number-1


// Function evalNumbers() prints the result after evaluating arithmetic operations between two numbers of addition, multiplication, division, and modulus in JavaScript.
// 
//  1 Print result of num1+num2 if operation is “add”
//  2 Print result of num1-num2 if operation is “subtract”
//  3 Print result of num1*num2 if operation is “multiply”
//  4 Print result of num1/num2 if operation is “divide”
//  5 Print result of num1%num2 if operation is “modulus”
//  6 Else print “Invalid operation”

// function evalNumbers(){
//     let num1 = 5
//     let num2 = 2


//     if (num1 ){
//         console.log ("Result:", num1 + num2)
//     }

//     // else if( ){

//     // }

    
//     else {
//         console.log (`Invalid Operation`)
//     }
// }

// evalNumbers()
















//number-2


// Function isEvenOrOdd() checks if input number is even or odd by using “%” operator in JavaScript.
//  1 Print “Number is even” if the number is divisible by 2.
//  2 Else print “Number is odd” if the number returns a remainder when divided by 2.

// function isEvenOrOdd (){
//     let num = 5
//     if (num % 2 == 0){
//         console.log(`Number is even`)
//     }

//     else {
//         console.log (`Number is Odd`)
//     }
// }

// isEvenOrOdd();


//number-3


// Function findTriangleType() finds the type of the triangle for given side values by using “==” and “&&” operator in JavaScript.
//  1 Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
//  2 Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
//  3 Else “Scalene triangle.” since values of all sides are unequal.

// function findTreangleType(){
//     let side1 = 5;
//     let side2 = 5;
//     let side3 = 3;

//     if (side1 === side2 && side2 === side3){
//         console.log(`Equilateral triangle`)
//     }
//     else if (side1 === side2 || side1 === side3 || side2 === side3 ){
//         console.log (`Isosceles triangle`)

//     }
//     else{
//         console.log (`Scalene triangle`)
//     }
// }

// findTreangleType();


//number 4


//5.Function checkLeapYear() find if the given year is a leap year or not by using %, !=, && and || operators in JavaScript.

//  1 If year is divisble by 4 and not divisble by 100 then print “leap year”.
//  2 Or if year is divisible by 400 then print “leap year”.
//  3 Else print “not a leap year”.

// function checkLeapYear (){
//     let year = 2010
//     if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
//     console.log (year + " leap year")
//  }

//  else {
//     console.log (year + " not a leap year")
//  }
// }

// checkLeapYear ()


//


//number-5

// let grade = 100

// if (grade >= 90 && grade <= 100){
//     console.log (`A+`)
// }

// else if (grade >= 80 && grade <= 90){
//     console.log (`A`)
// }

// else if (grade >= 70 && grade < 80){
//     console.log (`B`)
// }

// else if (grade >= 60 && grade < 70){
//      console.log (`C`)
// }

// else if (grade >= 50 && grade < 60){
//     console.log (`D`)
// }

// else if (grade >= 40 && grade < 50){
//     console.log (`E`)
// }

// else {
//     console.log (`F`)
// }


// let weather = "cold";

// switch (weather) {
//   case "hot":
//     console.log(`yupqaroq kiyinib oling!`);
//     break;
//   case "cold":
//     console.log(`Qalinroq kiyinib oling`);
//     break;
//   default:
//     console.log(`Bunday ma'lumot mavjud emas`);
// }





// Testing temperature of the room with 3 cases

// function TestingTemperature (temperatureOFroom){
// switch (temperatureOFroom){
//     case "5-degree":
//         console.log ("Temperature of your room is cold!")
//         break;
//     case "12-degree":
//         console.log ("Temoerature of your room is good!")
//         break;
//     case "22-degree":
//         console.log ("Temperature of your room is HOT!!!")
//         break;

// }
// }

// TestingTemperature("5-degree")


// for / loop

// function step() {
//     console.log(`one step`);
//   }
//   for (let i = 0; i < 3; i++) {
//     step();
//   }


// Another way of function if/ else

// const limit = 70;
// const speed = limit >= 60 ? "over speed" : "Nice!!!"
// console.log (speed);


// // Speed limit 

// function speedLimit() {

//     if (speed <= 60){
//         console.log ("Speed is normal")
//     }
//     else if ( speed >= 65 && speed < 80){
//         console.log("Joooqq 25$ for the speed - " + speed + "km/h")
//     }
//     else if (speed >= 80 && speed < 90){
//         console.log ("Gold Ticket for the speed - " + speed + " km/h")
//     }
//     else{
//         console.log ("Sugar Daddy is waiting front the house")
//     }
// }

// speedLimit (speed = 66);
 


