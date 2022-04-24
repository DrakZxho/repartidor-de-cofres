function repartir(){
    const cofres = document.getElementById('cofres').value * 5;
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
        premios[aleatorio] += 1;
    }
    for(let i = 0; i <= aux; i++){
        if(i == 0)
        resultado += "<th>NOMBRE</th><th>COFRES</th>";
        else resultado += "<th>NOMBRE</th><th>COFRES</th><th></th>";
    }
    resultado += "</tr>";
    for(let i = 0; i < 10; i++){
        if (participantes[i]){
            if (aux<1)
            resultado += "<tr><td class=\"name\">"+participantes[i]+"</td><td class=\"amount\">"+premios[i]+"</td>";
            else resultado += "<tr><td class=\"name\">"+participantes[i]+"</td><td class=\"amount\">"+premios[i]+"</td><td></td>";
            for(let j = 1; j <= aux;j++){
                let aux2 = j*10 + i;
                if (participantes[aux2]){
                    if (j < aux)
                    resultado += "<td class=\"name\">"+participantes[aux2]+"</td><td class=\"amount\">"+premios[aux2]+"</td>";
                    else resultado += "<td class=\"name\">"+participantes[aux2]+"</td><td class=\"amount\">"+premios[aux2]+"</td><td></td>";
                }
            }
            resultado += "</tr>";
        }     
    }
    resultado += "</table>";
    resultado += "<p>Cofres repartidos <strong>" + cofres + "<strong>.</p>"
    document.getElementById("resultado").innerHTML = resultado;
};
