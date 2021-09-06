// Funcion para arreglar la hora en caso que tengan 1 numero
function transformHours(number){
    let auxiliar= "";

    if(number<10){
        auxiliar = number.toString();
        auxiliar= 0 + auxiliar;
    }else{
        auxiliar = number.toString();
    }

    return auxiliar;
}

//Funcion para saber que dia es y darle color al seleccionador.
function markDay(number){
    let day= "";
    let dayPointer;

    if(number==0){
        day="sunday";
    }
    else if(number==1){
        day="monday";
    }
    else if(number==2){
        day="tuesday";
    }
    else if(number==3){
        day="wednesday";
    }
    else if(number==4){
        day="thursday";
    }
    else if(number==5){
        day="friday";
    }
    else{
        day="saturday";
    }

    dayPointer= document.getElementById(day);
    dayPointer.style.color= "#ffff";
}

//Funcion para saber si es de dia(sun) o noche(moon) y darle color al seleccionador
function markSunOrMoon(number){
    let auxiliar= "";
    let typeDayPointer;

    if(number>6 && number<22){
        auxiliar="sun";
    }
    else{
        auxiliar="moon";
    }

    typeDayPointer = document.getElementById(auxiliar);
    typeDayPointer.style.color= "#ffff"
}


function clock(){
    const fullDate= new Date();
    let hours = transformHours(fullDate.getHours());
    let mins = transformHours(fullDate.getMinutes());
    let secs = transformHours(fullDate.getSeconds());

    markDay(fullDate.getDay());
    markSunOrMoon(fullDate.getHours())

    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = mins;
    document.getElementById("second").innerHTML = secs;
}

setInterval(clock,1000)


// Funcion para activar Light mode
const checkbox= document.getElementById("checkbox")

checkbox.addEventListener('change', ()=>{
    document.getElementById("container").classList.toggle('light')
})
