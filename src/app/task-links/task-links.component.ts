import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-task-links',
  templateUrl: './task-links.component.html',
  styleUrls: ['./task-links.component.css']
})
export class TaskLinksComponent implements OnInit {

  tasklist = true;
  tasknew = false;

  constructor(private _router:Router) {
    _router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.tasklist = event.url === "/";
        this.tasknew = event.url === "/new";
      }
    });
  }

  ngOnInit() {
  }

}
