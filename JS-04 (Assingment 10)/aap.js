//      Variables (let, const, var)
/*
Q1. let, const, aur var mein difference likho.

Ans: var → function scoped, re-declare + re-assign allowed
    let → block scoped, re-assign allowed, re-declare 
    const → block scoped, re-assign , re-declare 

Q2.Ek variable userName banao aur usme apna naam store karo. Console mein print karo.
Ans:
    let userName = "Jannat";
    console.log(userName);

Q3. const variable ko dubara value assign karne par kya error aata hai?
const age = 20
age = 25
Ans: TypeError: Assignment to constant variable

Q4. Output Predict kro
var a = 10
var a = 20
console.log(a)

Ans: Output: 20

Q5.Konsi cheez mutable hai?
const array
const string
const number
Explain.

Ans: const array mutable (elements change ho sakte hain)
    const string  immutable
    const number  immutable

Q6.Aisa code likho:
    name = "Hasan"
    age = 21
    city = "Karachi"
Phir ek sentence print karo:

My name is Hasan and I live in Karachi

Ans:   let name = "Hasan"
    let age = 21
    let city = "Karachi"

    console.log(`My name is ${name} and I live in ${city}`)

//          02 String Methods

Q1. .toUpperCase() aur .toLowerCase() kya karte hain?
Ans:
.toUpperCase() → uppercase
.toLowerCase() → lowercase

Q2, Output predict kro

"javascript".slice(0,4)

Ans: Output: "java"

Q3.Ek string "Muhammad Hasan" mein se "Hasan" extract karo using slice().

Ans: let str = "Muhammad Hasan"
    console.log(str.slice(9)) // Hasan

Q4..charAt() aur indexing mein kya difference hai?

Ans: charAt() → method
    indexing [ ] → direct access

Q5.User ka naam "hAsAn" ho to usko proper lowercase mein convert karo.
Expected:
hasan

Ans: let name = "hAsAn"
    console.log(name.toLowerCase())

Q6.Ek paragraph ko words array mein convert karo using split().
"My name is Hasan"

Ans:"My name is Hasan".split(" ")

 Output: ["My","name","is","Hasan"]

//      03. Arrays

Q1.Array kya hotta h?
Ans: Array = multiple values store karne ka structure

Q2.Ek fruits array banao jisme 5 fruits hon.

Ans: let fruits = ["apple","banana","mango","orange","grapes"]

Q3. push() aur pop() kya karte hain?

Ans: push() → end me add
    pop() → end se remove

Q4.Output predict karo:
let arr = ["a","b","c"]
arr.splice(1,1,"z")
console.log(arr)
Ans: 
["a","b","c"] → splice(1,1,"z")

Output: ["a","z","c"]

Q5.Ek array ka first aur last element print karo.
Ans: console.log(arr[0])
console.log(arr[arr.length - 1])

Q6.Nested array mein "orange" access karo:
let fruits = [["apple"],["banana","orange"]]
Ans:
fruits[1][1] // orange

// 04. Array Methods

Q1. slice() aur splice() mein difference likho.

Ans: slice() → copy, original change nahi hota
     splice() → original change hota

Q2. Ek array mein "Ali" add karo index 2 par using splice().
Ans: arr.splice(2,0,"Ali")

Q3.Array mein se 2 elements remove karo using splice().
Ans: arr.splice(1,2)

Q4.Output predict karo:
let arr = [1,2,3,4]
console.log(arr.slice(1,3))
Ans:
[1,2,3,4].slice(1,3)
Output: [2,3]

Q5.shift() aur unshift() kya karte hain?

Ans: shift() → start se remove
    unshift() → start me add

Q6.Ek students array ki copy banao using slice().
Ans: let copy = students.slice()

//      05. Objects

Q1.Object kya hota hai?
Ans: Object = key-value pairs

Q2.Ek student object banao:
name
age
email

Ans: let student = {
        name: "Hasan",
        age: 21,
        email: "hasan@gmail.com"
        }

Q3.Object ki property access karne ke 2 tareeqe likho.

Ans: dot notation → obj.name
    bracket → obj["name"]

Q4.Output predict karo:
let user = {
name : "Hasan"
}
console.log(user.age)
Ans: Output: undefined

Q5.Object mein new property add karo:
city : "Karachi"
Ans: 
user.city = "Karachi"

Q6.Ek object ka pura intro print karo:
My name is Hasan and my age is 21
Ans: console.log(`My name is ${user.name} and my age is ${user.age}`)


//          06. Data Types

Q1.Primitive data types konsay hain?
Ans:Primitive:
string, number, boolean, null, undefined, bigint, symbol

Q2.Reference data types konsay hain?
Ans: Reference:
    object, array, function

Q3.undefined aur null mein difference?

Ans: undefined → value assign nahi hui
    null → intentionally empty

Q4.Output predict karo:
let a
console.log(a)

Ans:
Output: undefined

Q5.Check karo type kya hoga:
typeof []
typeof {}
typeof null

Ans:
typeof []      // object
typeof {}      // object
typeof null    // object (bug)

Q6.Boolean variable banao aur usko toggle karo.
Ans: 
    let isOn = true
    isOn = !isOn


//                        07. Conditional Statements

Q1.if else kab use hota hai?
Ans: Condition check ke liye use hota hai

Q2.Agar number even ho to "Even" print karo warna "Odd".
Ans: 
if(num % 2 === 0){
  console.log("Even")
}else{
  console.log("Odd")
}

Q3.Positive / Negative / Zero checker banao.
Ans:
if(num > 0){
  console.log("Positive")
}else if(num < 0){
  console.log("Negative")
}else{
  console.log("Zero")
}

Q4.Output predict karo:
let num = 5
if(num > 2){
console.log("A")
}else{
console.log("B")
}
Ans: Output: A

Q5.Ek login system banao:
email === "admin@gmail.com"
password === "123"
To "Login Success" print ho.

Ans:
if(email === "admin@gmail.com" && password === "123"){
  console.log("Login Success")
}

Q6.Nested if ka real-world example do.
Ans: Real -World Example: 
ATM system
pin check
balance check


//              08. Switch Statement

Q1.Switch statement kyun use karte hain?
Ans: Multiple conditions ke liye clean alternative

Q2.Weekday checker banao.
Ans:
switch(day){
  case "Monday":
    console.log("Start")
    break
}

Q3.Browser tab switch system banao:
home
about
setting

Ans: 
switch(tab){
  case "home":
  case "about":
  case "setting":
}

Q4.Output predict karo:
let day = "Friday"
switch(day){
case "Friday":
console.log("Holiday")
break
default:
console.log("Working Day")
}

Ans: Output: Holiday

Q5.Switch aur if-else mein difference?
Ans:
if-else → complex conditions
switch → exact match cases

Q6. Calculator banao using switch:
    +
    -
    *
    /

Ans:
switch(op){
  case "+":
    console.log(a+b)
    break
}


//                      09. Loops

Q1.Loop kya hota hai?
Ans: Repeat kaam karne ke liye

Q2.1 se 10 tak numbers print karo using for loop.

Ans:
for(let i=1;i<=10;i++){
  console.log(i)
}

Q3.Even numbers print karo 1 se 20 tak.

Ans:
for(let i=1;i<=20;i++){
  if(i%2===0) console.log(i)
}

Q4. Output predict karo:
for(let i = 0; i < 3; i++){
console.log(i)
}

Ans: Output:
    0
    1
    2

Q5.Ek array ke tamaam elements print karo using loop.
Ans: 
for(let i=0;i<arr.length;i++){
  console.log(arr[i])
}

Q6.Nested loop kya hota hai? Real example do.

Ans: Nested loop = loop ke andar loop
    Example: table / grid

//          10. Nested Arrays + Loops

Q1.Nested array kya hota hai?
Ans: Array ke andar array

Q2.Output predict karo:
let arr = [[1,2],[3,4]]
console.log(arr[1][0])

Ans: Output: 3

Q3.2D fruits array ke tamaam fruits print karo.
Ans:
for(let i=0;i<fruits.length;i++){
  for(let j=0;j<fruits[i].length;j++){
    console.log(fruits[i][j])
  }
}

Q4.Ek multiplication table banao using nested loop.

Ans:
for(let i=1;i<=5;i++){
  for(let j=1;j<=10;j++){
    console.log(i*j)
  }
}

Q5.Rows aur columns ka concept explain karo.

Ans:
rows = horizontal
columns = vertical

Q6.Ye output generate karo:
*
**
***
****
using nested loop.

Ans:
for(let i=1;i<=4;i++){
  let str = ""
  for(let j=1;j<=i;j++){
    str += "*"
  }
  console.log(str)
}