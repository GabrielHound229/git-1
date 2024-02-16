let NomeHeroi = "Cecil"
let Nivel = "5001"

if (Nivel <= 1000 ){
    console.log ("O rank de" , NomeHeroi, "é Ferro");
}else if (Nivel <= 1001, Nivel <= 2000){
    console.log ("O rank de" , NomeHeroi, "é Bronze");
}else if (Nivel <= 2001, Nivel <= 5000){
    console.log ("O rank de" , NomeHeroi, "é Prata");
}else if (Nivel <= 5001, Nivel <= 7000){
    console.log ("O rank de" , NomeHeroi, "é Ouro");
}else if (Nivel <= 7001, Nivel <= 8000){
    console.log ("O rank de" , NomeHeroi, "é Platina");
}else if (Nivel <= 8001, Nivel <= 9000){
    console.log ("O rank de" , NomeHeroi, "é Ascendente");
}else if (Nivel <= 9001, Nivel <= 10000){
    console.log ("O rank de" , NomeHeroi, "é Imortal");
}else if (Nivel >= 10001){
    console.log ("O rank de" , NomeHeroi, "é Radiante");
}

console.log ("O Herói de nome", NomeHeroi, "Está no nível", Nivel);

