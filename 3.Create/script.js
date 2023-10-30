/*
Modify the script.js to create a new <section> with a random background-color for 
each learner in your group. This section should contain a paragraph with the name 
of the learner. Those sections should be appended in the <article>
*/

let learners = [
    "Sezin",
    "Mohammed",
    "Danté",
    "Kilian",
    "Alessandro",
    "Gustave",
    "Thierry",
    "Sylvie",
    "Kelsey",
    "Lucas",
    "jonasi",
    "Thibault",
    "Funda",
    "Luis",
    "Alexandru",
    "Mohamed",
    "Jana",
    "Pieter",
    "Rana",
    "Eduarda",
    "Josué",
    "Anaïs",
    "Rebecca",
    "Alec",
    "Sieglinde",
    "Andrej"
];

// - Find a way so that everytime you load the page the order of the elements changes!
learners = learners.sort((a, b) => 0.5 - Math.random());

function getRandomColor() {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);

    let color =  "rgb(" + a + ", " + b + ", " + c + ")";
    console.log(color);
    return color;
}


function addLearner(learner){
    const newSection = document.createElement("section");
    newSection.id = learner;

    const newParagraph = document.createElement("p");

    const paragraphContent = document.createTextNode(learner);

    newParagraph.appendChild(paragraphContent);
    newSection.appendChild(newParagraph);

    const article = document.querySelector("article");

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let color =  "rgb(" + r + ", " + g + ", " + b + ")";
   
//- If the background is dark the text should be white, if the background is light the text should be black

    let luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    if(luminance <= 100){
        newSection.style.color = "white";
    }

    newSection.style.backgroundColor = color;

    article.appendChild(newSection);
}

learners.forEach(element => {
    addLearner(element);
});