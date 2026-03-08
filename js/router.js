async function loadPage(page){

const content = document.getElementById("content")

content.classList.add("fade-out")

setTimeout(async()=>{

const response = await fetch(`pages/${page}.html`)
const html = await response.text()

content.innerHTML = html

content.classList.remove("fade-out")

},300)

}

async function loadNavbar(){

const res = await fetch("components/navbar.html")
const html = await res.text()

document.getElementById("navbar-container").innerHTML = html

document.querySelectorAll(".nav-link").forEach(link=>{

link.addEventListener("click",()=>{

document.querySelectorAll(".nav-link").forEach(l=>l.classList.remove("active"))

link.classList.add("active")

loadPage(link.dataset.page)

})

})

}

document.addEventListener("DOMContentLoaded",async()=>{

await loadNavbar()

loadPage("inicio")

})