import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  articles = [];

  constructor(
    private newsService: NewsService
  ) {

  }

  ngOnInit() {
    this.articles = this.newsService.getArticles();
  }

}
