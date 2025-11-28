import { Usuario } from '../models/usuario';
import DatabaseService from '../database/DatabaseService';

export class UsuarioController {
  constructor() {
    this.listeners = [];
  }

  async initialize() {
    await DatabaseService.initialize();
  }

  async obtenerUsuarios() {
    try {
      const data = await DatabaseService.getAll();
      return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      return []; 
    }
  }

  async crearUsuario(nombre) {
    try {
      Usuario.validar(nombre);
      const nuevo = await DatabaseService.add(nombre.trim());
      this.notifyListeners();
      return new Usuario(nuevo.id, nuevo.nombre, nuevo.fecha_creacion);
    } catch (error) {
      console.error('Error al crear:', error);
      throw error;
    }
  }

  // IMPORTANTE: Renombrado a 'actualizarUsuario' para coincidir con la Vista
  async actualizarUsuario(id, nuevoNombre) {
    try {
      Usuario.validar(nuevoNombre);
      await DatabaseService.update(id, nuevoNombre.trim());
      this.notifyListeners();
    } catch (error) {
      console.error('Error al actualizar:', error);
      throw error;
    }
  }

  async eliminarUsuario(id) {
    try {
      await DatabaseService.delete(id);
      this.notifyListeners();
    } catch (error) {
      console.error('Error al eliminar:', error);
      throw error;
    }
  }

  // Patrón Observer
  addListener(callback) {
    this.listeners.push(callback);
  }

  removeListener(callback) {
    this.listeners = this.listeners.filter(l => l !== callback);
  }

  notifyListeners() {
    this.listeners.forEach(callback => callback());
  }
}