function Login(){
  var done=0;
  var user = document.getElementsByName('user')[0].value;
  var password = document.getElementsByName('password')[0].value;
  var tipo = document.getElementsByName('tipo');
  var atendente = document.getElementsByName('atendente');
  var usuario = document.getElementsByName('usuario')
  // if(tipo === usuario){
    if(user=="senac" && password=="admin"){
      console.log("teste validacao");
      
      // window.location.assign("file:///C:/Users/TEMP.SENACEDU.001/workspace/Senac-Adimo/atendente.html");
      done=1;
      
    }
    //aqui funcionou
    window.location="produtos.html";
    console.log("teste");
  // }
  if (done==0) { alert("Dados incorretos, tente novamente"); }
}