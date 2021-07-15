import { BackendService } from './../service/backend.service';
import { Component, OnInit } from '@angular/core';
import { SaveCategoryCommand } from '../service/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  saveCategoryCommand : SaveCategoryCommand = new SaveCategoryCommand(""); 

  constructor(
    private dataService : BackendService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  saveCategory(){
    this.dataService.addCategory(101,this.saveCategoryCommand).subscribe(
      data => {
        this.router.navigate(['home'])
      }
    )
  }
}
