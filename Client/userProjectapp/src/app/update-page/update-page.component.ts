import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../class/user';
import { UserBLService } from '../services/user-bl.service';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent implements OnInit {

  constructor(private ar: Router, private ars: ActivatedRoute, private utils: UserBLService) { }

  newUserData: User = new User("", "", "", "", "", null, [], []);
  sub1: Subscription;
  userid: string;

  async ngOnInit() {

    this.sub1 = this.ars.params.subscribe(data => this.userid = data["id"])
    this.utils.GetUserByID(this.userid)
      .subscribe(x => this.newUserData = x)

  }

  async UpdateUser(isValid: boolean) {
    if (isValid) {

      this.utils.UpdateUser(sessionStorage["id"], this.newUserData)
    }

  }


}
