//1)Dado o código HTML abaixo:
//a)Adicionar as tags  metas que estão faltando no HTML.
//b)Criar a função minhaFuncao em Javascript para usar o método getElementById, pegar o elemento com o id boas-vindas e alterar o texto para  Olá, Seja bem vindo ao mundo JS! quando o usuário clicar no botão.
//c)Utilize o id do elemento <h1> para obter o elemento e assim alterar o texto.

var minhaFuncao = () => {
    var texto = document.getElementById('boas-vindas');
    texto.innerHTML = "Oooops!";
}
