const nome = prompt("Digite seu nome: ");
const sexo = (prompt("Digite seu sexo: ")).toLowerCase()
const idade = parseInt(prompt("Digite sua idade: "));
const tempoContribuição = parseInt(prompt("Digite seu tempo de contribuição: "));

if(!idade) {
    alert("Você inseriu uma idade inválida.")
}
else if(!tempoContribuição) {
    alert("Você inseriu um tempo de contribuição inválida.")
}
else {
    const somaParaAposentar = idade + tempoContribuição;
    if (sexo == "masculino" || sexo == "homem") {
        if (somaParaAposentar >= 95)
            alert(`Chega por hoje ${nome}. Você pode se aposentar!`);
        else
            alert(`Poxa ${nome}, você ainda não pode se aposentar. :(`);
    }
    else if (sexo == "feminino" || sexo == "mulher") {
        if (somaParaAposentar >= 85)
            alert(`Chega por hoje ${nome}. Você pode se aposentar!`);
        else
            alert(`Poxa ${nome}, você ainda não pode se aposentar. :(`);
    }
    else {
        alert("Você colocou um sexo inválido.")
    }
}
