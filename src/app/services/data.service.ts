import { BadInput } from './../common/validators/bad-input';
import { appError } from './../common/validators/app-error';
import { HttpClient } from '@angular/common/http';
import {Observable, observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { notFoundError } from '../common/validators/not-found-error';


export class DataService {

  constructor(private url: string, private http : HttpClient) { 
      
  }


    getAll()
    {
      return this.http.get(this.url)
                            .pipe (
                             map((response :any) => JSON.parse(JSON.stringify(response)),
                             catchError(this.handleError)
                                  ));
    }

    create(resource: any)
    {
    return this.http.post(this.url,
                            JSON.parse(JSON.stringify(resource)))
                            .pipe(
                             map((response :any) => JSON.parse(JSON.stringify(response)),
                             catchError(this.handleError)));
    }
    update(resource: any)
    {
      return this.http.patch(this.url + '/' + resource.id,
                              JSON.parse(JSON.stringify({isRead: true}))) 
                              .pipe(
                               map((response :any) => JSON.parse(JSON.stringify(response)),
                               catchError(this.handleError)));
                           
    }
   
   
    delete(id : any){

      return throwError(new appError());

        // return this.http.delete(this.url + '/' + id)
        //                         .pipe(
        //                          map((response :any) => JSON.parse(JSON.stringify(response)),
        //                          catchError(this.handleError)));
    }

    private handleError( error: Response){
                                if (error.status === 400) 
                                  return throwError(new BadInput(error.json()))
                                if (error.status === 404) 
                                  return throwError(new notFoundError()); 
                                  return throwError(new appError(error));
      
    }

  }

