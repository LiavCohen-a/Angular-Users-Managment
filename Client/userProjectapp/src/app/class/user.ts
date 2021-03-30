import { Post } from "./post";
import { Task } from "./task";

export class User {
    constructor(
        public _id: string,
        public name: String,
        public email: String,
        public city: String,
        public street: String,
        public zipcode: Number,
        public tasks: Task[],
        public posts: Post[]
    ) {

    }
}
