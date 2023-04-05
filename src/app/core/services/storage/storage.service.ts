import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(@Inject(LOCAL_STORAGE) private localStorage: any) { }

  check(key: string): boolean {
    return !!this.localStorage.getItem(key);
  }

  get(key: string): string {
    return this.localStorage.getItem(key);
  }

  add(key: string, value: string): void {
    this.localStorage.setItem(key, value)
  }

  remove(key: string): void {
    this.localStorage.removeItem(key);
  }
}
