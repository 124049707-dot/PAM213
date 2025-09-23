const Persona = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion:{
        ciudad: "Qro",
        pais:"MX"
    }

};
console.log("Extraccion de los datos");
const{nombre,edad,direccion}= Persona;
console.log("Me llamo "+nombre+ " tengo "+ edad +" años "+" y vivo en "+ direccion.ciudad);