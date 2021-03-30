import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../class/post';
import { Task } from '../class/task';
import { User } from '../class/user';
import { UserBLService } from '../services/user-bl.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  post: Post[] = []
  task: Task[] = []
  user: User = new User("", "", "", "", "", null, this.task, this.post)

  constructor(private utils: UserBLService, private ar: Router) { }

  ngOnInit(): void {
  }

  AddUser(isValid: boolean) {
    if (isValid) {
      this.utils.AddUser(this.user)

      this.ar.navigate([""])
    }
  }

}
