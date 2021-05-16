import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubTaskComponent } from './components/add-sub-task/add-sub-task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShowTaskComponent } from './components/show-task/show-task.component';
import { SubTaskComponent } from './components/sub-task/sub-task.component';

const routes: Routes = [
  {path: "addtask", component: AddTaskComponent},
  {path: "showtask", component: ShowTaskComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "subtask", component: SubTaskComponent},
  {path: "addsubtask", component: AddSubTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
