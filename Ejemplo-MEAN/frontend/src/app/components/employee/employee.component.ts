import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { NgForm } from '@angular/forms';

declare var M: any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  selectedEmployee : Employee;
  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
    this.selectedEmployee = new Employee();
  }

  addEmployee(form: NgForm) {
    if (form.value._id) {
      console.log('ya contiene un id');
      this.service.putEmployee(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: 'empleado editado' });
        this.getEmployees();        
      })
    } else {
      this.service.postEmployee(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: 'se a agregado un empleado' });
        this.getEmployees();
      });
    }
  }
  editEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }
  getEmployees() {
    this.service.getEmployees().subscribe(res => {
      this.employees = res;
      console.log(this.employees);
    })
  }
  deleteEmployee(_id: string) {
    if (confirm('esta seguro de eliminar al empleado?')) {
      this.service.deleteEmployee(_id).subscribe(res => {
        M.toast({ html: 'Empleado eliminado.' });
        this.getEmployees();
      });
    } else {

    }
  }

  resetForm(form?: NgForm) {
    if(form){
      form.reset();
      this.selectedEmployee = new Employee();
    }
  }
}
