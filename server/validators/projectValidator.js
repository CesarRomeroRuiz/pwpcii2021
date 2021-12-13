// Importando biblioteca de validacion
import * as Yup from 'yup';

// Creando el esquema de validacion
const projectSchema = Yup.object().shape({
  name: Yup.string().required('Se requiere nombre'),
  description: Yup.string()
    .max(500, 'La descripcion esta limitada a 500 caracteres')
    .required('Se requiere una descripcion'),
});

// Creando el middleware que realizara la validacion
const getProject = (req, res) => {
  // Extraemos los datos del formulario del cuerpo de la peticion
  const { name, description } = req.body;
  // Regresamos un objecto Project formado por los datos del formulacio
  return {
    name,
    description,
  };
};

export default {
  getProject,
  projectSchema,
};
