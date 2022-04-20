function boton(){
let texto = document.getElementById('participantes').value;
let participantes = texto.split(",");
for(let i = 0; i < participantes.length; i++){
    console.log(participantes[i]);   
}

};
