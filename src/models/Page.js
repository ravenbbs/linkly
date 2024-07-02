// Importamos los módulos necesarios de mongoose
const { Schema, model, models } = require("mongoose");

// Definimos el esquema para la colección 'pages'
const pageSchema = new Schema({
  uri: { 
    type: String,       // El tipo de dato del campo 'uri' es String
    required: true,     // El campo 'uri' es obligatorio
    min: 1,             // El valor mínimo de longitud para 'uri' es 1
    unique: true        // El valor de 'uri' debe ser único en la colección
  },
  owner: {type: String , required: true}
}, { 
  timestamps: true      // Agrega automáticamente los campos 'createdAt' y 'updatedAt'
});

// Exportamos el modelo 'Page'
// Si el modelo 'Page' ya existe en 'models', lo utilizamos; si no, lo creamos
export const Page = models?.Page || model("Page", pageSchema);