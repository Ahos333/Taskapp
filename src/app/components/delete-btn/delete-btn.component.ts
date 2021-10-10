import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/models/task';
@Component({
  selector: 'app-delete-btn',
  templateUrl: './delete-btn.component.html',
  styleUrls: ['./delete-btn.component.css']
})
export class DeleteBtnComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task) {
    this.onDeleteTask.emit(task);
  }

}
