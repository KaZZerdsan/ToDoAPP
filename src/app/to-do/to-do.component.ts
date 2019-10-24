import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoElement } from '../core/interfaces/todo-element';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit, OnDestroy {
  toDo: string;
  toDoList: TodoElement[] = [];
  filteredList: TodoElement[] = [];
  lastID: number;
  bufferToDo: string = '';
  filter: string = 'All';

  addToDo(quest: string) {
    if(quest !== '') {
      this.toDoList.push({
        name: quest,
        completed: false,
        edit: false,
        id: this.lastID,
      });
      this.toDo = '';
      this.lastID++;
    }
    this.listFilter(this.filter);
    localStorage.setItem('key', JSON.stringify(this.toDoList));
  }

  removeToDo(todo: TodoElement) {
    this.toDoList = this.toDoList.filter(word => word.id !== todo.id);
    this.filteredList = this.filteredList.filter(word => word.id !== todo.id);
    localStorage.setItem('key', JSON.stringify(this.toDoList));
    console.log (todo.id);
  }

  toDoCount() {
    return this.toDoList.filter(todo => todo.completed === false).length
  }

  toggleComplete(todo: TodoElement) {
    todo.completed = !todo.completed;
  }

  editEvent(todo: TodoElement) {
    this.bufferToDo = todo.name;
    todo.edit = true;
  }

  editEnd(todo: TodoElement) {
    if (todo.name === '') {
      todo.name = this.bufferToDo;
    }
    todo.edit = false;
  }

  cancelEdit(todo: TodoElement) {
    todo.name = this.bufferToDo;
    todo.edit = false;
  }

  listFilter(state: string){
    this.filter = state;
    if (state === 'All'){
      this.filteredList = this.toDoList;
    }
    if (state === 'Completed'){
      this.filteredList = this.toDoList.filter(todo => todo.completed);
    }
    if (state === 'Uncompleted'){
      this.filteredList = this.toDoList.filter(todo => !todo.completed);
    }
  }

  constructor() { }

  ngOnInit() {
    this.toDoList = JSON.parse(localStorage.getItem('key'));
    this.listFilter(this.filter);
    const arrLen = this.toDoList.length - 1;
    if (arrLen === -1){
      this.lastID = 1;
    }
    else {this.lastID = this.toDoList[arrLen].id + 1;}
  }
  ngOnDestroy() {
  }

}