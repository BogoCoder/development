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