async function loadFooter(){
  const res = await fetch("/components/footer.html")
  const html = await res.text()

  document.getElementById("footer-container").innerHTML = html
}

document.addEventListener("DOMContentLoaded",async()=>{
  await loadFooter()
})
