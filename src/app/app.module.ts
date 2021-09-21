import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { QuillModule } from 'ngx-quill';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular' 
// import { NgxEchartsModule } from 'ngx-echarts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './views/home/nav/nav.component';
import { AboutComponent } from './views/business/about/about.component';
import { ContactComponent } from './views/business/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { DashboardComponent } from './views/business/dashboard/dashboard.component';
import { AddArticleComponent } from './views/business/article/article-add/add-article.component';
// import { StorageService } from './service/storage.service';
import { AuthInterceptor } from './interceptors/http-interceptors';
import { ArticleListComponent } from './views/business/article/article-list/article-list.component';
import { MaterialCompModule } from './material-comp.module';
import { ToolbarComponent } from './views/home/toolbar/toolbar.component';
import { PermAssignComponent } from './views/business/perm/perm-assign/perm-assign.component';
import { AddMenuComponent } from './views/business/menu/menu-add/add-menu.component';
import { UserListComponent } from './views/business/user/user-list/user-list.component';
import { AddRoleComponent } from './views/business/role/role-add/add-role.component';
import { RoleListComponent } from './views/business/role/role-list/role-list.component';
import { AddUserComponent } from './views/business/user/user-add/add-user.component';
import { ThirdPartyComponent } from './views/business/third-party/third-party.component';
import { ThirdpartyCompModule } from './thirdparty-comp.module';
import { MainComponent } from './views/business/main/main.component';
import { MsgComponent } from './views/business/msg/msg.component';
import { MenuListComponent } from './views/business/menu/menu-list/menu-list.component';

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
    MainComponent,
    MsgComponent,
    MenuListComponent,
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
