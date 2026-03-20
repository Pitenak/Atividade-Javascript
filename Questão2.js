function jogarPedraPapelTesoura() {
  const opcoes = ["pedra", "papel", "tesoura"];
  const escolhaUsuario = prompt("Escolha pedra, papel ou tesoura:").toLowerCase();

  if (!opcoes.includes(escolhaUsuario)) {
    console.log("Escolha inválida. Por favor, escolha pedra, papel ou tesoura.");
    return;
  }

  const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

  console.log(`Você escolheu: ${escolhaUsuario}`);
  console.log(`O computador escolheu: ${escolhaComputador}`);

  if (escolhaUsuario === escolhaComputador) {
    console.log("Empate!");
  } else if (
    (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
    (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
  ) {
    console.log("Você venceu!");
  } else {
    console.log("O computador venceu!");
  }
}

jogarPedraPapelTesoura();