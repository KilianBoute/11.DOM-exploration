/*
Open the [script.js](./script.js) file and edit it, so that:
- Everytime the user clicks on one of the action squares
  - Create a new `<div>` with a class `.displayedsquare` and the corresponding 
  clicked color in the div above (`.displayedsquare-wrapper`)
  - Create a new `<li>` in the log below to state when the action was done
![It should look like this](../assets/event-exercise.gif)
*/

const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickNewSquare = (e) => {
  console.log('test');
  window.alert(e.target.classList[1]);
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());

  

  //  const newSquare = document.createElement('div');
  //  newSquare.className = 'displayedsquare ' + e.target.classList[1] + ' actionsquare';

  const newSquare = e.target.cloneNode();
  newSquare.classList += ' displayedsquare';
  console.log(newSquare.classList)
  document.querySelector(".displayedsquare-wrapper").appendChild(newSquare);
  // Create a system so that when a user clicks on a
  // generated square an alert pops-up with the color of that square
  newSquare.addEventListener('click', clickNewSquare);
 

  const newLi = document.createElement("li");
  newLi.innerText = "[" + getElapsedTime() + "]" + " Created a new " + e.target.classList[1] + " square."
  document.querySelector('ul').appendChild(newLi);
  newLi.innerHTML = ""
  
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

/*
- Add an event listener on the document `<body>`, listening for the `keypress` event. 
(hint: [have a look at this](https://keycode.info/))
  - When the `spacebar` is hit randomly change the background color of the whole page
  - Log when the `spacebar` is used the same way you used for the generated squares.
  - When the <key>l</key> key is pressed the log gets deleted (erases the generated `<li>`s). 
  Mind you: using a delete in a for loop might cause issues (as the amount of items to loop over changes), 
  so a while loop might be a good choice instead.
  - When the <key>s</key> key is pressed the squares get deleted (erases the generated squares)
  */


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const pressSpacebar = () => {
  const randomColor = "rgb(" + getRandomInt(255) 
  + ", " + getRandomInt(255) + ", " + getRandomInt(255) + ")"

  body.style.backgroundColor = randomColor;
  const newLi = document.createElement("li");
  newLi.innerText = "[" + getElapsedTime() + "]" + " changed background color to " + randomColor +".";
  document.querySelector('ul').appendChild(newLi);
}


const pressL = () => {
  document.querySelector('ul').innerHTML = "";  
  // const list = document.querySelector('ul');
  // console.log(list.innerHTML);
  // while(list.querySelector('li')){
  //   console.log("test");
  //   list.remove(list.querySelector('li'));
  // }
}

const pressS = () => {
  // document.querySelectorAll(".displayedsquare").forEach(element => {
  //   element.remove();
  // });

// const sq = document.querySelectorAll(".displayedsquare");
// while(sq.length > 0){
//   sq[sq.length-1].remove;
// }
 
// }
  // while (document.querySelectorAll(".displayedsquare")) {
    
  //   console.log(document.querySelectorAll(".displayedsquare"));
  //   document.querySelectorAll(".displayedsquare");
  // }

  document.querySelector('.displayedsquare-wrapper').innerHTML = "";
}


const body = document.querySelector('body');
  body.addEventListener('keypress', function (event){
    console.log(event.key);
    if(event.key === " "){
      pressSpacebar();
    } else if (event.key === "l"){
      pressL();
    } else if (event.key === "s"){
      pressS();
    }
  });



 