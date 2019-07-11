import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  currentArticle;

  constructor(
    private router: Router,
    private routeState: ActivatedRoute,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.routeState.paramMap.subscribe(params => {
      this.currentArticle = this.newsService.getArticleById(+params.get('articleId'));

      if (!this.currentArticle) {
        this.router.navigate(['error']);
      }

    });
  }

}
