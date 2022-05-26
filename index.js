let premios = new Array;
let participantes;
let cofres;
let cofresYodeling;

function repartir(){
    cofres = document.getElementById('cofres').value * 5;
    let texto = document.getElementById('participantes').value;
    participantes = texto.split(",");

    for(let i = 0; i < participantes.length; i++){
        if(premios[i]) {
            premios[i]=0;
        }else premios.push(0);  
    }
    for(let i = 0; i < cofres; i++){
        let aleatorio =  Math.floor(Math.random()*(participantes.length));
        premios[aleatorio] += 1;
    }
    mostrar();
};

function mostrar(){
    let intervalo = (document.getElementById('intervalo').value && document.getElementById('intervalo').value>0) ? document.getElementById('intervalo').value : 10;
    const aux = (participantes.length % intervalo == 0) ? (participantes.length / intervalo - 1) : (Math.trunc(participantes.length / intervalo));
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
    resultado += "<p>Cofres repartidos <strong>" + cofres + "</strong>.</p>";
    resultado += "<label for=\"intervalo\">Mostrar cada: </label><br/>";       
    resultado += "<input type=\"number\" name=\"intervalo\" id=\"intervalo\" value=\"" + intervalo + "\"><br/>";
    resultado += "<input type=\"button\" value=\"MOSTRAR\" id=\"mostrar\" class=\"boton\" onclick=\"mostrar();\">";
    document.getElementById("resultado").innerHTML = resultado;
};

function toYodeling(){
    window.location.href += "/yodeling";
}

function back(){
    history.back();
}

function yodeling(){
    cofresYodeling = 0;
    let texto = document.getElementById('participantes').value;
    participantes = texto.split(",");

    for(let i = 0; i < participantes.length; i++){
        if(premios[i]) {
            premios[i]=0;
        }else premios.push(0);  
    }

    document.getElementById("musica").play();
    document.getElementById("musica").volume = 0.2;

    mostrarYodeling();

    setTimeout(sumarYodeling,2000);

    const interval = setInterval(sumarYodeling,15000);

    mostrarYodeling();
}

function sumarYodeling(){
    let aleatorio =  Math.floor(Math.random()*(participantes.length));
    premios[aleatorio] += 5;
    cofresYodeling += 5;
    if(cofresYodeling > 100){
        clearInterval(interval);
    }

    mostrarYodeling();
}

function mostrarYodeling(){
    let resultado = "<table><tr>";
    resultado += "<th>NOMBRE</th><th>COFRES</th>";
    resultado += "</tr>";

    for (let i = 0; i < participantes.length; i++){
        resultado += "<tr><td class=\"name\">"+participantes[i]+"</td><td class=\"amount\">"+premios[i]+"</td></tr>";
    }     

    resultado += "</table>";
    //resultado += "<p>Cofres repartidos <strong>" + cofres + "</strong>.</p>";
    document.getElementById("resultado").innerHTML = resultado;
};