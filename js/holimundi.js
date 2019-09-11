var fecha = new Date();


var hour = fecha.getHours();
var jorn;

if(hour < 12 & hour > 0){
    jorn = "mañana";
}

if(hour > 12 & hour < 18){
    jorn = "tarde";
}

if(hour > 18 & hour < 24){
    jorn = "noche";
}


var text; 
switch(new Date().getDay()){
    case 1: 
        text = "Hola Desarrollador, estamos en la " + jorn + " del día Lunes."
        break;
	case 2:
            text = "Hola Desarrollador, estamos en la " + jorn + " del día Martes."
            break;
	case 3:
     text = "Hola Desarrollador, estamos en la " + jorn + " del día Miércoles."
     break;
    case 4:
        text = "Hola Desarrollador, estamos en la " + jorn + " del día Jueves."
        break;    
    case 5:
        text = "Hola Desarrollador, estamos en la " + jorn + " del día Viernes."
        break;
	case 6:
            text = "Hola Desarrollador, estamos en la " + jorn + " del día Sábado."
        break;
	case 7:
            text = "Hola Desarrollador, estamos en la " + jorn + " del día Domingo."
            break;
}

//NEW

b = [1,2,3,4,5]
i = 0
for(;i < b.length;){
    console.log(b[i]);
    i++;
}

var i,j;
var sum = 0;
for(i = 0, j = 10; i < 10; i++, j--){
    sum += i*j;
}

//NEW

function random_num(){
    var num = 0;
    var count = 0; 
    while(num < 80){
        num  = Math.round(Math.random()*100);
        console.log(num);
        count+=1;
    }
    return count;
}

function prom(){
    var rep = 0;
    for(i = 0; i < 1000; i++){
        rep += random_num();
    }

    console.log("average repetitions: " + rep/1000);

}

//NEW
function lost() { 
    var num = 0;
    var mon = 1000;
    var los = 0;
    num = Math.round(Math.random()*37);
    while(true){
        mon += 1000;
        los++;
        num = Math.round(Math.random()*37);
    if (num == 17){
        break;
    }
}
return mon;
// console.log("you lost " + mon +" pesos in " + los + " times.");
}

function avggain(){
    var avgg = 0;
    for(i = 0; i < 1000; i++){
        avgg += lost() - 35000;
    }

    console.log("average loss: " + avgg/1000);
}

//NEW

games = ["gta", "Doom", "TomR", "Ori", "Portal", "Dota"];

i = 0;

while(i<games.length){
    if(games[i] == "Ori"){
        i++;
        continue;
    }
    console.log("Juego" + i + " " +  games[i]);
    i++;
}
