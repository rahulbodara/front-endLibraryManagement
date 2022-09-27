import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClientModule, HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
 

  constructor(private httpClient:HttpClient) { }
  AddBook(data:any):Observable<any>{
    let API_URL =`${environment.apiUrl}/api/book-manage/book-operations/`
      
      return this.httpClient.post(API_URL,data)
    }

    getBooks(){
      return this.httpClient.get(`${environment.apiUrl}/api/book-manage/book-operations/`)
    }

    updatebook(data:any,id:any){

      let API_URL= (`${environment.apiUrl}/api/book-manage/book-operations/${id}/`)

      return this.httpClient.put(API_URL,data)


    }
    delete(id:any){
      let API_URL= (`${environment.apiUrl}/api/book-manage/book-operations/${id}/`)
      return this.httpClient.delete(API_URL,id)
    }
 
}
