import { createAuthorController } from '../controllers/authors.controllers';
import { Router } from 'express';

export const authorsRoute = Router(); 

authorsRoute.post('/', createAuthorController); 