import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../Services/todo.service'
import Todo from '../../Models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos:Array<Todo> = [];
  constructor(private todoServices:TodoService) { }
  
  ngOnInit(): void {
    this.todoServices.getTodos().forEach(obj => {
      this.todos.push(new Todo(obj.id, obj.title, obj.job, obj.completed));
    });
  }

}
