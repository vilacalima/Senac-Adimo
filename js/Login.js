const $ = (elemento) => document.querySelector(elemento);

$("#submit").addEventListener("click", (ev) => {
    ev.preventDefault();
  
    const string = localStorage.getItem("usuario");
   // const usuarioCadastrado = JSON.parse(string);
  
    //const { login, senha } = usuarioCadastrado;
    const user = "senac";
    const password = "admin";
    const dadosCorretos =
      user === $("#usuario").value && password === $("#password").value;
    console.log(dadosCorretos);
  
    if (!dadosCorretos) {
      alert("Dados inválidos!");
      return;
    }
  
    if("#tipo" === "Atendente"){
        window.location.href = "./atendente.html";
    } else if("#tipo"=== "Usuário"){
        window.location.href = "./produto.html";
    } else{
        alert("Selecione algum tipo!");
    }

    
     
  });
