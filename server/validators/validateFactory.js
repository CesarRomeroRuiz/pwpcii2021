// Usando el patron factory para la creacion
// de middleware de validacion
const Validator =
  ({ shape, getObject }) =>
  async (req, res, next) => {
    // Construyendo el objeto validador
    const dataObject = getObject(req);
    // Se realiza el proceso de validacion
    try {
      // Se valida el objeto
      const validData = await shape.validate(dataObject, { abortEarly: false });
      // Se inyecta el objeto validado a la peticion
      req.validData = validData;
      // Se invoca el siguiente middleware a la cadena
      return next();
    } catch (error) {
      // En caso de error se regresa la info del error
      return res.status(400).json({ error: error.message });
    }
  };

// exportando el validador
export default Validator;
