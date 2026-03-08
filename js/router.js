const routes = {
1: "inicio",
2: "menu",
3: "pedidos",
4: "especiales"
}

async function loadPage(page){
  const response = await fetch(`/pages/${page}.html`)
  const html = await response.text()

  document.getElementById("content").innerHTML = html
}

function updateURL(id){
  location.hash = id
}

function loadFromURL(){

  const id = location.hash.replace("#","")
  if(routes[id]){
    loadPage(routes[id])

    setActive(id)
  }
  else{
    updateURL(1)
  }
}

function setActive(id){

  document.querySelectorAll(".nav-link").forEach(link=>{
    link.classList.remove("active")

    if(link.dataset.id === id){
      link.classList.add("active")
    }
  })

}

async function loadNavbar(){
  const res = await fetch("/components/navbar.html")
  const html = await res.text()

  document.getElementById("navbar-container").innerHTML = html

  document.querySelectorAll(".nav-link").forEach(link=>{
    link.addEventListener("click",()=>{
      const id = link.dataset.id
      updateURL(id)
    })
  })
}

document.addEventListener("DOMContentLoaded",async()=>{
  await loadNavbar()
  loadFromURL()
})

window.addEventListener("hashchange",loadFromURL)
