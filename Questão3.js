function gerarTabuada() {
  const numero = parseInt(prompt("Digite um número para gerar a tabuada:"));

  if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
    return;
  }

  console.log(`Tabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

gerarTabuada();