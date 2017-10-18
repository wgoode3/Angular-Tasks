import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TaskListComponent },
  { path: 'new', pathMatch: 'full', component: TaskNewComponent },
  { path: 'task/:id', pathMatch: 'full', component: TaskDetailsComponent },
  { path: 'task/:id/edit', pathMatch: 'full', component: TaskEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
