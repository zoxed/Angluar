import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route:Router) { }

  login(credentials:any){
   
    const headers = new HttpHeaders().set('Content-Type','application/json');
   
    console.log(JSON.stringify(credentials)); 
    
    return this.http.post('/api/authenticate',JSON.stringify(credentials),{headers:headers})
    .pipe(map(
      (response: any)=>{
        
        let result = response.json();
        console.log(response.json());
        
        if(result && result.token){
          localStorage.setItem('token',result.token);
          return true;
        }
        return false;
      }))
      // .subscribe()
    }
  
  signup(credentials:any){
    
    // console.log(JSON.stringify(credentials));

    const headers = new HttpHeaders().set('Content-Type','application/json');
    
    return this.http.post('api/signup',JSON.stringify(credentials),{headers:headers})
    .pipe(map((response: any)=>{
      let result = response;
      console.log(result);
      if(result.message =="User Created"){
        return true;
    }
        return false;

    }));
  }

  logout(){
    
    localStorage.removeItem('token');
    this.route.navigate(['/login']);

  }
  
  isLoggedIn(){
    
    let jhelper= new JwtHelperService();

    let token=localStorage.getItem('token');
    if(!token)
      return false;
    let isExpired=jhelper.isTokenExpired(token);
      return !isExpired;
  }
  
  get currentUser(){
    
    let token=localStorage.getItem('token');
    
    if(!token)
      return null;
    let jhelper= new JwtHelperService();
      return jhelper.decodeToken(token);

  }
}