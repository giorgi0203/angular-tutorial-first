import { Injectable } from '@angular/core';
import { dataBase } from './newsDB';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  articles = [];

  constructor() {
    this.articles = dataBase;
  }

  getArticles() {
    return this.articles;
  }

  getArticleById(id) {
    return this.articles.find((article) => {
      return article.id === id;
    });
  }
}
