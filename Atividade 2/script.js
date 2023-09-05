const nome = prompt("Qual o seu nome?");
const peso = parseFloat(prompt("Qual o seu peso?"));
const altura = parseFloat(prompt("Qual a sua altura?"));
const sexo = prompt("Qual o seu sexo?");

if (!peso) {
    alert("Você colocou um peso inválido");
} 
else if (!altura) {
    alert("Você colocou uma altura inválida");
}
else {
    const imc = Math.floor(peso / (altura ^ 2));

    if (imc >= 30) 
        alert(`${nome}, você está acima do peso.`)
    else
        alert(`${nome}, você não está acima do peso.`)
}
