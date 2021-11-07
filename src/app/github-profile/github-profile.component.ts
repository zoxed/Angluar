import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    //if you dont want to work an observable do this 
    // this.route.paramMap['id']
    this.route.paramMap
    .subscribe(params =>{
      //the get methode returns a string if ou want to switch it to int 
      //you have to add the + signe and store it in a variable
       let id =  +params.get('id');
       console.log(id)
      })
  }

}
