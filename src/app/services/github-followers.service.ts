import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService {

  constructor(http: HttpClient) {
    super('https://api.github.com/users/mohamedYoussfi/followers', http);
  }
}
