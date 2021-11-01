import { BadInput } from './../common/validators/bad-input';
import { notFoundError } from './../common/validators/not-found-error';
import { appError } from './../common/validators/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit  {

  posts:any = [];

  constructor(public service: PostService) {}


  ngOnInit(): void {
    this.service.getPosts()
    .subscribe((response : any) => {this.posts =JSON.parse(JSON.stringify(response )); 
    });
    
  }

  createPost(input: HTMLInputElement)
  {
    let post: any = {title: input.value};
    input.value = ''
    
    this.service.createPost(post)
    .subscribe((response : any)=>
      {
        post.id = JSON.parse(JSON.stringify(response ));
        this.posts.splice(0,0,post)
        console.log(JSON.parse(JSON.stringify(response )))
      },
        (error: appError) => {
          if ( error instanceof BadInput ) 
          {
        // this.form.setErrors(error.originalError); 
          }
          else 

          throw error;
        })
    
  }
  updatePost(post: any){
  this.service.updatePost(post)
  .subscribe((response : any)=>
    {
     console.log(JSON.parse(JSON.stringify(response )))
    })

  }
  deletePost(post: any) 
  {
    this.service.deletePost(5)
    .subscribe( 
      (response : any) => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1); 
         }, 
            (error: appError) => {
            if ( error instanceof notFoundError ) 
              alert('ThisPostHasAlreadyBeenDeleted')
            else 
            throw error;
          })
    }
}
