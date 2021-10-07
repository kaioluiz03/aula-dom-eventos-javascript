// 2)Dados o código HTML abaixo:
// a)Adicionar as tags  metas que estão faltando no HTML.
// b)Criar a função minhaFuncao em Javascript para usar o método getElementsByTagName, pegar o primeiro elemento <p> e alterar o texto para Olá, Seja bem vindo ao mundo JS! quando o usuário clicar no botão.
// c)Utilize a tag <p> para obter os elementos e assim alterar o texto do primeiro elemento.

var minhaFuncao = () => {
    var elemento = document.getElementsByTagName("p");
    elemento[0].innerHTML = 'Olá, Seja bem vindo ao mundo JS!'; 
}
