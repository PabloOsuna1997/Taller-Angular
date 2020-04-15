const express = require('express');
const controller = require('../controllers/employee.controllers');
const router = express.Router();

router.get('/', controller.getEmployees);
router.get('/:id', controller.getEmployee);
router.post('/', controller.createEmploye);
router.put('/:id', controller.editEmployee);
router.delete('/:id', controller.deleteEmployee);

module.exports = router;