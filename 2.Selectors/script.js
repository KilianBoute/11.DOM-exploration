/*
Add a title attribute to every element that has the important class, stating This 
is an important item. Tip: adding a title attribute to an element is different 
from changing the title of a document.
*/

let important = document.querySelectorAll(".important");

important.forEach(element => {
    element.title = "This is an important item";
    console.log(element);
});

/*- Select all the img tags and loop through them. 
If they have no `important` class, turn their 
[display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display) 
to `none`*/

let images = document.querySelectorAll("img");

images.forEach(element => {
    if(element.className === "important"){
        element.style.display = "none";
    }
    console.log(element.alt);
});

/*
Loop through all the paragraphs and display their content in the console. 
If the paragraph has a class, display its classname as well
*/

let paragraphs = document.querySelectorAll("p");

paragraphs.forEach(element => {
    console.log(element.innerHTML);
    if(element.hasAttribute("class")){
        console.log(element.className);
    }
});

/*
Give each of the paragraph a random text color (different for each one) 
UNLESS it has a class then leave it as it is.
*/

function getRandomColor() {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);

    let color =  "rgb(" + a + ", " + b + ", " + c + ")";
    console.log(color);
    return color;
}

paragraphs.forEach(element => {
    if(!element.hasAttribute("class")){
        element.style.color = getRandomColor();
    }
});