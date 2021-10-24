// Importando Router
import { Router } from 'express';

// Importando al controlador
import userController from '@server/controllers/userController';

// Creando instancia de un router
const router = new Router();

/* GET users listing. */
router.get('/', userController.index);

export default router;
