var modal = document.getElementsByClassName('calendar');
var btn = document.getElementsByClassName("btn");


btn.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}