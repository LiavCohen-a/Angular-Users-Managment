import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { title } from 'process';
import { Subscription } from 'rxjs';
import { Post } from '../class/post';
import { Task } from '../class/task';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserBLService {

  constructor(private http: HttpClient, private ar: Router) { }
  sub : Subscription
  user: User;

  GetUserByID(id: string) {
    return this.http.get<User>("http://localhost:5000/api/users/" + id)
  }
  async SetColor(user: User) {
    let f = []

    return new Promise((resolve, reject) => {
      user.tasks.forEach(x => {
        if (x.completed == false) {
          f.push(x.completed)
        }
      })
      if (f != null) {
        resolve(f)
      }
      else {
        resolve(!f)
      }
    })


  }
  GetAllUsers() {
    return this.http.get<User[]>("http://localhost:5000/api/users")
  }

  async GetUserByName(name: string) {

    let users = await this.http.get<User[]>("http://localhost:5000/api/users").toPromise()

    let newdata = users.filter(x => x.name.includes(name) || x.email.includes(name))

    return newdata

  }

  result: string;
  AddUser(user: User) {

    this.http.post("http://localhost:5000/api/users", user).subscribe(data => alert("Is Created !"))

  }

  counter: number;

  addTaskToUser(id: string, task: Task) {
    let tasks: Task[] = []

    this.GetUserByID(id).subscribe(data => {
      this.user = data;
 
      this.user.tasks.forEach(x => tasks.push(x))
      tasks.push(task)
      this.user = new User(id,
        this.user.name,
        this.user.email,
        this.user.city,
        this.user.street,
        this.user.zipcode
        , tasks,
        this.user.posts)
      this.http.put("http://localhost:5000/api/users/" + id, this.user).subscribe(data => {
        alert("Task Was Add !")
        location.reload();
      })
    })

  }

  UpdateTask(id: string, nametask: string) {

    this.GetUserByID(id).subscribe(data => {
      this.user = data;

      let task1 = this.user.tasks.find(x => x.title.startsWith(nametask))
      task1.completed = !task1.completed;
      this.user = new User(id,
        this.user.name,
        this.user.email,
        this.user.city,
        this.user.street,
        this.user.zipcode
        , this.user.tasks,
        this.user.posts)


      this.http.put("http://localhost:5000/api/users/" + id, this.user)
        .subscribe(data => {
          alert("Task Completed !");
          location.reload();
        })
    })
  }
  addPostToUser(id: string, post: Post) {
    let psots: Post[] = []
    this.GetUserByID(id).subscribe(data => {
      this.user = data

      this.user.posts.forEach(x => psots.push(x))

      psots.push(post)

      this.user = new User(id,
        this.user.name,
        this.user.email,
        this.user.city,
        this.user.street,
        this.user.zipcode
        , this.user.tasks,
        psots)

      this.http.put("http://localhost:5000/api/users/" + id, this.user)
        .subscribe(data => {
          alert("Post Was Add !")
          location.reload();
        })

    })
  }

  newuserdata: User;
  UpdateUser(id: string, newuserdata: User) {

    this.GetUserByID(id).subscribe(data => {
      this.newuserdata = data;
      this.user = new User(id,
        newuserdata.name,
        newuserdata.email,
        newuserdata.city,
        newuserdata.street,
        newuserdata.zipcode
        , newuserdata.tasks,
        newuserdata.posts)

      this.http.put("http://localhost:5000/api/users/" + id, this.user)
        .subscribe(data => alert("User Is Updated !"))
      this.ar.navigate([""]).then(x => { alert("User Updated !"); location.reload() })

    })


  }
  DeleteUser(id: string) {
    this.http.delete("http://localhost:5000/api/users/" + id).subscribe(data => {
      alert(data)
      location.reload();
    })
  }






}