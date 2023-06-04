let menuBtn = document.querySelector('.header__button');
let menu = document.querySelector('.header__list');
menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
})


var inp = document.getElementById("inp");

inp.onclick = function () {
    inp.value = "+";
}

var old = 0;

inp.onkeydown = function () {
    var curLen = inp.value.length;

    if (curLen < old) {
        old--;
        return;
    }

    if (curLen == 2)
        inp.value = inp.value + "(";

    if (curLen == 6)
        inp.value = inp.value + ")-";

    if (curLen == 11)
        inp.value = inp.value + "-";

    if (curLen == 14)
        inp.value = inp.value + "-";

    if (curLen > 16)
        inp.value = inp.value.substring(0, inp.value.length - 1);

    old++;
}