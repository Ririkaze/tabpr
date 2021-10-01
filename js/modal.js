<<<<<<< HEAD
var modal = document.getElementById("modal");
var btn = document.getElementById("btn");
var closer = document.getElementById("btg");

btn.onclick = function () {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if(event.target == closer) {
        modal.style.display = "none";
    }
=======
var modal = document.getElementsByClassName('calendar');
var btn = document.getElementsByClassName("btn");


btn.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
>>>>>>> 3f8b29efd5b1271bee08d546191cd7105e3ed655
}