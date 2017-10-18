import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

  tasks = [
    {
      id: 1,
      title: "Angular 4 Demo",
      description: "Demonstrate routing to MEAN students at the dojo",
      date: "2017-10-18",
      time: "13:00",
      status: "completed"
    }
  ]

  constructor() { }

  getTasks(){
    return this.tasks;
  }

  getTask(index){
    for(let task of this.tasks){
      if(task.id == index){
        return task;
      }
    }
  }

  deleteTask(index){
    for(let i=0; i<this.tasks.length; i++){
      if(this.tasks[i].id == index){
        this.tasks.splice(i, 1);
      }
    }
  }

  addTask(task){
    // need to set an id as well...
    if(this.tasks.length > 0){
      task.id = this.tasks[this.tasks.length-1].id + 1;
    } else {
      task.id = 1;
    }
    task.status = "pending"
    this.tasks.push(task);
  }

  updateTask(task){
    for(let i=0; i<this.tasks.length; i++){
      if(this.tasks[i].id == task.id){
        this.tasks[i] = task;
      }
    }
  }

}
