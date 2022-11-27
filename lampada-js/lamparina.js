const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

function islampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    lamp.src = './img/ligada.jpg';
}

function lampOff() {
    lamp.src = './img/desligado.jpg';
}

function lampBroken() {
    turnOnOff.textContent = 'REPAIR';
    lamp.src = './img/quebrada.jpg';


}

function lampOnOff() {
    if (turnOnOff.textContent == 'TURN ON') {
        lampOn();
        turnOnOff.textContent = 'TO SWITCH OFF';
    }
    else {
        lampOff();
        turnOnOff.textContent = 'TURN ON'

    }
}

turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseover', () => { if (islampBroken) lampOn });
lamp.addEventListener('mouseleave', () => { if (islampBroken) lampOff });
lamp.addEventListener('dblclick', lampBroken);
