var acc = document.getElementsByClassName("accordian");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", accTog);
    acc[i].addEventListener("click", plusTog);
}



function accTog() {
    this.nextElementSibling.classList.toggle("active");
}

function plusTog() {
    var plus = this.nextElementSibling;
    if (plus.classList.contains("active") === true) {
        document.getElementById("plus").innerHTML = document.getElementById("plus").innerHTML.slice(0, -1) + "-";
    } else {
        document.getElementById("plus").innerHTML = document.getElementById("plus").innerHTML.slice(0, -1) + "+";
    }
}
