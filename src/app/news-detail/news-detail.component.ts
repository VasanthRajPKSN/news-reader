import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent {
  @Input() newsData: any;  
  sanitizedDescription: SafeHtml | undefined;  

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    if (this.newsData) {
      this.sanitizedDescription = this.sanitizer.bypassSecurityTrustHtml(this.newsData.articles[0]?.description || ''); 
    }
  }
}