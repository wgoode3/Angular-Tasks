import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TaskService } from './../task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  task = {};

  constructor(private _route: ActivatedRoute, private _taskService: TaskService) {
    this._route.paramMap.subscribe( params => {
      this.task = this._taskService.getTask(params.get("id"));
    });
  }

  ngOnInit() {
  }

}
