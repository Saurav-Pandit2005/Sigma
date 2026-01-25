// let links = document.querySelectorAll(".box a");

// for(let i=0; i<links.length; i++){
//     links[i].style.color = "Pink";
//     // links[i].style.backgroundColor = "yellow";
// }

let btn = document.querySelector("button");
console.dir(btn);




function sayHello() {
    alert("Hello!!!");
}

function sayName() {
    alert("Saurav!!!");
}

// btn.onclick = sayHello;
// btn.onclick = sayName;


btn.addEventListener("click", sayHello);
btn.addEventListener("click", sayName);


// btn.onmouseenter = function(){
//     console.log("You are Entered");
// }