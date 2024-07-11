import listaDeEstado from "./estados.js";

let tagUl = document.getElementById("lista-estados");



// tagUl.innerHTML = "<li>Estados: " + estados.nome + ", Região: " + estados.regiao.nome + "</li>";

for(let i = 0; i < listaDeEstado.length; i++ ){
    let estados = listaDeEstado[i];
    tagUl.innerHTML = tagUl.innerHTML + "<li>Estados: " + estados.nome + "<br> Região: " + estados.regiao.nome + "</li> </br>"
}
// tagUl.textContent = "Conteudo de texto" //Renderiza tudo como texto puro
// tagUl.innerHTML = "<li>estados: Acre, Região: Norte</li>" //Renderiza tag HTML


// setTimeout(function(){
//     tagUl.innerHTML = tagUl.innerHTML + "<li>estados: Acre, Região: Norte</li>"
// }, 3000)
// console.log(tagUl)