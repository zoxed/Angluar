import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from '../../../_services/services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers:any = [];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() 
  {

    //map operator to convert a paramMap[] object
    // into an observable of any 
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(
      switchMap(combined =>{
        let id =  combined[0].get('id')
        let page = combined[1].get('page')


        return this.service.getAll()
      }))
    .subscribe( followers => this.followers = followers)
  }
   


// this.route.paramMap
//   .subscribe(params =>{

//   });

// this.route.queryParamMap
//   .subscribe(params =>{

//   });
    }