let dias = 09;
let horas = 23;
let minutos = 59;
let segundos = 59;


// let dias = new Date().getDays;
// let horas = new Date().getHours;
// let minutos = new Date().getMinutes;
// let segundos = new Date().getSeconds;

    setInterval(() => {
        document.getElementById('seconds').innerHTML = segundos;
        segundos--;
        if (segundos == -1){
            segundos = 59;
        }
    }, 1000);

    setInterval(() => {
        document.getElementById('minutes').innerHTML = minutos;
        minutos--;
        if (minutos == -1){
            minutos = 59;
        }
    }, 30000);

    setInterval(() => {
        document.getElementById('hours').innerHTML = horas;
        horas--;
        if (horas == -1){
            horas = 23;
        }
    }, 3600000);

    setInterval(() => {
        document.getElementById('days').innerHTML = dias;
        dias--;
        if (dias == -1){
            dias = 0;
            document.querySelector('#days').innerHTML = "00";
            document.querySelector('#hours').innerHTML = "00";
            document.querySelector('#minutes').innerHTML = "00";
            document.querySelector('#seconds').innerHTML = "00";
            document.querySelector('#alert').style.display = "block";
        }
    }, 86400000);
