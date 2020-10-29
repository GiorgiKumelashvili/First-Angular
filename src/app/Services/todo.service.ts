import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos: [
    {
      id        : 1,
      title     : 'toto1',
      completed : false
    },
    {
      id        : 2,
      title     : 'toto2',
      completed : false
    },
    {
      id        : 3,
      title     : 'toto3',
      completed : false
    },
  ]
}
