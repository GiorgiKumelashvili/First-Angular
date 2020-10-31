import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import Todo from '../../Models/todo';

@Component({
  selector: 'app-todo-item',
  template: `
    <div>
      <div class="">
        <h3>{{todoMain.$title}}</h3>
      </div>
      <div class="">
        <p>Todo : {{todoMain.$job}}</p>
      </div>
      <div class="d-flex j-c-c">
        <p [ngClass]="{'todo_done': todoMain.$completed}">completed</p>
        <input
          type  ="checkbox"
          (change)="completed()"
          id    ="todoId-{{todoMain.$id}}"
          name  ="todoName-{{todoMain.$id}}"
          value ="todoVal-{{todoMain.$id}}"
        >
      </div>
    </div>
  `
})
export class TodoItemComponent implements OnInit {
  @Input() todoObj:Todo;
  todoMain:Todo;
  constructor() { }

  ngOnInit(): void {
    this.todoMain = JSON.parse(JSON.stringify(this.todoObj));
    console.log(this.todoMain)
  }

  completed():void{
    this.todoMain.$completed = !this.todoMain.$completed;
  }
}
