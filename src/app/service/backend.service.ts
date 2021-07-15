
import { DoneTodoCommand } from './../todos/todos.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SaveTodoCommand } from '../todo/todo.component';

export const BACKEND_URL="http://localhost:8080/api/todos"

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private http: HttpClient
  ) { }

   

  

  getAllCategories() {
    return this.http.get<Category[]>(`${BACKEND_URL}/category`)
  }

  addCategory(userId: number, command : SaveCategoryCommand ) {
    return this.http.post(`${BACKEND_URL}/category`,command);
  }

  getAllTodos(categoryId?: number) {
    return this.http.get<Todo[]>(`${BACKEND_URL}/category/${categoryId}/todos`)
  }

  getTodo(categoryId: number,id: number) {
    return this.http.get<Todo>(`${BACKEND_URL}/category/${categoryId}/todos/${id}`);
  }

  postTodo(categoryId: number, saveTodo: SaveTodoCommand) {  
    return this.http.post(`${BACKEND_URL}/category/${categoryId}`, saveTodo);
  }

  changeStatus(categoryId: number,todoId: number, updateTodoStatus : DoneTodoCommand){
    return this.http.put(`${BACKEND_URL}/category/${categoryId}/todos/${todoId}/change-done`,updateTodoStatus);
  }

  changeTodoName(categoryId: number,todoId: number, updateTodoStatus : SaveTodoCommand){
    return this.http.put(`${BACKEND_URL}/category/${categoryId}/todos/${todoId}/change-name`,updateTodoStatus);
  }


  deleteTodo(categoryId: number,todoId : number) {
    return this.http.delete(`${BACKEND_URL}/category/${categoryId}/todos/${todoId}`);
  }

}

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
  ) { }
}

export class Category {
  constructor(
    public id: number,   
    public description: string,    
  ) { }
}

export class SaveCategoryCommand {
  constructor(
    public description : string
  ) {}
}

export class UpdateTodoCommand {
  constructor(
    public description: string
  ) {}
}
