window.onload = () => {
  const theme = window.localStorage.getItem("theme") ?? "dark";
  changeTheme(theme);
};

const onThemeChange = () => {
  const checkbox = document.getElementById("switch");
  const theme = checkbox.checked ? "dark" : "light";
  changeTheme(theme);
};

const changeTheme = (theme) => {
  const illustration = document.getElementById("illustration");
  illustration.style.backgroundImage = `url('assets/${theme}.jpg')`;
  const checkbox = document.getElementById("switch");
  checkbox.checked = theme === "dark";
  window.localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  console.log(theme);
};

const formulario = document.querySelector("form");
const botao = document.querySelector("#enviar");
const iemail = document.querySelector(".email");
const isenha = document.querySelector(".senha");


function cadastrar(){
  fetch("http://localhost:8080/cadastrar",
        {
          headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
          },
    method:"POST",
    body: JSON.stringify({
    email:iemail.value,
    senha:isenha.value
    })
})
.then(function (res) {console.log(res)})
.catch(function (res) {console.log(res)})
};

function limpar() {
  iemail.value = "";
  isenha.value = "";
};

formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  
  cadastrar();
  limpar();
  
});
