import { Component, OnInit } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { TodoElement } from '../interfaces/todo-element';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  toDo: string;
  toDoList: TodoElement[] = [];
  lastID: number = 1;
  toDoBefore: string = '';
  filter: string = 'All';

  addToDo(quest: string) {
    if(quest !== '') {
      this.toDoList.push({
        name: quest,
        completed: false,
        edit: false,
        id: this.lastID,
      })
      this.lastID++;
      this.toDo = '';
    }
  }

  removeToDo(i: number) {
    console.log(i);
    this.toDoList = this.toDoList.filter(todo => todo.id !== i)
  }

  toDoCount() {
    return this.toDoList.filter(todo => todo.completed === false).length
  }

  toggleComplete(todo: TodoElement) {
    todo.completed = !todo.completed;
  }

  editEvent(todo: TodoElement) {
    this.toDoBefore = todo.name;
    todo.edit = true;
  }

  editEnd(todo: TodoElement) {
    if (todo.name === '') {
      todo.name = this.toDoBefore;
    }
    todo.edit = false;
  }

  cancelEdit(todo: TodoElement) {
    todo.name = this.toDoBefore;
    todo.edit = false;
  }

  listFilter() {
    if (this.filter === 'All') {
      return this.toDoList;
    }
    else if (this.filter === 'Completed') {
      return this.toDoList.filter(todo => todo.completed === true);
    }
    else if (this.filter === 'Not completed') {
      return this.toDoList.filter(todo => todo.completed === false)
    }
  }

  constructor() { }

  ngOnInit() {
  
  }

}