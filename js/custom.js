/*
  Slidemenu
*/
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openNavMob() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNavMob() {
    document.getElementById("myNav").style.width = "0%";
}

new WOW({ mobile: false }).init();
