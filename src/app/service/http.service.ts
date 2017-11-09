import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { StorageService } from './storage.service';

/**
 * HTTP 서비스를 구현
 */
@Injectable()
export class HttpService {

  private results: string[];

  public get resurts(){
    return this.results;
  }

  constructor(private http: HttpClient, storageService: StorageService) { }
  
  ngOnInit(): void {
    console.log('HttpService.ngOnInit -- !');
    // Make the HTTP request:
    this.http.get<ItemsResponse>('http://tb.caap.co.kr:8080/jsonTest.do').subscribe(
      data => {
        // Read the result field from the JSON response.
        this.results = data.results;
        console.log('this.results == ' + this.results.toString());
      },
      (err : HttpErrorResponse) => {
        if (err.error instanceof Error) {
          alert('HttpErrorResponse Error !!');
        }else{
          alert('Other Error !!');
        }
      }
    );
  }
}

interface ItemsResponse {
  results: string[];
}