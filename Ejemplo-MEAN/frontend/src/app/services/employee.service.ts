import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly URL_API = 'http://localhost:8000';  
  employees: Employee[];

  constructor(private http: HttpClient) { 
  }

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.URL_API);
  }

  postEmployee(employee: Employee){
    return this.http.post(this.URL_API,employee);
  }

  putEmployee(employee:Employee){
    return this.http.put(this.URL_API + `/${employee._id}`,employee);
  }

  deleteEmployee(_id: String){
    return this.http.delete(this.URL_API +`/${_id}`);
  }

}
