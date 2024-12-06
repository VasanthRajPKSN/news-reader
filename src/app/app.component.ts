import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NewsService } from './services/news.service'; 
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CommonModule,NewsListComponent,NewsDetailComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newsData$!: Observable<any>;  
  error: string | null = null; 

  constructor(private newsService: NewsService) {
 
    this.loadNewsCategory('technology');
  }

  
  loadNewsCategory(category: any) {
    console.log("parent",category)
    this.newsData$ = this.newsService.fetchNews(category).pipe(
      catchError((err) => {
        console.error('Error loading news:', err);
        this.error = 'Failed to load news. Please try again later.';
        return [];
      })
    );
  }

  handleCategoryFromChild(category: any) {
    console.log("Received category in parent:", category);
    this.loadNewsCategory(category); 
  }
}


