function boton(){
    const cofres = document.getElementById('cofres').value;
    let texto = document.getElementById('participantes').value;
    let participantes = texto.split(",");
    let premios = new Array;
    for(let i = 0; i < participantes.length; i++){
        premios.push(0);  
    }
    for(let i = 0; i < cofres; i++){
        let aleatorio =  Math.floor(Math.random()*(participantes.length-1));
        cofres[aleatorio]++;
    }
    for(let i = 0; i < participantes.length; i++){
        console.log(participantes[i] + " " + premios[i]);   
    }
};
