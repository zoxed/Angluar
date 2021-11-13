import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {}
      //if you dont want to work an observable do this 
    // -----> this.route.paramMap['id']
    
    //if you are hundred % sure that the client will go to another page and comeback you use snapchat observable 
    // let id =  this.route.snapshot.paramMap.get('id');
    // console.log(id)
  //   this.route.paramMap
  //   .subscribe(params =>{
  //     //the get methode returns a string if ou want to switch it to int 
  //     //you have to add the + signe and store it in a variable
  //     //  let id = +params.get('id')
  //      console.log(params.get('id'));
  //     })
  // }


  submit(){
    this.router.navigate(['/followers'],
    { queryParams: { page: 1, order: 'newest' }}
          )}


}
