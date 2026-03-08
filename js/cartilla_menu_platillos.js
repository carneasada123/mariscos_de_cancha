let zoomLevel = 100;
const zoomStep = 20;

function zoomIn(){

zoomLevel += zoomStep;

document.querySelectorAll(".menu-img").forEach(img=>{
img.style.width = zoomLevel + "%";
});

}

function zoomOut(){

if(zoomLevel > 100){
zoomLevel -= zoomStep;
}

document.querySelectorAll(".menu-img").forEach(img=>{
img.style.width = zoomLevel + "%";
});

}


/* PAGINACION */

const carousel = document.getElementById('menuCarousel');
const currentPage = document.getElementById("currentPage");
const totalPages = document.getElementById("totalPages");

const items = document.querySelectorAll(".carousel-item");

totalPages.textContent = items.length;

carousel.addEventListener('slid.bs.carousel', function (event) {

currentPage.textContent = event.to + 1;

});