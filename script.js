document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM fully loaded and parsed');

    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener('submit', function(event){
        event.preventDefault();
        console.log('Form Submitted');
    });

    const usernameInput = document.getElementById("username").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    console.log('username: ', usernameInput);
    console.log('email: ', emailInput);
    console.log('password: ', passwordInput);

let isValid = true;
let messages = [];

if(!username){
    isValid = false;
    messages.push('Username is required');
}


if(!emailInput.includes('@') | | !emailInput.includes('.')){
    isValid = false;
    messages.push('Provide a valid Email');
}

if(!passwordInput.length < 8){
    isValid = false;
    messages.push('Password must be atlease 8 characters long');
}


if(!isValid){
    console.log('Validation errors: ', messages);
} else{
console.log('Form successfully submitted')
}

feedbackDiv.style.display = 'block';
if(isValid){
    feedbackDiv.textContent = "Registration Successful";
    feedbackDiv.style.color = #28a745;
} else{
    feedbackDiv.innerHTML = messages.join('<br>');
    feedbackDiv.style.color = #dc3545;
}


});