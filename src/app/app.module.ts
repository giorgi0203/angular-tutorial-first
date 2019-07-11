import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { CurrencyComponent } from './currency/currency.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { ShippingService } from './shipping.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { ArticleComponent } from './article/article.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    WhishlistComponent,
    RegisterComponent,
    UsersComponent,
    CurrencyComponent,
    ExchangeComponent,
    DashboardComponent,
    NewsComponent,
    ArticleComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', component: ProductListComponent,
      },
      {
        path: 'cart', component: CartComponent,
      },
      {
        path: 'shipping', component: ShippingComponent,
      },
      {
        path: 'exchange', component: ExchangeComponent,
      },
      {
        path: 'whishlist', component: WhishlistComponent,
      },
      {
        path: 'register', component: RegisterComponent,
      },
      {
        path: 'users', component: UsersComponent,
      },
      {
        path: 'currency', component: CurrencyComponent,
      },
      {
        path: 'dashboard', component: DashboardComponent,
      },
      {
        path: 'dashboard/news', component: NewsComponent,
      },
      {
        path: 'dashboard/news/:articleId', component: ArticleComponent,
      },
      {
        path: 'product/:productId', component: ProductDetailsComponent,
      },
      {
        path: 'error', component: ErrorPageComponent,
      }
    ], { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
