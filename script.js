document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM fully loaded and parsed');

    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener('submit', function(event){
        event.preventDefault();
    

    const usernameInput = document.getElementById("username").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    console.log('username: ', usernameInput);
    console.log('email: ', emailInput);
    console.log('password: ', passwordInput);

let isValid = true;
let messages = [];

if(!username.length < 3){
    isValid = false;
    messages.push('Username is required to have more than 3 characters');
}


if(!emailInput.includes('@') || !emailInput.includes('.')){
    isValid = false;
    messages.push('Provide a valid Email');
}

if(!passwordInput.length < 8){
    isValid = false;
    messages.push('Password must be atlease 8 characters long');
}


feedbackDiv.style.display = "block";
if(isValid){
    feedbackDiv.textContent = "Registration Successful!";
    feedbackDiv.style.color = "#28a745";
} else{
    feedbackDiv.innerHTML = messages.join("br>");
    feedbackDiv.style.color = "#dc3545";
}
});

});