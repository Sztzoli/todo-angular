import { BackendService } from './../service/backend.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number = -1;
  todoId : number = -1;
  saveTodoCommand: SaveTodoCommand = new SaveTodoCommand("");
  constructor(
    private dataService: BackendService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todoId = this.route.snapshot.params['todoId'];
    if (this.todoId != -1) {
      this.dataService.getTodo(this.id,this.todoId).subscribe(
        data => {
          this.saveTodoCommand = new SaveTodoCommand(data.description)
        }
      )
    }

  }


  saveTodo() {
    if (this.todoId == -1) {
      this.dataService.postTodo(this.id, this.saveTodoCommand).subscribe(
        data => {
          this.router.navigate(['home'])
        }
      )
    }
    else {
      this.dataService.changeTodoName(this.id,this.todoId,this.saveTodoCommand).subscribe(
        data => {
          this.router.navigate(['home'])
        }
      )
    }
  }
}

export class SaveTodoCommand {
  constructor(
    public description: string
  ) { }
}
