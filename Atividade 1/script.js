var idade = parseInt(prompt("Quantos anos você tem hoje?"));


if(!idade) {
    alert("Você colocou uma idade inválida");
}
else {
    //Soma 30 anos de vida
    idadeFutura = idade + 30;
    //Transforma em dias
    idadeFuturaEmDias = idadeFutura * 365;
    
    //Alerta na tela a idade em dias
    alert(`Daqui 30 anos, você terá ${idadeFuturaEmDias} dias de vida!`);
    
    //
    idadeFutura = Math.floor(idade + (40/12));

    if((idadeFutura < 18 && idadeFutura >= 16) || idadeFutura >= 18)
        alert("Daqui 40 meses, você poderá votar.");
    else
        alert("Daqui 40 meses, você não poderá votar.")
}