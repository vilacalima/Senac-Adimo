const $ = (elemento) => document.querySelector(elemento);

function Login(){
  var done=0;
  var user = document.getElementsByName('user')[0].value;
  var password = document.getElementsByName('password')[0].value;
  var tipo = document.getElementsByName('tipo');
  var atendente = document.getElementsByName('atendente');
  var usuario = document.getElementsByName('usuario')
  // if(tipo === usuario){
    if(user=="senac" && password=="admin"){
      window.location="/p/produtos.html";
      done=1;
    }
  // }
  if (done==0) { alert("Dados incorretos, tente novamente"); }
}

// $("#submit").addEventListener("click", (ev) => {
//     ev.preventDefault();
  
//     const string localStorage.getItem("usuario");
//    // const usuaoCadastrado = JSON.parse(string);
  
//     //const { lon, senha } = usuarioCadastrado;
//     const user =senac";
//     const passwo = "admin";
//     const dadosCretos =
//       user === $#usuario").value && password === $("#password").value;
//     console.log(dosCorretos);
  
//     if (!dadosCorretos) {
//       alert("Dados inválidos!");
//       return;
//     }
  
//     if("#tipo" === "Atendente"){
//         window.location.href = "./atendente.html";
//     } else if("#tipo"=== "Usuário"){
//         window.location.href = "./produto.html";
//     } else{
//         alert("Selecione algum tipo!");
//     }

    
     
//   });
