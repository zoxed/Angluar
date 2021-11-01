import { appError } from './../common/validators/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url ='https://jsonplaceholder.typicode.com/posts'

  constructor(private http : HttpClient) { }


  getPosts(){
    return this.http.get(this.url);
    }

    createPost(post: any)
    {
    return this.http.post(this.url,
                           JSON.parse(JSON.stringify(post)))
    }
    updatePost(post : any)
    {
    return this.http.patch(this.url + '/' + post.id,
                            JSON.parse(JSON.stringify({isRead: true}))) 
    }
    deletePost(id : any)
    {
    return this.http.delete(this.url + '/' + id).
    .catch((error: Response ) => {
      Observable.throw(new appError() ))
    });
    }
  }

