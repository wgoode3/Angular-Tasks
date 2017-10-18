import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private _taskService: TaskService) { }

  tasks = []

  ngOnInit() {
    this.tasks = this._taskService.getTasks();
  }

  delete(id){
    console.log(id);
    this._taskService.deleteTask(id);
  }

}
