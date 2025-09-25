function simularPeticionAPI(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Datos recibidos correctamente");
            
        },5000);
    });
}
async function obtenerDatos(){
    console.log("Vamos a intentarlo...");
    try{
        const respuesta= await simularPeticionAPI();
        console.log("El resultado es ",respuesta);
    }catch(error){
        console.error("Error al recibir los datos",error);
        
    }
}
obtenerDatos();