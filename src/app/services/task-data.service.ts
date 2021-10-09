import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Task } from 'src/models/task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
  taskUrl = "http://localhost:3000/task";

  getTask = () : Observable <Task[]> => {
    return this.http.get<Task[]>(this.taskUrl) //gets list of tasks; goes to json file and returns it as an array
  }

  getTaskById = (id: number): Observable <Task> => {
    return this.http.get<Task>(this.taskUrl+"/"+id);
  }

  taskDeleted(taskList: Task): Observable<Task> {
    const url = `${this.taskUrl}/${taskList.id}`;
    return this.http.delete<Task>(this.taskUrl);
  }

/*
  addTask = (): Observable<Task> {
    return this.http.post<Task>(this.taskUrl, taskList, httpOptions);
  }

  deleteTask(taskList: Task): Observable<Task> {;
    return this.http.delete<Task>(this.taskUrl, taskList, httpOptions);
  }
*/
  constructor( private http: HttpClient) { }
}
