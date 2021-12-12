// Importando Router
import { Router } from 'express';

// Importando el controlador de proyectos
import projectsController from '@server/controllers/projectController'
import projectController from '../controllers/projectController';

// Creando la instancia de un router
const router = new Router();

// GET "/projects" "/projects/index"
router.get(['/','/index]', projectController.index);

// GET "/projects/add"
// Sirve el formulario para agregar proyectos
router.get('/add', projectController.add);

// POST "/projects/add"
// Procesa el formulario
router.post('/add', projectController.addPost);

export default router;