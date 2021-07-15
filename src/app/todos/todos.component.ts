import { HttpClient } from '@angular/common/http';
import { BackendService } from './../service/backend.service';
import { Observable } from 'rxjs';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../service/backend.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnChanges {
  
  @Input()  id: number = -1;
  todos : Observable<Todo[]> | undefined 
  constructor(   
    private dataService : BackendService,
    private router : Router,  
  ) { 
    
  }
  ngOnChanges(): void {
    console.log(this.id)
    this.todos = this.dataService.getAllTodos(this.id)
    console.log(this.todos)
  }

  addTodo(){    
    console.log(this.id + "addtod")    
    this.router.navigate(['todo',this.id,-1]);
  }
  changeTodo(todoId: number) {
    this.router.navigate(['todo',this.id,todoId]);
  }
    

  changeStatus(todo : Todo){
    let command : DoneTodoCommand = new DoneTodoCommand(!todo.done);    
    console.log(command.done)
    this.dataService.changeStatus(this.id,todo.id, command).subscribe(
      data => {
        this.ngOnChanges()
      }
    )
  }

  deleteTodo(id : number){
    this.dataService.deleteTodo(this.id,id).subscribe(
      data => {
        this.ngOnChanges()
        console.log("delete")
      }
    )
    this.todos = this.dataService.getAllTodos(this.id)
  }

}

export class DoneTodoCommand {
  constructor(
    public done : boolean
  ){}
}
