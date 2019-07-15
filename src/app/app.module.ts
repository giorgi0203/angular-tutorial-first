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
import { AdminComponent } from './admin/admin.component';
import { GuardComponent } from './guard/guard.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeComponent } from './employee/employee.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    ErrorPageComponent,
    AdminComponent,
    GuardComponent,
    LoginComponent,
    EmployeesComponent,
    EmployeeRegisterComponent,
    EmployeeComponent,
    MenuComponent
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', data: { name: 'home' }, component: ProductListComponent,
      },
      {
        path: 'cart', data: { name: 'cart' }, component: CartComponent,
      },
      {
        path: 'shipping', data: { name: 'shipping' }, component: ShippingComponent,
      },
      {
        path: 'exchange', data: { name: 'exchange' }, component: ExchangeComponent,
      },
      {
        path: 'whishlist', data: { name: 'whishlist' }, component: WhishlistComponent,
      },
      {
        path: 'register', data: { name: 'register' }, component: RegisterComponent,
      },
      {
        path: 'users', data: { name: 'users' }, component: UsersComponent, canActivate: [LoginGuard]
      },
      {
        path: 'currency', data: { name: 'currency' }, component: CurrencyComponent,
      },
      {
        path: 'dashboard', data: { name: 'dashboard' }, component: DashboardComponent,
      },
      {
        path: 'dashboard/news', data: { name: 'news' }, component: NewsComponent,
      },
      {
        path: 'dashboard/news/:articleId', data: { name: 'article' }, component: ArticleComponent,
      },
      {
        path: 'product/:productId', data: { name: 'product' }, component: ProductDetailsComponent,
      },
      {
        path: 'error', data: { name: 'error' }, component: ErrorPageComponent,
      },
      {
        path: 'login', data: { name: 'login' }, component: LoginComponent,
      },
      {
        path: 'admin', data: { name: 'admin' }, component: AdminComponent, canActivate: [AuthGuard]
      },
      {
        path: 'guard', data: { name: 'guard' }, component: GuardComponent,
      },
      {
        path: 'employees', data: { name: 'employees' }, component: EmployeesComponent,
      },
      {
        path: 'employee-register', data: { name: 'employee-register' }, component: EmployeeRegisterComponent,
      },
      {
        path: 'employee/:employeeId', data: { name: 'employee' }, component: EmployeeComponent,
      }
    ],
      // { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
