function boton(){
    const cofres = document.getElementById('cofres').value;
    let texto = document.getElementById('participantes').value;
    let participantes = texto.split(",");
    let premios = new Array;
    let resultado = "<table><tr>";
    const aux = Math.trunc(participantes.length/10);
    const aux2 = participantes.length - aux*10;
    for(let i = 0; i < participantes.length; i++){
        premios.push(0);  
    }
    for(let i = 0; i < cofres; i++){
        let aleatorio =  Math.floor(Math.random()*(participantes.length));
        premios[aleatorio]++;
    }
    for(let i = 0; i <= aux; i++){
        resultado += "<th>nombre</th><th>cofres</th>";
    }
    resultado += "</tr>";
    for(let i = 0; i < aux2; i++){
        participantes.push("");
        premios.push("");
    }
    for(let i = 0; i < 10; i++){
        if (participantes[i]){
            resultado += "<tr><td>"+participante[i]+"</td><td>"+premios[i]+"</td>";
            for(let j = 1; j <= aux;j++){
                let aux3 = j*10 + i;
                if (participantes[aux3]){
                    resultado += "<tr><td>"+participante[aux3]+"</td><td>"+premios[aux3]+"</td>";
                }
            }
            resultado += "</tr>";
        }     
    }
    resultado += "</table>";
    console.log(resultado);
    document.getElementById("resultado").innerHTML(resultado);
};
