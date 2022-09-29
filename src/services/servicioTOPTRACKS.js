
export async function consultarCanciones(URI,PETICION){

    let respuesta=await fetch(URI,PETICION)//vehículo que lleva la info
    let canciones=await respuesta.json()
    return(canciones)
    
}