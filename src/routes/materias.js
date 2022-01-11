const { Router } = require('express');
const router = Router();
const passport= require('passport');
require('../../passport');

const { getMaterias, createMateria, getMateria, deleteMateria, updateMateria } = require('../controllers/materia.controller');

router.route('/')
    .get(getMaterias)
    .post(createMateria);

router.route('/:id')
    .get(getMateria)
    .delete(deleteMateria)
    .put(updateMateria);

module.exports = router;