document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    //get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    //make sure all fields are filled
    if(name == '' ) {
        name.style.background = 'red';
    }
    //|| email == '' || message == ''
})