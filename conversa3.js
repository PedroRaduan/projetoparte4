const firebaseConfig = {
    apiKey: "AIzaSyD9THXi1nI3UPIwhVD3Z_dhdTEwa6T_Fqs",
    authDomain: "projetoconversa-22d58.firebaseapp.com",
    databaseURL: "https://projetoconversa-22d58-default-rtdb.firebaseio.com",
    projectId: "projetoconversa-22d58",
    storageBucket: "projetoconversa-22d58.appspot.com",
    messagingSenderId: "395854838256",
    appId: "1:395854838256:web:923320c2ec03fd292ec535"
  };
  
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function voltar(){
    window.location = 'conversa2.html';
}

nome  = localStorage.getItem('Nome');
sala = localStorage.getItem('nome_sala');

function send(){
    msg = document.getElementById('msg').value;
    firebase.database().ref(sala).push({
        name:nome,
        mensagem:msg,
        like:0
    })

    document.getElementById('msg').value = ''; 
}