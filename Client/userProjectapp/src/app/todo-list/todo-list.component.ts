import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Task } from '../class/task';
import { User } from '../class/user';
import { UserBLService } from '../services/user-bl.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  task: Task[];

  @Input()
  userID: string;

  isAllComplete: boolean = true;

  div: boolean;

  formdiv: boolean = false;


  addtask: Task = new Task("", null)
  constructor(private utils: UserBLService, private router: Router) { }

  async ngOnInit() {

    if (this.task[0]) {
      this.isAllComplete = this.task[0].completed
    }
    else {
      this.isAllComplete = false
    }

  }

  addDiv() {
    this.formdiv = !this.formdiv
    this.div = !this.div
  }
  back() {
    this.formdiv = !this.formdiv
    this.div = !this.div
  }

  AddTask() {
    this.addtask.completed = false;
    this.utils.addTaskToUser(this.userID, this.addtask)
  }

  MarkCompleted(taskName: string) {
    this.utils.UpdateTask(this.userID, taskName)
  }
}
