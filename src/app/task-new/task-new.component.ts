import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  newTask = {
    title: '',
    description: '',
    time: '',
    date: ''
  };

  constructor(private _taskService: TaskService, private _router: Router) { }

  ngOnInit() {
  }

  addTask(){
    this._taskService.addTask(this.newTask);
    this.newTask = {
      title: '',
      description: '',
      time: '',
      date: ''
    };
    this._router.navigate(['/']);
  }

}