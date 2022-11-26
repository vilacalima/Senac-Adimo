var erros = "";

function validaEmail() {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (document.getElementById("email").value.match(validRegex)) {
    //Email Válido
  } else {
    erros += "\nEmail Inválido";
  }
}

function validaSenha() {
  if (document.getElementById("senha").value.length < 6) {
    erros += "\nSenha deve ter ao menos 6 Caracteres";
  }
}

function validaNome() {
  if (document.getElementById("name").value.length < 1) {
    erros += "\nCampo nome não pode ser vazio";
  }
}

// Ao carregar a página verifica se está logado
window.onload = function () {
  if (localStorage.logado === "true") {
    document.getElementById("registrar").text = localStorage.email;
    document.getElementById("logar").text = "Sair";
  }
};

// Verifica Erros e Atribui os Valores do formulário ao Local Storage
var cadastrar = function () {
  erros = "";
  validaSenha();
  validaNome();
  validaEmail();

  if (erros.length <= 0) {
    localStorage.setItem("nome", document.getElementById("name").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("senha", document.getElementById("senha").value);
    //localStorage.setItem(logado, false);
    successCadastro();
  } else {
    alert(erros);
  }
};

function successCadastro() {
  alert(
    "Seja Bem Vindo " +
      localStorage.nome +
      "! Faça Login com seu E-mail e Senha!"
  );
  redirect();
}

//[Modo Logar] Se não estiver logado, redireciona pra página de login
//[Modo Sair] Se estiver Logado, desloga
var logar = function () {
  if (document.getElementById("logar").text === "Sair") {
    if (confirm("Deseja fazer logoff desta Conta?") == true) {
      localStorage.logado = false;
      location.reload();
    }
  } else {
    window.location.href = "login.html";
  }
};
var fazerLogin = function () {
  if (
    document.getElementById("email").value === localStorage.email &&
    document.getElementById("senha").value === localStorage.senha
  ) {
    alert("Bem Vindo, " + localStorage.nome);
    localStorage.logado = true;
    redirect();
  } else {
    alert("E-mail ou Senha incorreta");
    localStorage.logado = false;
  }

  return false;
};

function redirect() {
  window.location.replace("index.html");
}

//Modulo de inicialização do swipper

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  autoplay: {
    delay: 2500,
  },
});
