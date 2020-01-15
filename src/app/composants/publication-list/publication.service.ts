import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Publication } from '..//../models/publication';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class PublicationService {

    user : Publication[]; 
    private data = new BehaviorSubject(this.user);
    currentMessage = this.data.asObservable();


  constructor(private http: HttpClient) {
  }

  changeMessage(data: Publication[]) {
    this.data.next(data)
  }
  getAll(): Observable<any> {
    return this.http.get('http://localhost:9099/api/Publications');
  }
  getById(id: String):Observable<any>{
    return this.http.get('http://localhost:9099/api/Publications/'+id);
  }
  delete(id: string) {
    return this.http.delete('http://localhost:9099/api/Publication/'+id)
  }
  add(membre: any): Observable<any> {
    return this.http.post('http://localhost:9099/api/Publication/',membre);
  }
  update(id : string ,membre: any ){
    return this.http.put('http://localhost:9099/api/Publication/'+id,membre);}
  
  
  } 
 

  



