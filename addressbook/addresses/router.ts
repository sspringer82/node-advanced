import express from 'express';

import controller from './controller.js';

const addressRouter = express.Router();

addressRouter.get('/', controller.getAll);
addressRouter.get('/:id', controller.getOne);
addressRouter.post('/', controller.create);
addressRouter.patch('/:id', controller.patch);
addressRouter.put('/:id', controller.update);
addressRouter.delete('/:id', controller.remove);

export default addressRouter;
