import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private results: string[];

  constructor(private httpService : HttpService, private storageService: StorageService) {
  }

  ngOnInit() {
  }

  onClick(){
  }

  sendPayment(): void {
    this.httpService.ngOnInit();
    this.results = this.httpService.resurts;
    this.storageService.setItem('storage_1','sdfsdf');
    console.log(this.storageService.getItem('storage_1'));
  }
}
