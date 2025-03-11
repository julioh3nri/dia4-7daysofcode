// ** Mais Loops e Randomização **
// Resumo aula passada sobre loops: Segue o mesmo caminho de respostas até que o usuário termine o ciclo.

// Resolução Dia 4

const numeroSecreto = Math.floor(Math.random() * 11);
let tentativas = 3;
let acertou = false;

while (tentativas > 0) {
    let chute = parseInt(prompt(`Tente adivinhar o número (0 a 10). Você tem ${tentativas} tentativa(s):`));

    if (chute === numeroSecreto) {
        alert("Parabéns! Você acertou! 🎉");
        acertou = true;
        break;
    } else {
        alert("Errou! Tente novamente.");
    }
    
    tentativas--;
}

if (!acertou) {  // ! é negação e inverte valor, tipo a porta NOT em boolean. True vira False
    alert(`Que pena! O número era ${numeroSecreto}. 😢`);
}

// let e const são usadas para declarar variáveis
// let = pode retribuir valores; ideal para variáveis que podem mudar
// const = não pode ser reatribuído ao longo do códig; ideal para valores que não mudarão
// ParseInt = converte uma string em um númeor inteiro