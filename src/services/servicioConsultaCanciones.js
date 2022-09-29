//DEBO CONFIGURAR LA URI
let URI="https://api.spotify.com/v1/artists/6KImCVD70vtIoJWnq6nGn3/top-tracks?market=us";

let buscar = document.getElementById("buscar")
buscar.addEventListener("click",function(evento){
    
    evento.preventDefault()
    let artista = document.getElementById("artista").value
    console.log(artista)
    URI=`https://api.spotify.com/v1/artists/${artista}/top-tracks?market=us`

    //2.Configuro datos Especiales o de CONTROL en el servidor
    const TOKEN="Bearer BQCCL-pvso78V5HegI3IbfIXwtMCjoFvApWfUhGhVzKem5rYU6F3rtFmSrW3M0UBrPk3sFSFUXXHoZ6W78IH0LK3nrv8ebmimKyQeAyyfOeQuJVe4tI268vemb6HkoVG516fWwJhD5d2AFiMs9TU0qYstKTnRcv2fPCeY9__w6qJpqjPIBfWuf0K9OF4FptrgCc"
    //Para JS la peticion es un OBJETO
    const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
    }
    //4. Consuma el API
    fetch(URI,PETICION)
    .then(function(respuesta){
    return respuesta.json()//garantizo formato JSON
    })
    .then(function(respuesta){
    console.log(respuesta)//Hago lo que quiera con respuesta
    console.log(respuesta.tracks)//accedo a un atributo de la respuesta

    //recorrer el arreglo
    let fila=document.getElementById("fila")
    fila.innerHTML = ""
    respuesta.tracks.forEach(function(cancion){
       /* console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)
        console.log(cancion.popularity)
        console.log(cancion.album.name)
        console.log(cancion.album.release_date)*/
        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow","text-bg-warning")

        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let imagen=document.createElement("img")
        imagen.classList.add("card","w-100","h-100")
        imagen.src=cancion.album.images[0].url

        let nombre=document.createElement("h4")
        nombre.classList.add("card","text-center")
        nombre.textContent=cancion.album.name

        let titulo=document.createElement("h5")
        titulo.classList.add("card","text-center")
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

        
})
.catch(function(respuestaError){
    console.log(respuestaError)
})

})


//RECETA PARA CONSUMIR APIS CON JS PURO

//1. si yo quiero consumir un api debo saber  para donde
//ir y a que servicio 





//3.Configuro la peticion
//Nota: Solo POST Y PUT configuran Body


