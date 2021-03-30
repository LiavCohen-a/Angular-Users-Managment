import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


const router: Routes = [{ path: "", component: HomepageComponent },
{ path: "add", component: AddUserComponent },
{ path: "todo", component: TodoListComponent },
{ path: "update/:id", component: UpdatePageComponent }]


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PostComponent } from './post/post.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UpdatePageComponent } from './update-page/update-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TodoListComponent,
    PostComponent,
    AddUserComponent,
    HomepageComponent,
    UpdatePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(router),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
