
function captura(){
    var valorAtaque = document.getElementById("ataque").value
    console.log(valorAtaque);

    var valorDefensa = document.getElementById("defensa").value
    console.log(valorDefensa);

    var tipoAtaque = document.getElementById("tipo1").value 
    console.log(tipoAtaque);

    var tipoDefensa = document.getElementById("tipo2").value
    console.log(tipoDefensa);

    resultado = daño(valorAtaque, valorDefensa, tipoAtaque, tipoDefensa);
    document.getElementById("result").innerHTML = "Your Pokémon's attack caused "+resultado+" damage to your opponent's Pokémon";



}

function daño(ataque, defensa, tipoAtaque, tipoDefensa){
    efectividad = 1;
    if(tipoAtaque == "water" && tipoDefensa == "fire"
    || tipoAtaque == "electric" && tipoDefensa == "water"
    || tipoAtaque == "grass" && tipoDefensa == "water"
    || tipoAtaque == "fire" && tipoDefensa == "grass"){
        efectividad = 2;
    }else if(tipoAtaque == "fire" && tipoDefensa == "water"
    || tipoAtaque == "water" && tipoDefensa == "grass"
    || tipoAtaque == "electric" && tipoDefensa == "grass"){
        efectividad = 0.5;
    }

    var danioTotal = 50 * (ataque/defensa) * efectividad;
    return danioTotal;
}

document.getElementById("ataque").onclick = function(){
    var valorAtaque = document.getElementById("ataque").value;
    console.log(valorAtaque);
}
