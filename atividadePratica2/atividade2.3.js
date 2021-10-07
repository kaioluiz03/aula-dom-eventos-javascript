// 3)Dado a página HTML abaixo:
// a)Criar o código HTML para exibir a tela acima.
// b)Criar a função Javascript para que quando o usuário clicar no botão, as frases serão transformadas em letras maiúsculas.
// c)O texto em maiúsculo deverá ser exibido abaixo do botão clique aqui. a
// d)Criar a função Javascript para que quando o usuário passar o mouse por cima do texto Olá mundo JS!, ele deverá mudar de cor, escolha a cor que você quiser.

function frasesUpper(){
    var elementos = document.getElementsByTagName("p");
    var pAfter = document.getElementsByClassName("pAfter")

    for(let i = 0; i <= elementos.length; i++){
        pAfter[i].textContent = elementos[i].textContent.toLocaleUpperCase();
    }
}

let mudarCor = () => {
    var titulo = document.getElementById("titulo");
    titulo.style.color = "darkgreen";
}
