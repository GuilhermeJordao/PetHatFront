import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  setData(key: string, data: any) {
    this.storage.setItem(key, JSON.stringify(data));
  }
}
