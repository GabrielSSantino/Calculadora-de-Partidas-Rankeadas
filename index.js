// Let inciando as vareaveis
let victory = 50
let ranker;

//function score(), uma função com nome score que ira determinar o ranker

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

//function winMatch(probability), uma função de probabilidade de caso ganhar ou perder

function winMatch(probability) {
    console.log(`Você tem no total de partidas ganhas ${victory} e esta no nível ${ranker}`)
    console.log("A partida foi encontrada")

    //Math.radom(); gerar um numero de 1 a 0
    const randomResult = Math.random();
    //radomResult < probability; um numero gerado para radomResult e o 0.6 do probability se for menor true se não false
    const victoryMatch = randomResult < probability;

         if (victoryMatch) {
            victory++;
            //Chamando a função score para atualizar o rank dependendo do resultado
            score();
            console.log(`O Herói tem de saldo de ${victory} está no nível de ${ranker}`);
         }else{
            victory--;
            score();
            console.log(`O Herói perdeu tem de saldo de ${victory} está no nível de ${ranker}`);
         }
         //Retornando para saber se ganhou ou não
         return victoryMatch;
         
}

//Laço de repetição, ele ira repetir ate passar de 3
for (let i = 0; i < 3; i++) {
    winMatch(0.6);
}
winMatch(0.5);
