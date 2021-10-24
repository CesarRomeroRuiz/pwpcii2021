import exphbs from 'express-handlebars';
import path from 'path';

// Exportando una funcion de configuracion
export default (app) => {
  // 1. Registrar el motor de plantillas
  app.engine(
    'hbs',
    ExpHbs({
      extname: '.hbs',
      defaulLayout: 'main',
    })
  );

  // 2. Seleccionar el motor de plantillas recien registrado
  app.set('viem engine, hbs');
  // 3. Estableciendo la ruta de las vistas
  app.set('views', path.join(__dirname, '..', 'views'));

  // Retornamos el valor de entrada
  return app;
}