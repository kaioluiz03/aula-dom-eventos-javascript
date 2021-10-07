// 3)Dado os códigos HTML e Javascript abaixo:
// a)Criar arquivo HTML e escrever o código HTML da imagem nele.
// b)Criar arquivo Javascript com o nome script.js e escrever o código JS da imagem nele.
// c)Tirar print da atividade feita e enviar.

var elementos = document.getElementsByTagName("p");

for(let i = 0; i < elementos.length; i++){
    elementos[i].innerHTML = "Olá Mundo JS!";
}