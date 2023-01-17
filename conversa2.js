var nome = localStorage.getItem('Nome');
document.getElementById('nome_usuario').innerHTML = 'Sejá bem vindo(a) ' + nome;

console.log(nome);

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

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    nomes_salas = childKey;
   //Start code
   console.log('Nome da sala é ' + nomes_salas);
   row = "<div class='nome_sala' id="+ nomes_salas+" onclick='redirectToRoomName(this.id)' >#"+ nomes_salas +"</div> <hr>";
   document.getElementById('output').innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(nome){
  console.log(nome);
  localStorage.setItem('nome_sala', nome);
  window.location = 'conversa3.html';
}

function Criar_grupo(){
  nome_sala = document.getElementById('nome_sala').value;
  
  firebase.database().ref('/').child(nome_sala).update({
    mensagem : 'Olá'
});

  localStorage.set('nome_sala', nome_sala);
  window.location = 'conversa3.html';
}

function sair(){
  localStorage.removeItem('nome_sala');
  localStorage.removeItem('Nome');
  window.location = 'index.html';
}