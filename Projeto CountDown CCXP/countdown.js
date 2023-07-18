const dia = window.document.getElementById('dia')
const hora = window.document.getElementById('hora')
const minuto = window.document.getElementById('minuto')
const segundo = window.document.getElementById('segundo')

const lancamento = "1 december 2023"

function countDown(){
    const dataLanc = new Date (lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = finalDias
    hora.innerHTML = formatoTempo(finalHoras)
    minuto.innerHTML = formatoTempo(finalMinutos)
    segundo.innerHTML = formatoTempo(finalSegundos)
}

function formatoTempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000)