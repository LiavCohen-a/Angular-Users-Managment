import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Task } from './class/task';
import { User } from './class/user';
import { UserBLService } from './services/user-bl.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userProjectapp';
  sub1: Subscription;
  constructor(private userUtils: UserBLService, private ar: Router) {

  }
  users: User[];

  ngOnInit() {
    this.sub1 = this.userUtils.GetAllUsers().subscribe(data => this.users = data)

  }
  taskList: Task[];

  async Search(name: string) {
    let data = await this.userUtils.GetUserByName(name)
    this.users = data;
  }

  set() {
    this.users.forEach(x => {
      this.userUtils.SetColor(x)
    })
  }

  ngOnDestroy() {
    this.sub1.unsubscribe()
  }


}
