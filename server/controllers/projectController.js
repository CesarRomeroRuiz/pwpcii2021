// Actions Methods
// "/projects/index"
const index = (req, res) => {
  res.send('Respondiendo a "/projects/index"');
};

// GET "projects/add"
// Enviar el formulario para crear nuevas ideas
// de proyectos
const add = (req, res) => {
  res.render('project/addView');
};

// POST "/projects/add"
const addPost = (req, res) => {
  // Rescatando la informacion del formulario
  const { validData; project } = req;
  res.status(200).json(project);
};

// TODO: Pendiente por programar
export default {
  add,
  addPost,
  index,
};
