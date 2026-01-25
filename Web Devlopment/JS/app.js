console.log("hii kemcho...!!!")

// let a = 25;
// let b = 20;
// console.log(`Price is ${a+b} Rupees..`);

let a = 20;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);



let age = 85;
if (age >= 18) {
    console.log("you are adult");
} else {
    console.log("you are not adult");
}


let FirstName = "Saurav";
if (FirstName == "Saurav") {
    console.log(`Welcome ${FirstName}`);
}

// let color = "Yellow";
// if(color == "Red"){
//     console.log("Stop");
// }
// else if (color == "Yellow"){
//     console.log("Go Slow");
// }
// else if (color == "Green"){
//     console.log("Go");
// }

let size = "M";

if (size == "XL") {
    console.log(`prices is Rs. ${250}`);
}

else if (size == "L") {
    console.log(`prices is Rs. ${200}`);
}

else if (size == "M") {
    console.log(`prices is Rs. ${100}`);
}
if (size == "S") {
    console.log(`prices is Rs. ${50}`);
}

let Given = "apple";
if (Given[0] == 'a' && Given.length > 3) {
    console.log("Safe String");
} else {
    console.log("Unsafe String");
}


let day = 15;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Day is not decleared");
}


// let fName = prompt("Enter Your First Name :");
// let lName = prompt("Enter Your Last Name :");
// let msg = fName + " " + lName ;
// alert(msg);
// console.log(msg);

// let password = prompt("Enter ur Password :");
// console.log(password.trim());

let str = "Saurav";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let students = ["aman" , "saurav" , "gaurav" , "shubham"];
for(let i=0; i<students.length; i++){
    console.log(i, students[i]);
}
console.log(students);

// for(let i=2; i<=10; i=i+2){
//     console.log(i);
// }

// for(let i=10; i>=2; i=i-2){
//     console.log(i);
// }

// let n = prompt("Enter the number :");
// n = parseInt(n);

// for(let i = n; i <= n*10; i = i+n){
//     console.log(i);
// }

let i = 1;
while(i<=10){
    if(i==5){
        break;
    }
    console.log(i);
    i++;
}

let nums = [[45,65,78],[20,30,40]];

for(let i=0; i<nums.length; i++){
    console.log(i,nums[i]);
    for(let j=0; j<nums[i].length; j++){
        console.log(nums[i][j]);
    }
}

const self = {
    name : "Saurav",
    age : 19,
    marks : 91,
    city : "Rajkot"
}
console.log(self);

// const classInfo = {
//     aman : {
//         grade : "A",
//         city : "Delhi"
//     },
//     saurav : {
//         grade : "B",
//         city : "Rajkot"
//     },
//     gaurav : {
//         grade : "A+",
//         city : "Bhagalpur"
//     }
// };

const classInfo = [
    {
        name : "Saurav",
        city : "Rajkot"
    },
    {
        name : "Gaurav",
        city : "Rajkot"
    }
];

function hello() {
    console.log("Hello");
}

function avg(a, b, c){
    let avrg = (a+b+c)/3;
    console.log(avrg);
}

avg(14,25,36);

function table(n) {
    for(let i=0; i<=10; i++){
        console.log(n,"*",i,"=",n*i);
    }
}
table(7);

const cube = (n) => {
    console.log(n*n*n);
};

const sum = (a,b) => (a+b);

console.log("Hii there!!");

setTimeout(() => {
    console.log("My Profile");
} , 2000);

console.log("Welcome to ");

// const id = setInterval(() => {
//     console.log("Saurav Pandit");
// } , 1000);


let fname = "Saurav";
console.log(`My Name is : ${fname}`);


let mage = 20;
if( mage > 18){
    console.log("Is Adult");
}

// // alert("Hello popup");
// prompt("Enter your rollno");

let btn = document.querySelector("button");

btn.addEventListener("click", function (){
    let h3 = document.querySelector("h3");
    let randomcolor = getRandomColor();
    h3.innerText = randomcolor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomcolor;

    console.log("Color Updated...!!!");
})

function getRandomColor (){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red} , ${green} , ${blue})`;
    return color;
}


let form = document.querySelector("form");

form.addEventListener("submit" , function(event){
    event.preventDefault();

    let user = document.querySelector("#user");     // this.element[0]
    let pass = document.querySelector("#pass");     // this.element[1]

    console.log(user.value);   
    console.log(pass.value);

    alert(`Hi.., ${user.value}, your password set is to ${pass.value}`);
})