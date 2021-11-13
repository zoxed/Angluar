import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor(private authHttp: HttpClient) {
  }

  getOrders() { 
    return this.authHttp.get('/api/orders')
      .pipe (
        map((response :any) => JSON.parse(JSON.stringify(response)),
        ))}
}
