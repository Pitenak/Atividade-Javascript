function calcularSomaSerie() {
  const nTermos = parseInt(prompt("Digite a quantidade de termos da série:"));

  if (isNaN(nTermos) || nTermos <= 0) {
    console.log("Por favor, digite uma quantidade de termos válida e positiva.");
    return;
  }

  let soma = 0;
  let termoAtual = 1;

  for (let i = 0; i < nTermos; i++) {
    soma += termoAtual;
    termoAtual = termoAtual * 10 + 1;
  }

  console.log(`A soma da série é: ${soma}`);
}

calcularSomaSerie();