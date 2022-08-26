function toggleNav() {
    var navPop = document.getElementById("navPop");
    if (navPop.style.display === "block") {
        navPop.style.display = "none";
        document.getElementById("arrows").style.display = "block";
    } else {
        navPop.style.display = "block";
        document.getElementById("arrows").style.display = "none";
    }
}

addEventListener("resize", width)
function width() {
        navPop.style.display = "none";
        document.getElementById("arrows").style.display = "block";
}

addEventListener("refresh", arrow)
function width() {
    if(screen.width > 800) {
        navPop.style.display = "none";
        document.getElementById("arrows").style.display = "block";
    }
}