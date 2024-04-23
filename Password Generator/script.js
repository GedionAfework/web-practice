const passwordBox = document.getElementById("password");
const potentialPassword = "!@#$%^&*()_+=-{}[]\|:;',.<>/?`~0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function createPassword(){
    let password = "";
    while(password.length < 12){
        password += potentialPassword[Math.floor(Math.random() * potentialPassword.length)];
    }
    passwordBox.value = password;
}
function copyPassword (){
    passwordBox.select();
    document.execCommand("copy");
}
