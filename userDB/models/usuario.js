export class Usuario {
  constructor(id, nombre, fechaCreacion) {
    this.id = id;
    this.nombre = nombre;
    this.fechaCreacion = fechaCreacion;
  }

 
  static validar(nombre) {
    if (!nombre) {
      throw new Error('El nombre es obligatorio');
    }
    if (nombre.trim().length < 2) {
      throw new Error('El nombre debe tener al menos 2 letras');
    }
  }
}