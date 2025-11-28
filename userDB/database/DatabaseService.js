import { Platform } from 'react-native';
import * as SQLite from 'expo-sqlite';

class DatabaseService {
  constructor() {
    this.db = null;
    this.storageKey = 'usuarios_data'; 
  }

  async initialize() {
    if (Platform.OS === 'web') {
      console.log('Inicializado en WEB (LocalStorage)');
    } else {
      console.log('Inicializado en MOVIL (SQLite)');
      try {
        this.db = await SQLite.openDatabaseAsync('miapp.db');
        await this.db.execAsync(`
          PRAGMA journal_mode = WAL;
          CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            fecha_creacion TEXT
          );
        `);
      } catch (error) {
        console.error('Error al iniciar BD:', error);
      }
    }
  }

  async getAll() {
    if (Platform.OS === 'web') {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } else {
      return await this.db.getAllAsync('SELECT * FROM usuarios ORDER BY id DESC');
    }
  }

  async add(nombre) {
    const fecha = new Date().toISOString();
    
    if (Platform.OS === 'web') {
      const usuarios = await this.getAll();
      const nuevoUsuario = {
        id: Date.now(), // ID único basado en tiempo
        nombre,
        fecha_creacion: fecha
      };
      usuarios.unshift(nuevoUsuario); // Agregamos al principio
      localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
      return nuevoUsuario;
    } else {
      const result = await this.db.runAsync(
        'INSERT INTO usuarios (nombre, fecha_creacion) VALUES (?, ?)', 
        nombre, 
        fecha
      );
      return {
        id: result.lastInsertRowId,
        nombre,
        fecha_creacion: fecha
      };
    }
  }

  async update(id, nuevoNombre) {
    if (Platform.OS === 'web') {
      const usuarios = await this.getAll();
      
   
      const usuariosActualizados = usuarios.map(u => {
        if (u.id === id) {
          return { ...u, nombre: nuevoNombre }; 
        }
        return u;
      });

      localStorage.setItem(this.storageKey, JSON.stringify(usuariosActualizados));
      return true;
    } else {
      await this.db.runAsync(
        'UPDATE usuarios SET nombre = ? WHERE id = ?',
        nuevoNombre,
        id
      );
      return true;
    }
  }

  async delete(id) {
    if (Platform.OS === 'web') {
      const usuarios = await this.getAll();
      const filtrados = usuarios.filter(u => u.id !== id);
      localStorage.setItem(this.storageKey, JSON.stringify(filtrados));
      return true;
    } else {
      await this.db.runAsync('DELETE FROM usuarios WHERE id = ?', id);
      return true;
    }
  }
}

export default new DatabaseService();