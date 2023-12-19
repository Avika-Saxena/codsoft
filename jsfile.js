var cursorcustom = document.getElementById('morpankh');
document.onmousemove = function(e) {
    cursorcustom.style.left = e.pageX + "px";
    cursorcustom.style.top = (e.pageY - 75) + "px";
}

function move() {
    document.querySelector("body").style.overflowY = 'visible';
    document.querySelector(".RadheRadhe").style.opacity = '0';
}

window.addEventListener('click', () => {
    document.getElementById('madhurashtakam').play();
});