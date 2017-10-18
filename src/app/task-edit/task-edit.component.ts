import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { TaskService } from './../task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  task = {};

  constructor(private _route: ActivatedRoute, private _taskService: TaskService, private _router: Router) {
    this._route.paramMap.subscribe( params => {
      this.task = this._taskService.getTask(params.get("id"));
    });
  }

  ngOnInit() {
  }

  updateTask(){
    console.log(this.task);
    this._taskService.updateTask(this.task);
    this._router.navigate(['/']);
  }

}
