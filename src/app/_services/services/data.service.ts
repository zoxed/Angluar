import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map, retry} from 'rxjs/operators';
import { appError } from 'src/app/_common/validators/app-error';
import { BadInput } from 'src/app/_common/validators/bad-input';
import { notFoundError } from 'src/app/_common/validators/not-found-error';


export class DataService {

  constructor(private url: string, private http : HttpClient) { 
      
  }


    getAll()
    {
      return this.http.get(this.url)
      .pipe (
        map((response :any) => JSON.parse(JSON.stringify(response)),
        catchError(this.handleError))
        );
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

      // return throwError(new appError());

        return this.http.delete(this.url + '/' + id)
        .pipe(
          map((response :any) => JSON.parse(JSON.stringify(response)),
          catchError(this.handleError),
          ), retry(3) ) //as the new documentation position where it should the retry method be.
          .toPromise()
    }

    private handleError( error: Response){
      if (error.status === 400) 
      return throwError(new BadInput(error.json()))
      if (error.status === 404) 
      return throwError(new notFoundError()); 
      return throwError(new appError(error));
      
    }

  }

