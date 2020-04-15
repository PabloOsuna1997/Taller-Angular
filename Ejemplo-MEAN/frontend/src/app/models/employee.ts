export class Employee {
    constructor(_id = '',cod_empleado = '',nombre = '', apellido ='',telefono='',correo=''){
        this._id = _id;
        this.cod_empleado = cod_empleado;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
    }

    _id: string;
    cod_empleado: string;
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
}
