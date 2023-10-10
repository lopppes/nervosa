
// preloader

window.addEventListener('load', function () {
    setTimeout(function () {
        document.body.classList.add('loaded');
    }, 2000); 
});




// data and time

function atualizarDataHora() {
    const dataHoraElemento = document.getElementById("data-hora");
    const agora = new Date();

    const dia = agora.getDate().toString().padStart(2, '0');
    const mes = (agora.getMonth() + 1).toString().padStart(2, '0');
    const ano = agora.getFullYear();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    const dataHoraFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
    dataHoraElemento.textContent = dataHoraFormatada;
}

atualizarDataHora();

setInterval(atualizarDataHora, 1000);