function boton(){
let texto = document.getElementById('participantes').value;
let participantes = texto.split(",");
let cofres = new Array;
for(let i = 0; i < participantes.length; i++){
    cofres.push(0);
    console.log(participantes[i] + cofres[i]);   
}

};
