// Importando Router
import { Router } from 'express';

// Importando el controlador de proyectos
import projectsController from '@server/controllers/projectController'

// Creando la instancia de un router
const router = new Router();

// "/projects" "/projects/index"
router.get(['/','/index]', projectController.index);

// "/projects/add"
// Sirve el formulario para agregar proyectos
router.get('/add', projectController.add);

export default router;