const productos = [
    {nombre:"Laptop", precio: 12000},
    {nombre:"Mouse", precio: 250},
    {nombre:"Teclado", precio: 750},
    {nombre:"Monitor", precio: 3000},
]
console.log(" ");
console.log("Productos con costo mayor a 1000");
const prod = productos.filter(producto => producto.precio > 1000).map(producto => producto.nombre);
console.log(prod);