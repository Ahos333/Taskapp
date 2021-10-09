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
  constructor(private taskData: TaskDataService, private http: HttpClient) { 
    this.taskData.getTask().subscribe(t => (this.taskList = t));
    //this.taskData.addTask(taskList).subscribe(t => (this.taskList = t));
    //this.taskData.deleteTask(taskList).subscribe(t => (this.taskList = t));
  }

  onTaskAdd() {
    
  }

  onTaskDeleted(taskId) {
    let taskIndex = 0;
    for(let taskList of this.taskList) {
      if(taskList.id === taskId) {
        this.taskList.splice(taskIndex, 1);
        break;
      }
      taskIndex++;
    }
  }

/*
  onDelete(taskList: Task[]) {
    this.taskData
      .deleteTask(this.task)
      .subscribe(
        (t) => (this.taskList = this.taskList.filter((t) => t.id !== t.id))
      );
  }

  onAdd(task: Task) {
    this.taskData
      .addTask(task)
      .subscribe((task) => this.taskList.push(task));
  }
*/



  /*

    public items : string[] = []

  public newTask!: string;

  public addTask(newTask: any) {
    if (this.newTask == '') {
    }
    else {
        this.items.push(this.newTask);
        this.newTask = '';
    }
  }
  public index;
  public deleteTask(index: any) {
    this.items.splice(index, 1);
  }



  onDelete() {
    this.taskDeleted.emit(this.taskList.id);
  }
  */

  ngOnInit(): void {
  }

}
