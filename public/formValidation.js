//get form values
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

//errors
const nameError = document.getElementById('name-err');
const emailError = document.getElementById('email-err');
const messageError = document.getElementById('message-err');
//error filler
const nameErrorFiller = document.getElementById('name-span-filler');
const emailErrorFiller = document.getElementById('email-span-filler');
const messageErrorFiller = document.getElementById('message-span-filler');


document.getElementById('form').addEventListener('submit', function(e) {
    //make sure all fields are filled and display error
    if(name.validity.valueMissing) {
        //console.log('name empty');
        nameError.style.display = 'block';
        nameErrorFiller.style.display = 'none';
        name.classList.add('placeholder-err', 'border-err');
        e.preventDefault();
    }
    if(email.validity.valueMissing) {
        //console.log('email empty');
        emailError.style.display = 'block';
        emailErrorFiller.style.display = 'none';
        email.classList.add('placeholder-err', 'border-err');
        e.preventDefault();
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) == false) {
      emailError.style.display = 'block';
      emailError.children[0].innerHTML = 'Please use a valid email address'
      emailErrorFiller.style.display = 'none';
      email.classList.add('placeholder-err', 'border-err');
      e.preventDefault();
    }
    if(message.validity.valueMissing) {
        //console.log('message empty');
        messageError.style.display = 'block';
        messageErrorFiller.style.display = 'none';
        message.classList.add('placeholder-err', 'border-err');
        e.preventDefault();
    }
    
    

    e.preventDefault();
});

//clear error message on input
name.addEventListener('input', function(e) {
    nameError.style.display = 'none';
    nameErrorFiller.style.display = 'block';
    name.classList.remove('placeholder-err', 'border-err');
})
email.addEventListener('input', function(e) {
    emailError.style.display = 'none';
    emailErrorFiller.style.display = 'block';
    email.classList.remove('placeholder-err', 'border-err');
})
message.addEventListener('input', function(e) {
    messageError.style.display = 'none';
    messageErrorFiller.style.display = 'block';
    message.classList.remove('placeholder-err', 'border-err');
})

    