import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/models/task';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  id: number;
  name: string;
  constructor() { }
  task: Task[]
  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.name && !this.id) {
      alert('Please enter a task and its id!');
      return;
    }

    const newTask = {
      id: this.id,
      name: this.name
    };

    this.onAddTask.emit(newTask);
    this.id = 0;
    this.name = '';
  }
}

