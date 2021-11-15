// Actions Methods
// "/projects/index"
const index = (req, res) => {
  res.send('Respondiendo a "/projects/index"');
};

// "projects/add"
const add = (req, res) => {
  res.send('Respondiendo a "/projects/add"');
};

// TODO: Pendiente por programar
export default {
  add,
  index,
};
