import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { QuillModule } from 'ngx-quill';
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
import { AddArticleComponent } from './views/article/article-add/add-article.component';
// import { StorageService } from './service/storage.service';
import { AuthInterceptor } from './interceptors/http-interceptors';
import { ArticleListComponent } from './views/article/article-list/article-list.component';
import { MaterialCompModule } from './material-comp.module';
import { ToolbarComponent } from './views/toolbar/toolbar.component';
import { PermAssignComponent } from './components/perm-assign/perm-assign.component';
import { AddMenuComponent } from './views/menu/menu-add/add-menu.component';
import { UserListComponent } from './views/user/user-list/user-list.component';
import { AddRoleComponent } from './views/role/role-add/add-role.component';
import { RoleListComponent } from './views/role/role-list/role-list.component';
import { AddUserComponent } from './views/user/user-add/add-user.component';
import { ThirdPartyComponent } from './views/third-party/third-party.component';
import { ThirdpartyCompModule } from './thirdparty-comp.module';

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
    AddArticleComponent,
    ArticleListComponent,
    ToolbarComponent,
    PermAssignComponent,
    AddMenuComponent,
    UserListComponent,
    AddRoleComponent,
    RoleListComponent,
    AddUserComponent,
    ThirdPartyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialCompModule,
    CKEditorModule,
    // NgxEchartsModule,
    ThirdpartyCompModule
  ],
  exports: [
    CKEditorModule
  ],
  providers: [
    // StorageService,
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
