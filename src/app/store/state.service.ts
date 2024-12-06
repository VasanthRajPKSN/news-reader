import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  newsData = signal<any>(null);

  setNewsData(news: any) {
    this.newsData.set(news);
  }
}
