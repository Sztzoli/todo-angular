import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [ 
  {path: '', component: HomeComponent},
 {path: 'home', component: HomeComponent },

  {path: 'todo/:id/:todoId', component: TodoComponent},
  {path: 'category', component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
