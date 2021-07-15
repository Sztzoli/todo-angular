import { BackendService, Todo } from './../service/backend.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../service/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username : string = 'Bene Zoltán'
  categories: Observable<Category[]> 
  categoryId? : number

  constructor(
    private dataService : BackendService,
    private router : Router
  ) { 
    this.categories = this.dataService.getAllCategories();  
   
  }

  ngOnInit(): void {  
    
  }

  toTodos(categoryId : number) {
    this.categoryId = categoryId;
    console.log(this.categoryId)
  }

  toHome() {
    this.categoryId = undefined
  }

  addCategory(){
    this.router.navigate(['category'])
  }
}
