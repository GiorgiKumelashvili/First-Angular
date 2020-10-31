import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  
  getTodos():{id:Number,title:String,job:String,completed:Boolean}[]{
    return [
      {
        id: 1,
        title: 'toto1',
        job:'do 1',
        completed: false
      },
      {
        id: 2,
        title: 'toto2',
        job:'do 2',
        completed: false
      },
      {
        id: 3,
        title: 'toto3',
        job:'do 3',
        completed: false
      },
    ];
  }
}
