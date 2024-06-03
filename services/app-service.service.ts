import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private baseurl = 'http://127.0.0.1:5000/'
  protected endpoint:any;

  constructor(private _http:HttpClient) { }
  postData(data:any):Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200/' ,
      }),
    };
      console.warn(this.baseurl+data?.endpoint)
      return this._http.post<any>(this.baseurl+data?.endpoint,data.body,httpOptions).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    let errorMessage = `Error Code : ${error.status}\nMessage: ${error.message}`;
    return throwError(()=>errorMessage);
  }

  
  
}
