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
}