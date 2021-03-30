import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Task } from '../class/task';
import { User } from '../class/user';
import { UserBLService } from '../services/user-bl.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private userUtils: UserBLService, private ar: Router) {

  }
  users: User[];
  sub1: Subscription;

  ngOnInit() {
    this.sub1 = this.userUtils.GetAllUsers().subscribe(data => this.users = data)
  }

  ngOnDestroy() {
    this.sub1.unsubscribe()
  }

  taskList: Task[];


  async Search(name: string) {
    let data = await this.userUtils.GetUserByName(name)
    this.users = data;
  }

  AddUser() {

    this.ar.navigate(['add'])

  }
}
