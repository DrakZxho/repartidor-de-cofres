function boton(){
    const cofres = document.getElementById('cofres').value;
    let texto = document.getElementById('participantes').value;
    let participantes = texto.split(",");
    let premios = new Array;
    let resultado = "<table><tr>";
    const aux = Math.trunc(participantes.length/10);
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
    for(let i = 0; i < 10; i++){
        if (participantes[i]){
            resultado += "<tr><td>"+participantes[i]+"</td><td>"+premios[i]+"</td>";
            for(let j = 1; j <= aux;j++){
                let aux2 = j*10 + i;
                if (participantes[aux2]){
                    resultado += "<tr><td>"+participantes[aux2]+"</td><td>"+premios[aux2]+"</td>";
                }
            }
            resultado += "</tr>";
        }     
    }
    resultado += "</table>";
    console.log(resultado);
    document.getElementById("resultado").innerHTML(resultado);
};
