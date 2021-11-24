import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { User } from '../_models/user';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';
 


const users: User[] = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];


@Injectable()
export class fakeBackendInterceptor implements HttpInterceptor{ 

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   console.log(req);
  //   return next.handle(req);
  //   }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA';

     // wrap in delayed observable to simulate server api call
     return of(null)
     .pipe(mergeMap(handleRoute))
     .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
     .pipe(delay(500))
     .pipe(dematerialize());
     
  function handleRoute(){
    switch (true) {
      case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
      case url.endsWith('/users') && method === 'GET':
          return getUsers();
      default:
          // pass through any requests not handled above
          return next.handle(request);
      }    
  }
  function authenticate() {
    const { username, password } = body;
    const user = users.find(x => x.username === username && x.password === password);
    if (!user) return error('Username or password is incorrect');
    return ok({
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName
    })
}

function getUsers() {
    if (!isLoggedIn()) return unauthorized();
    return ok(users);
}
  // helper functions

  function ok(body: any) {
    return of(new HttpResponse({ status: 200, body }))
}

function error(message: any) {
    return throwError({ error: { message } });
}

function unauthorized() {
    return throwError({ status: 401, error: { message: 'Unauthorised' } });
}

function isLoggedIn() {
    return headers.get('Authorization') === `Basic ${window.btoa('test:test')}`;
}
}
}

export let fakeBackendProvider = {
// use fake backend in place of Http service for backend-less development
provide: HTTP_INTERCEPTORS,
useClass: fakeBackendInterceptor,
multi: true
};



  //   if (request.url.endsWith('/api/authenticate') && request.method ==='POST' ) {
      
  //     let body = JSON.parse(request.body);
      
  //     if (body.email==='simon.kaabi@gmail.com' && body.password === '1234') {
        
  //           return of(new HttpResponse({  body: token ,status: 200 }))
          
  //         } 
  //         else {

  //           return of(new HttpResponse({ status: 200 }))
          
  //       }
  //     }


  //   if (request.url.endsWith('/api/orders') && request.method ==='GET' ) {

  //     if ( request.headers.get('Authorization')==='Bearer' + token ) {
          
  //           return of(new HttpResponse({ status: 200, body: [1, 2, 3] }))
          
  //         } else {return of(new HttpResponse({ status: 401 }))}
  //     } 
  //     return next.handle(request)
  //   }
  // }
  
