import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private results: string[];

  constructor(private httpService : HttpService) { 
    
  }

  ngOnInit() {
  }

  onClick(){
  }

  sendPayment(): void {
    this.httpService.ngOnInit();
    this.results = this.httpService.resurts;
  }
}
