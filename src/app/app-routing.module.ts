import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ArticleComponent } from './views/article/article.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ArticleListComponent } from './views/article/article-list/article-list.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [

  // todo 配置canActivateChild及与父级的关系：https://www.cnblogs.com/gushiyoyo/p/11271389.html

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'article', component: ArticleComponent, canActivate: [AuthGuard] },
  { path: 'articlelist', component: ArticleListComponent },
  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent, children: [
    { path: 'about', component: AboutComponent },// todo 下面的路径作为''的children
    { path: 'contact', component: ContactComponent },
  ]}

  

  // todo 最后加默认路由或者路由重定向

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
