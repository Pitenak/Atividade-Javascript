function desenharTrianguloAsteriscos() {
  const numLinhas = parseInt(prompt("Digite o número de linhas para o triângulo:"));

  if (isNaN(numLinhas) || numLinhas <= 0) {
    console.log("Por favor, digite um número válido e positivo de linhas.");
    return;
  }

  for (let i = 1; i <= numLinhas; i++) {
    console.log("*".repeat(i));
  }
}

desenharTrianguloAsteriscos();