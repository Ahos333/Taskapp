import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/models/task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @Input() task: Task;
  @Output() oneditTask: EventEmitter<Task> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onEdit(task){
    this.oneditTask.emit(task);
  }
  

}

