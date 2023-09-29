const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");
const botaoEnviar = document.querySelector("#enviar");
const exibirAlerta = document.querySelector("#login");





    form.addEventListener("submit", (event) =>{
    event.preventDefault();

   
    if(nameInput.value === ""){
        alert("Por Favor, preencha o seu nome");
        return;
    }

    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Preencha seu e-mail");
        return;
    }

    if(!validatePassword(passwordInput.value, 8)){
        alert("A senha precisa ser no mínimo 8 dígitos");
        return;
    }

    if(jobSelect.value === ""){
        alert("Por favor selecione a sua situação de trabalho!");
    }

    if(messageTextarea.value ===""){
        alert("Por favor, escreva uma mensagem. ");
    }
    

    form.submit();
});

function isEmailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/

    );

    if(emailRegex.test(email)){
        return true;
    }

    return false;
}

function validatePassword(password, minDigits){
    if(password.length >= minDigits){

        return true;
    }

    return false;
}

function exibirAlerta() {
    alert("Isso é um alerta!");
}