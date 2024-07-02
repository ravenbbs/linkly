// Importamos los módulos necesarios de mongoose
import { model, models, Schema } from "mongoose";

// Definimos el esquema para la colección 'events'
const EventSchema = new Schema({
  type: String, // El tipo de evento, puede ser "click" o "view"
  page: String, // La página asociada al evento, por ejemplo "raven"
  uri: String, // La URI asociada al evento, puede ser "/raven" o una URL completa
}, { 
  timestamps: true // Agrega automáticamente los campos 'createdAt' y 'updatedAt'
});

// Exportamos el modelo 'Event'
// Si el modelo 'Event' ya existe en 'models', lo utilizamos; si no, lo creamos
export const Event = models?.Event || model('Event', EventSchema);
