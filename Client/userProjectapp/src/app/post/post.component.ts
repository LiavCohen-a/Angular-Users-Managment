import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../class/post';
import { UserBLService } from '../services/user-bl.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {



  @Input()
  posts: Post[];

  @Input()
  userID: string;


  isAllComplete: boolean = true;
  div: boolean;

  formdiv: boolean = false;

  ngOnInit(): void {

  }


  addpost: Post = new Post("", "")

  constructor(private utils: UserBLService) { }


  addDiv() {
    this.formdiv = !this.formdiv
    this.div = !this.div
  }
  back() {
    this.formdiv = !this.formdiv
    this.div = !this.div
  }

  
  AddPost() {
     this.utils.addPostToUser(this.userID, this.addpost)
  }


}
