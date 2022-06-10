//DOM
//window.alert("Olá!") //window.alert é um método, o que está entre parênteses é um argumento 
const mostrarh1 = document.querySelector("h1")
console.log(mostrarh1)

const h1Classes = mostrarh1.classList
console.log(h1Classes)


function callbackh1() {
  console.log("Clicou em:", mostrarh1.innerHTML)
}
mostrarh1.addEventListener('click', callbackh1)


//selecione o primeiro elemento da página que possua a classe ativa
const paragrafo = document.querySelector(".ativo")
    console.log(paragrafo)


//retorne a url da página utilizando o objeto window
const hrefPagina = window.location.href
    console.log(hrefPagina)


//retorne a linguagem do navegador    
const linguagem = window.navigator.language
  console.log(linguagem)

 //retorne a lagura da janela
 const largura = window.innerWidth //sem o window também funciona
 console.log(largura) 

 


