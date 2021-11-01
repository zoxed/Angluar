import { BadInput } from './../common/validators/bad-input';
import { appError } from './../common/validators/app-error';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { notFoundError } from '../common/validators/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url ='https://jsonplaceholder.typicode.com/posts'

  constructor(private http : HttpClient) { }


    getPosts()
    {
      return this.http.get(this.url);
    }

    createPost(post: any)
    {
    return this.http.post(this.url,
                          JSON.parse(JSON.stringify(post)))
                          .pipe(catchError(this.handleError))
    }
    updatePost(post: any)
    {
      return this.http.patch(this.url + '/' + post.id,
                              JSON.parse(JSON.stringify({isRead: true}))) 
                              .pipe(catchError(this.handleError))
                           
    }
   
   
    deletePost(id : any){
        return this.http.delete(this.url + '/' + id)
        .pipe(catchError(this.handleError))}

    private handleError( error: Response){
      if (error.status === 400) 
        return throwError(new BadInput(error.json()))
      if (error.status === 404) 
        return throwError(new notFoundError()); 
        return throwError(new appError(error));
      
}

  }

