var image = document.querySelectorAll("img");

for (let i = 0; i < image.length; i++) { 
    image[i].title = image[i].alt;
}
