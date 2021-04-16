import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{List} from'./models/List';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http:HttpClient) { }
   public getList(): Observable<List[]>{
  
    let headers = new Headers();

    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    headers.append('Content-Type', 'application/json');

 

  headers.append('GET','OPTIONS');
  //  headers = headers.set('mode', 'no-cors');
     const url ='http://localhost:8080/api/v1/sample/'
     return this.http.get<List[]>(url)
   }
   public postData(data:any){
     const url = 'http://localhost:8080/api/v1/sample/add';
     const body ={name:data.name,age:data.age,image:data.image}
     return this.http.post(url,body)
   }
}
