// function hello (){
//     console.log("Inside Hello Fnx");
//     console.log("Hello");
// }

// function demo (){
//     console.log("In demo fnx");
//     hello();
// }

// console.log("Ready");
// demo();
// console.log("Done !!, bye");


// function one (){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();


// setTimeout(function() {
//     console.log("Apna College...")
// }, 2000);

// console.log("Hello..");


// h1 = document.querySelector("h1");

// // setTimeout(() => {
// //     h1.style.color = "red";
// // }, 1000);

// function changeColor (color, delay){
//     setTimeout(() => {
//         h1.style.color = color;
//     }, delay);
// }

// changeColor ("red", 1000);
// changeColor ("Orange", 2000);
// changeColor ("pink", 3000);



// function saveTodb(data, Success, Failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         Success();
//     }
//     else {
//         Failure();
//     }
// }

// saveTodb("Saurav Pandit", () => {
//     console.log(" Sucess: Your data saved in db");

//     saveTodb("Heloo", () => {
//         console.log("Success2 : Data2 is Saved");

//         saveTodb("Kem cho", () => {
//             console.log("Success3 : Data3 was saved");
//         },
//             () => {
//                 console.log("Failure3 : data 3 not saved");
//             }
//         )
//     },
//         () => {
//             console.log("Failure2: Weak Connection, Data2 not saved");
//         }
//     )
// },
//     () => {
//         console.log("Failure: Week Connection, data not saved");
//     }
// )



// function saveTodb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("Success: Data Was Saved");
//         }
//         else {
//             reject("Weak Connection");
//         }
//     })
// }

// saveTodb("Saurav")
// .then(()=>{
//     console.log("Promise was Resolved");
// })
// .catch(()=> {
//     console.log("Promise was Rejected");
// })

// async function greet(){
//     return "Saurav!";
// }

// greet()
// .then(()=> {
//     console.log("Promises is Succesfull");
// })
// .catch(()=>{
//     console.log("Promisses is Rejected with error");
// })


// let jsonRes = 
// '{"fact":"A cat rubs against people not only to be affectionate but also to mark out its territory with scent glands around its face. The tail area and paws also carry the cat\u2019s scent.","length":174}';

// console.log(jsonRes);

// let validateRes = JSON.parse(jsonRes);
// console.log(validateRes);


let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((response) => {
//     return response.json();
// })
// .then((data1) =>{
//     console.log("data1 = ", data1.fact);
//     return fetch(url);
// })
// .then((response =>{
//     return response.json();
// }))
// .then((data2)=>{
//     console.log("data2 = ", data2.fact);
// })
// .catch((error) =>{
//     console.log("Error - ", error);
// })


// console.log("hey martin...");   

// async function getfacts() {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);

//     }
//     catch(e){
//         console.log("Error - ", e);
//     }
//     console.log("Hrrrr");
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click" , async ()=> {
//     console.log("Button was clicked");
//     let fact = await getfacts();
//     // console.log(fact);
    
//     let p = document.querySelector("#random");
//     p.innerText = fact;
// })

// async function getfacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch(error){
//         return "No fact found";
//     }
// }

let url2 = "https://icanhazdadjoke.com/";

async function getjokes(){
    try{
        let config = { headers: { Accept: "application/json" } };
        let res = await axios.get(url2, config);
        console.log(res.data);
    }catch(error){
        console.log("Error -", error);
    }
}