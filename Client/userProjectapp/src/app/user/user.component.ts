import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../class/user';
import { UserBLService } from '../services/user-bl.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private utils: UserBLService, private ar: Router) { }
  isAllComplete: boolean;
  isCompleted: boolean;

  opensection: boolean = false;

  @Input()
  userFromfather: User;

  showList: boolean = false;

  bool: boolean;

  async ngOnInit() {

    let bool = await this.utils.SetColor(this.userFromfather)

    if (bool == false) {
      this.isAllComplete = false
    }
    else {
      this.isAllComplete = true;
    }



  }




  showDetails() {
    this.opensection = true;
  }
  hideDetails() {
    this.opensection = false;
  }
  ShowList() {
    this.showList = !this.showList
  }


  UpdateUser(id: string) {
    sessionStorage["id"] = id;
    this.ar.navigate(["update/" + sessionStorage["id"]])

  }

  async DeleteUser() {
    let data = await this.utils.DeleteUser(this.userFromfather._id)
  }
}
