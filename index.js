function repartir(){
    const cofres = document.getElementById('cofres').value * 5;
    const intervalo = (document.getElementById('intervalo').value && document.getElementById('intervalo').value>0) ? document.getElementById('intervalo').value : 10;
    let texto = document.getElementById('participantes').value;
    let participantes = texto.split(",");
    let premios = new Array;
    

    const aux = Math.trunc(participantes.length / intervalo);
    for(let i = 0; i < participantes.length; i++){
        premios.push(0);  
    }
    for(let i = 0; i < cofres; i++){
        let aleatorio =  Math.floor(Math.random()*(participantes.length));
        premios[aleatorio] += 1;
    }
    let resultado = "<table><tr>";
    for(let i = 0; i <= aux; i++){
        resultado += "<th>NOMBRE</th><th>COFRES</th>";
    }
    resultado += "</tr>";
    for(let i = 0; i < intervalo; i++){
        if (participantes[i]){
            resultado += "<tr><td class=\"name\">"+participantes[i]+"</td><td class=\"amount\">"+premios[i]+"</td>";
            for(let j = 1; j <= aux;j++){
                let aux2 = j * intervalo + i;
                if (participantes[aux2]){
                    resultado += "<td class=\"name\">"+participantes[aux2]+"</td><td class=\"amount\">"+premios[aux2]+"</td>";
                }
            }
            resultado += "</tr>";
        }     
    }
    resultado += "</table>";
    resultado += "<p>Cofres repartidos <strong>" + cofres + "<strong>.</p>"
    document.getElementById("resultado").innerHTML = resultado;
};
function mostrar(){
};
