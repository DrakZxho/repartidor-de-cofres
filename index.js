function boton(){
    const cofres = document.getElementById('cofres').value;
    let texto = document.getElementById('participantes').value;
    let participantes = texto.split(",");
    let premios = new Array;
    let total = 0;
    for(let i = 0; i < participantes.length; i++){
        premios.push(0);  
    }
    for(let i = 0; i < cofres; i++){
        let aleatorio =  Math.floor(Math.random()*(participantes.length));
        console.log(aleatorio);
        premios[aleatorio]++;
    }
    for(let i = 0; i < participantes.length; i++){
        console.log(participantes[i] + " " + premios[i]);   
        total+=premios[i];
    }
    console.log(total);
};
