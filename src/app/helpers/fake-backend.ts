import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
 

@Injectable()
export class fakeBackendClass implements HttpInterceptor{ 

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    return next.handle(req);
      }
  intercept1(request: HttpRequest<any>, next: HttpHandler): Observable <HttpEvent<any>> {
    
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA';
    
    if (request.url.endsWith('/api/authenticate') && request.method ==='POST' ) {
      
      let body = JSON.parse(request.body);
      
      if (body.email==='simon.kaabi@gmail.com' && body.password === '1234') {
        
            return of(new HttpResponse({  body: token ,status: 200 }))
          
          } 
          else {

            return of(new HttpResponse({ status: 200 }))
          
        }
      }


    if (request.url.endsWith('/api/orders') && request.method ==='GET' ) {

      if ( request.headers.get('Authorization')==='Bearer' + token ) {
          
            return of(new HttpResponse({ status: 200, body: [1, 2, 3] }))
          
          } else {return of(new HttpResponse({ status: 401 }))}
      } 
      return next.handle(request)
  }
}

