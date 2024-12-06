import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/envronment';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = 'https://newsapi.org/v2/top-headlines';

  constructor(private http: HttpClient, private logger: LoggerService) {}

  fetchNews(category: string): Observable<any> {
    const params = new HttpParams()
      .set('category', category)
      .set('apiKey', environment.newsApiKey);

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      catchError((error) => {
        this.logger.error('Error fetching news: ' + error.message);
        return of({ articles: [] }); 
      })
    );
  }
}
