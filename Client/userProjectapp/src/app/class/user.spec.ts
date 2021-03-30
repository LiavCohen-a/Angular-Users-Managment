import { TmplAstElement } from '@angular/compiler';
import { Post } from './post';
import { Task } from './task';
import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    let post : Post[];
    let task : Task[];
    expect(new User(null , "","","","",null,task,post)).toBeTruthy();
  });
});
