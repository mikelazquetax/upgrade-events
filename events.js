
window.onload = function(){
 botonNuevo =  document.createElement('button')
 botonNuevo.setAttribute("id", "btnToClick")
 botonNuevo.innerHTML = "Pulsame"
 body = document.body
 body.appendChild(botonNuevo)

 //1.1

 botonNuevo.addEventListener("click", () => {
     show()
 })

 botonNuevo.addEventListener("focus", () =>{
     focus()
 })
 botonNuevo.addEventListener("onchange", () => {
    
 
  actualizar()
 })

}

function show(){
    console.log('boton Pulsado')
}

function focus(){
    texto = document.querySelector(".focus").value;
    console.log(texto)
}

function actualizar(){
  textos = document.querySelector(".value").value
    return textos
}

