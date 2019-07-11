import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  breadcrumbList = [];
  constructor(
    private router: Router,
    private routeState: ActivatedRoute
  ) {

  }
  ngOnInit() {
    this.listenRouting();
  }
  listenRouting() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.breadcrumbList = [];
      const paths = this.router.url.split('/').slice(1);

      for (const path of paths) {
        const route = this.router.config.find(item => item.path.includes(path));
        if (route) {
          console.log(route);
          this.breadcrumbList.push(route);
        } else {
          this.breadcrumbList.push(this.routeState.firstChild.snapshot);
        }
      }
    });
  }
}
