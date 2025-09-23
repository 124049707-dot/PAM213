const personas=[
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28}
];
console.log(" ");
console.log("Busqueda del nombre Luis");
const nomb=personas.find(nom=>nom.nombre === "Luis").nombre;
console.log(nomb);
console.log("");
console.log("Imprimir el nombre y edad de cada persona");
personas.forEach(personas=>{console.log(personas)});
console.log("");
console.log("Sumas de las edades");
const suma=personas.reduce((result,personas)=>result+personas.edad,0);
console.log(suma);

