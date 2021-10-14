import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TaskDataService } from 'src/app/services/task-data.service';
import { Task } from 'src/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskUrl = "http://localhost:3000/task";
  taskList: Task[] = [];

  model: Task = new Task();
  task: Task;
  constructor(private taskData: TaskDataService, private http: HttpClient) { 
    this.taskData.getTask().subscribe(t => (this.taskList = t));
  }

  addTask(task: Task) {
    this.taskData.addTask(task).subscribe((task) => (this.taskList.push(task)));
  }
/*
  deleteTask(taskId) {
    let taskIndex = 0;
    
    for(let taskList of this.taskList) {
      if(taskList.id === taskId) {
        this.taskList.splice(taskIndex, 1);
        break;
      }
      taskIndex++;
    }
  }
*/

  deleteTask(task: Task)  {
    this.taskData
      .deleteTask(task)
      .subscribe(
        () => (this.taskList = this.taskList.filter((t) => t.id !== task.id))
      );
  }
  


  ngOnInit() {

  }

  
  /*

  deleteTask(task: Task) {
        this.taskData.deleteTask(task).subscribe((taskId) => (this.taskList = this.taskList.filter((t) => t.id !== task.id)));
        //this.taskList.splice(taskIndex, 1);
    
  }

  this.taskData.deleteTask(task).subscribe(() => (this.taskList = this.taskList.filter((t) => t.id !== task.id)));
  this.taskData.deleteTask(task).subscribe((taskId) => (this.taskList.splice(taskIndex, 1)));
  */
  /*
  onTaskDeleted(taskId) {
    this.taskData.deleteTask(taskId).subscribe((taskId) => (this.taskList.splice(taskIndex, 1)));

    let taskIndex = 0;
    
    for(let taskList of this.taskList) {
      if(taskList.id === taskId) {
        
        //this.taskList.splice(taskIndex, 1);
        break;
      }
      taskIndex++;
    }
  }
*/


  /*
  deleteTask(task: Task) {
    this.taskData
    .taskDeleted(task)
    .subscribe(
      () => (this.taskList = this.taskList.filter((t) => t.id !==
      task.id))
    )};
  */
  

}
  




