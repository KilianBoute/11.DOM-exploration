/*
- Add a `keyup` listener on the first input field, so that once you type a letter in this field, 
it goes into the `<span id="display-firstname">`. The content of the field and the span should 
always remain the same.
*/

const inputFirstname = document.getElementById('firstname');
inputFirstname.addEventListener('keyup', (e) => {
    const span = document.getElementById('display-firstname');
    span.innerText += e.key;
});

/*
- Add a `keyup` listener on the second input (the number input), so that if the age is below 18 
the content of the section `a-hard-truth` remains hidden, otherwise show them this hard to swallow fact.
*/

const inputAge = document.getElementById('age');
inputAge.addEventListener('keyup', (e) => {
    const hardTruth = document.getElementById('a-hard-truth')
    if(inputAge.value >= 18){
        console.log('test');
        hardTruth.style.visibility = 'visible';
    } else {
        hardTruth.style.visibility = 'hidden';
    }
});

/*
- Well this is a common one. Add a `keyup` listener on both fields and show a visual hint (for 
    instance turn the field red) if the password is too short (less than 6 characters) or if the 
    password and its confirmation do not match. 
*/

const inputPassword = document.getElementById('pwd');
const confirmPassword = document.getElementById('pwd-confirm');
const errorTooShort = document.createElement('p');
    errorTooShort.style.color = "red";
    errorTooShort.innerText = "Password must be at least 6 characters long";
const errorMismatch = document.createElement('p');
    errorMismatch.style.color = "red";
    errorMismatch.innerText = "Password does not match"
inputPassword.addEventListener('keyup', () => {
    if(inputPassword.value.length < 6){
        inputPassword.style.backgroundColor = "red";
        inputPassword.parentElement.appendChild(errorTooShort);
    } else{
        inputPassword.style.backgroundColor = "white";
        errorTooShort.remove();
    }
});
confirmPassword.addEventListener('keyup', () => {
    if(inputPassword.value !== confirmPassword.value){
        inputPassword.style.backgroundColor = confirmPassword.style.backgroundColor = "red";
        confirmPassword.parentElement.appendChild(errorMismatch);
    } else {
        inputPassword.style.backgroundColor = confirmPassword.style.backgroundColor = "white";
        errorMismatch.remove();
    }
});



/*
- Finally, use a `change` listener on the `<select>` field to toggle a dark mode on the whole page. 
For ease of use, we'll say that the dark mode is just turning the background black and the text white.

*/

const darkToggle = document.getElementById('toggle-darkmode');
const bodyStyle = document.querySelector('body').style;
darkToggle.addEventListener('change', () => {
    if(darkToggle.value === "dark"){
        bodyStyle.backgroundColor = 'black';
        bodyStyle.color = 'white';
    } else if(darkToggle.value === "light"){
        bodyStyle.backgroundColor = 'white';
        bodyStyle.color = 'black';
    }
}, false);