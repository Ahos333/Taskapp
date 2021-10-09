import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/task';
import { ActivatedRoute } from '@angular/router';
import { TaskDataService } from 'src/app/services/task-data.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  myTask!: Task;
  id!: number;

  constructor(private taskData: TaskDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params["id"]; //data comes in as array; subscribes to parameters 
      this.taskData.getTaskById(this.id).subscribe(t => (this.myTask = t));
    })
  }

}
