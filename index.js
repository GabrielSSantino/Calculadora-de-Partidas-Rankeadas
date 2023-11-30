let victory = 50
let ranker;

function score() {
    if (victory < 10) {
        ranker = "Ferro"
    } else if (victory >= 11 && victory <= 20) {
        ranker = "Bronze"
    } else if (victory >= 21 && victory <= 50) {
        ranker = "Prata"
    } else if (victory >= 51 && victory <= 80) {
        ranker = "Ouro"
    } else if (victory >= 81 && victory <= 90) {
        ranker = "Diamante"
    } else if (victory >= 91 && victory <= 100) {
        ranker = "Lendário"
    } else if (victory >= 101) {
        ranker = "Imortal"
    }
}

function winMatch(probability) {
    console.log(`Você tem no total de partidas ganhas ${victory} e esta no nível ${ranker}`)
    console.log("A partida foi encontrada")

    const randomResult = Math.random();
    const victoryMatch = randomResult < probability;

         if (victoryMatch) {
            victory++;
            score();
            console.log(`O Herói tem de saldo de ${victory} está no nível de ${ranker}`);
         }else{
            victory--;
            score();
            console.log(`O Herói perdeu tem de saldo de ${victory} está no nível de ${ranker}`);
         }
         
         return victoryMatch;
         
}

score();
winMatch(0.6);
