export function pintarCanciones(canciones){
    let fila=document.getElementById("fila")
    fila.innerHTML = ""
    canciones.tracks.forEach(function(cancion){
       
         let columna=document.createElement("div")
         columna.classList.add("col")
 
         let tarjeta=document.createElement("div")
         tarjeta.classList.add("card","h-100","shadow","text-bg-secondary")
 
         let audio=document.createElement("audio")
         audio.classList.add("w-100")
         audio.setAttribute("controls","controls")
         audio.src=cancion.preview_url
 
         let imagen=document.createElement("img")
         imagen.classList.add("card","w-100","h-100")
         imagen.src=cancion.album.images[0].url
 
         let nombre=document.createElement("h4")
         nombre.classList.add("card","text-center","text-bg-secondary")
         nombre.textContent=cancion.album.name
 
         let titulo=document.createElement("h5")
         titulo.classList.add("card","text-center","text-bg-secondary")
         titulo.textContent=cancion.name
 
         let popularidad=document.createElement("h3")
         popularidad.classList.add("text-center")
         popularidad.textContent=cancion.popularity
 
         let fecha=document.createElement("h5")
         fecha.classList.add("text-center")
         fecha.textContent=cancion.album.release_date
 
         //PADRES E HIJOS
         tarjeta.appendChild(fecha)
         tarjeta.appendChild(popularidad)
         tarjeta.appendChild(titulo)
         tarjeta.appendChild(nombre)
         tarjeta.appendChild(imagen)
         tarjeta.appendChild(audio)
         columna.appendChild(tarjeta)
         fila.appendChild(columna)
     })
}