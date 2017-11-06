import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class HttpService {

  results: string[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.post<ItemsResponse>('/api/items','').subscribe(
      data => {
        // Read the result field from the JSON response.
        this.results = data.results;
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