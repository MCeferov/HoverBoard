"use strict";

const colors = ["#f2f2f2", "#e0eeee", "#6495ed", "#9bcd9b", "#66cd00", "#ee2c2c", "#ff69b4", "#800000"];
 

const container = document.querySelector(".container");
let content = "";

for (let i = 0; i < 500; i++) {
content += '<div class="square"></div>';
}

container.innerHTML = content;

const squareEl = document.querySelectorAll(".square");

const getRandomColor = () => {
   return colors [Math.floor(Math.random() * colors.length)]
}

const addColor = (element) => {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color} , 0 0 20px ${color}` 
}

const removeColor = (element) => {
    element.style.backgroundColor = "#1d1d1d"
    element.style.boxShadow = "0 0 2px #000"
}

for (let i = 0; i < squareEl.length; i++) {
    squareEl[i].addEventListener("mouseenter", () => { 
        addColor(squareEl[i]);
    }
    )
    squareEl[i].addEventListener("mouseleave", () => { 
        removeColor(squareEl[i]);
    }
    )

}