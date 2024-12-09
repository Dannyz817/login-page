let login = '@User';
let password = '1234';

function submit() {
    let user_login = document.getElementById('login').value;
    let user_password = document.getElementById('login-password').value;

    if (user_login === login && user_password === password) {
        alert(`Bem-vindo(a) Plataforma ${login}!`);
        return true;  // Permite o envio do formulário
    } else if (user_login === '' || user_password === ''){
        document.getElementById('incorrect-password').style.display = 'none';
        document.getElementById('complete-info').style.display = 'block';
        return false;  // Impede o envio do formulário
    } else {
        document.getElementById('complete-info').style.display = 'none';
        document.getElementById('incorrect-password').style.display = 'block';
        return false;  // Impede o envio do formulário
    }
}

