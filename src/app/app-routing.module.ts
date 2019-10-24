import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoComponent } from './to-do/to-do.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { AuthorizationComponent } from './authorization/authorization.component';


const routes: Routes = [
  {
    path: '',
    component:  LayoutComponent,
    children:[
      {
        path: 'todo',
        component: ToDoComponent
      },
      {
        path: 'auth',
        component: AuthorizationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
