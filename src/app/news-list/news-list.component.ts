import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss'
})
export class NewsListComponent {
  @Output() confirmClick = new EventEmitter();

  loadNewsCategories(eve: any) {
    this.confirmClick.emit(eve);
    console.log("child", eve);
}

}
