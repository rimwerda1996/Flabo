import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Member } from '..//../models/Member';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class EtudiantService {

    user : Member[]; 
    private data = new BehaviorSubject(this.user);
    currentMessage = this.data.asObservable();


  constructor(private http: HttpClient) {
  }

  changeMessage(data: Member[]) {
    this.data.next(data)
  }
  getAll(): Observable<any> {
    return this.http.get('http://localhost:9099/api/etudiant');
  }
  getById(id: String):Observable<any>{
    return this.http.get('http://localhost:9099/api/etudiant/'+id);
  }
  delete(id: string) {
    return this.http.delete('http://localhost:9099/api/etudiant/'+id)
  }
  add(membre: any): Observable<any> {
    return this.http.post('http://localhost:9099/api/etudiant/',membre);
  }
  update(id : string ,membre: any ){
    return this.http.put('http://localhost:9099/api/etudiant/'+id,membre);}
   
    

    

  } 
 

  



