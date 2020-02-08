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
import { PermAssignComponent } from './components/perm-assign/perm-assign.component';

import { AuthGuard } from './auth.guard';
import { AddMenuComponent } from './views/menu/add-menu/add-menu.component';


const routes: Routes = [

  // todo 配置canActivateChild及与父级的关系：https://www.cnblogs.com/gushiyoyo/p/11271389.html
  // todo 什么场景适合使用canActivateChild？
  // todo 
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, children: [// , canActivate: [AuthGuard]
    { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },// todo 下面的路径作为''的children
    { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
    { path: 'article', component: ArticleComponent, canActivate: [AuthGuard] },
    { path: 'articlelist', component: ArticleListComponent, canActivate: [AuthGuard] },
    { path: 'addmenu', component: AddMenuComponent },
    { path: 'permassign', component: PermAssignComponent },
  ]}

  

  // todo 最后加默认路由或者路由重定向

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
