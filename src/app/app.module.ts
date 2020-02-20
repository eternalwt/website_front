import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuillModule } from 'ngx-quill';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular' 
import { NgxEchartsModule } from 'ngx-echarts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './views/nav/nav.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { IndexComponent } from './views/index/index.component';
import { ArticleComponent } from './views/article/article.component';
// import { StorageService } from './service/storage.service';
import { AuthInterceptor } from './interceptors/http-interceptors';
import { ArticleListComponent } from './views/article/article-list/article-list.component';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './views/toolbar/toolbar.component';
import { PermAssignComponent } from './components/perm-assign/perm-assign.component';
import { AddMenuComponent } from './views/menu/add-menu/add-menu.component';
import { UserListComponent } from './views/user/user-list/user-list.component';
import { AddRoleComponent } from './views/role/add-role/add-role.component';
import { RoleListComponent } from './views/role/role-list/role-list.component';
import { AddUserComponent } from './views/user/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    IndexComponent,
    ArticleComponent,
    ArticleListComponent,
    ToolbarComponent,
    PermAssignComponent,
    AddMenuComponent,
    UserListComponent,
    AddRoleComponent,
    RoleListComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    QuillModule.forRoot(),
    CKEditorModule,
    NgxEchartsModule,
  ],
  // 如果只想这一个组件自己单独用，就不用添加这export，如果还想给自己的子组件(eg:test)，就要export出去
  exports: [
    // MatButtonModule,
    // MatCheckboxModule
  ],
  providers: [
    // StorageService,
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
