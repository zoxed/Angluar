import { PostService } from './../services/post.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit  {

  posts: any = [];

  constructor(public service: PostService) {}


  ngOnInit(): void {
    this.service.getPosts()
    .subscribe(response => {this.posts = JSON.parse(JSON.stringify(response)); 
    }, error => {
        alert('An unexpected error occured.')
        console.log(error)
    });
    
  }

  createPost(input: HTMLInputElement)
  {
    let post: any = {title: input.value};
    input.value = ''
    
    this.service.createPost(post)
    .subscribe(response =>
      {
        post.id = JSON.stringify(response);
        this.posts.splice(0,0,post)
        console.log(JSON.stringify(response))
      }, (error: Response) => {
        if (error.status === 400) {
        // this.form.setErrors(error.json());
        } else {
          alert('An unexpected error occured.')
          console.log(error)
        }
      })
  
  }
  updatePost(post: any){
  this.service.updatePost(post)
  .subscribe(response =>
    {
      console.log(JSON.stringify(response))
    }, error => {
      alert('An unexpected error occured.')
      console.log(error)
  })

  }
  deletePost(post: any)
  {
    this.service.deletePost(post.id)
    .subscribe(response =>
        {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1); 
         }, (error: Response) => {
           if ( error.status === 400 ) {
            alert('ThisPostHasAlreadyBeenDeleted')            
           } else {
             alert('An unexpected error occured');
             console.log(error)
           }
         })
  }
}
