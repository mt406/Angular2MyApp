import {Injectable} from '@angular/core'; 

import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'

@Injectable() 
export class appService {  
  constructor(private _http: Http) {}

  getReposForUser(user: string): Observable<any> {
    return this._http
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .map((res: any) => res.json())
  }
   
   
   getApp(): string { 
      return "Hello world"; 
   } 


}