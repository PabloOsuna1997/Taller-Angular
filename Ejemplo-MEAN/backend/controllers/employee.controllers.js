const employeeSchema = require('../models/employee');

//creamos objeto employe y los metodos que este contendre CRUD
const employee = {};

//get employees 
employee.getEmployees = async (req, res) => {
    const employees = await employeeSchema.find();
    res.json(employees);
};

//get Employee
employee.getEmployee = async (req, res) => {
    const employee = await employeeSchema.findById(req.params.id);

    res.json(employee)
};

//create employee
employee.createEmploye = async (req, res) => {
    const newEmployee = new employeeSchema({
        cod_empleado: req.body.cod_empleado,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        correo: req.body.correo

    });

    await newEmployee.save();
    res.json({
        status: 'Employee created'
    })
};

//edit Employee
employee.editEmployee = async (req, res) => {
    /*const newEmployee = new employeeSchema({
        cod_empleado: req.body.cod_empleado,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        correo: req.body.correo

    });*/

    await employeeSchema.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

    res.json({
        status: 'Employee has Updated'
    })
};

//delete Employee
employee.deleteEmployee = async (req, res) => {
    await employeeSchema.findByIdAndDelete(req.params.id);

    res.json({
        status: 'Employee has deleted'
    })
};


module.exports = employee;