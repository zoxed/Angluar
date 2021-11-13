
import { Component, OnInit } from '@angular/core';
import { appError } from 'src/app/_common/validators/app-error';
import { BadInput } from 'src/app/_common/validators/bad-input';
import { PostService } from 'src/app/_services/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit  {
  
  posts:any = [];
  
  constructor(public service: PostService) {}
  

  ngOnInit()
  {
    this.service.getAll()
    .subscribe( posts => this.posts = posts);     
  }

  createPost(input: HTMLInputElement)
  {
    let post: any = {title: input.value};
    this.posts.splice(0,0,post);
    
    input.value = ''
    
    this.service.create(post)
    .subscribe(
      newPost =>{post.id = newPost.id;},
      
      (error: appError) => {
        this.posts.splice(0,1);
        
        
        if ( error instanceof BadInput ) 
        {
          // this.form.setErrors(error.originalError); 
        }
        else 
        
        throw error;
      })
        
  }
  updatePost(post: any)
  {
    this.service.update(post)
    .subscribe((updatedPost : any)=>
    {
      console.log(updatedPost )
    })
  }
  deletePost(post: any) 
  {
    this.service.delete(post.id);;
  }
}
