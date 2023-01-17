

function login(){
    if (document.getElementById('password').value == 123 && document.getElementById('nome_usuario').value != ''){
    nome_usuario = document.getElementById('nome_usuario').value;
    console.log(nome_usuario);
    localStorage.setItem("Nome", nome_usuario);
    window.location = 'conversa2.html';
    }
    else{
        document.getElementById('password').innerHTML = '';
    }
}