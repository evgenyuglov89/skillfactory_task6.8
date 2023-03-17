const trafficLightEl = document.querySelector('#trafficLightGreen');
const trafficLightE2 = document.querySelector('#trafficLightYellow');
const trafficLightE3 = document.querySelector('#trafficLightRed');
let count = 0;
function click() {
    count++;
    if(count > 3){
        count = 1;
    }
    if(count == 1){
        trafficLightEl.style.background = ('green');
        trafficLightE2.style.background = ('black');
        trafficLightE3.style.background = ('black');
    }
    if(count == 2){
        trafficLightEl.style.background = ('black');
        trafficLightE2.style.background = ('yellow');
        trafficLightE3.style.background = ('black');
    }
    if(count == 3){
        trafficLightEl.style.background = ('black');
        trafficLightE2.style.background = ('black');
        trafficLightE3.style.background = ('red');
    }
}
trafficLightEl.addEventListener('click', click);
trafficLightE2.addEventListener('click', click);
trafficLightE3.addEventListener('click', click);
