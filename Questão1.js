function adivinharNumero() {
  const numeroSecreto = Math.floor(Math.random() * 20) + 1;
  let tentativas = 0;
  let acertou = false;

  console.log("Bem-vindo ao jogo de adivinhar o número! Tente adivinhar um número entre 1 e 20.");

  while (!acertou) {
    const palpite = parseInt(prompt("Digite seu palpite:"));
    tentativas++;

    if (isNaN(palpite) || palpite < 1 || palpite > 20) {
      console.log("Por favor, digite um número válido entre 1 e 20.");
    } else if (palpite === numeroSecreto) {
      console.log(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`);
      acertou = true;
    } else if (palpite < numeroSecreto) {
      console.log("O número secreto é maior.");
    } else {
      console.log("O número secreto é menor.");
    }
  }
}

adivinharNumero();