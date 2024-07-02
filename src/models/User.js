// Importamos los módulos necesarios de mongoose
import { model, models, Schema } from "mongoose";

// Definimos el esquema para la colección 'users'
const UserSchema = new Schema({
  name: String,           // Nombre del usuario
  email: String,          // Correo electrónico del usuario
  image: String,          // URL de la imagen del usuario
  emailVerified: Date,    // Fecha de verificación del correo electrónico
});

// Exportamos el modelo 'User'
// Si el modelo 'User' ya existe en 'models', lo utilizamos; si no, lo creamos
export const User = models?.User || model('User', UserSchema);