import express from 'express';
import { trouversalutation, getSalutationliste } from './salutations.controller.js';

const router = express.Router();

router.get('/', trouversalutation);


router.get('/liste_pour_langue/:code_langue', getSalutationliste);

export default router;