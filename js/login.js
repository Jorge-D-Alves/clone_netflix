let email = document.getElementById('email')
email.addEventListener('focus',()=>{
    email.style.borderColor = "#4a5f6a";
});
email.addEventListener('blur',()=>{
    email.style.borderColor = "#ccc";
});

let password = document.getElementById('password');
password.addEventListener('focus',()=>{
    password.style.borderColor = "#4a5f6a";
});
password.addEventListener('blur',()=>{
    password.style.borderColor = "#ccc";
});   