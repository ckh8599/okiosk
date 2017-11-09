import { Injectable } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Injectable()
export class StorageService {

  constructor(protected localStorage: AsyncLocalStorage) {}

  public setItem(key:string, value:string){
    localStorage.setItem(key,value);
  }
  public getItem(key:string){
    return localStorage.getItem(key);
  }
}
