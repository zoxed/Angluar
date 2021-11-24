import { fakeBackendInterceptor } from './helpers/fake-backend';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './_components/Public/not-found/not-found.component';

import { GithubFollowersComponent } from './_components/Public/github-followers/github-followers.component';
import { ZippyComponent } from './_components/Public/zippy/zippy.component';
import { TitleCasePipe } from './pipes/pipe1/title-case.pipe';
import { SummaryPipe } from './pipes/pipe1/summary.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { CourseComponent } from './course.component';
import { InputFormDirective } from './input-form.directive';
import { ContactFormComponent } from './_components/Public/contact-form/contact-form.component';
import { SignupFormComponent } from './_components/Public/signup-form/signup-form.component';
import { NewCourseFormComponent } from './_components/Public/new-course-form/new-course-form.component';
import { PostService } from './_services/services/post.service';
import { AdminComponent } from './_components/Admin/admin/admin.component';
import { AuthService } from './_services/services/auth.service';
import { GithubProfileComponent } from './_components/Public/github-profile/github-profile.component';
import { PanelComponent } from './_components/Public/panel/panel.component';
import { PostsComponent } from './_components/Public/posts/posts.component';
import { LikeComponent } from './_components/Public/like/like.component';
import { NavbarComponent } from './_components/Public/navbar/navbar.component';
import { HomeComponent } from './_components/Public/home/home.component';
import { AdminAuthGuard } from './_services/services/admin-auth-guard.service';
import { NoAccessComponent } from './_components/Public/no-access/no-access.component';
import { AuthGuard } from './_services/services/auth-guard.service';
import { LoginComponent } from './_components/Admin/login/login.component';
import { ChangePasswordComponent } from './_components/Admin/change-password/change-password.component';
import { AuthorsComponent } from './_components/Admin/authors/authors.component';
import { BlogsComponent } from './_components/Admin/blogs/blogs.component';
import { UserComponent } from './_components/Admin/user/user.component';
import { BasicAuthInterceptor } from './helpers/basic-auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    HomeComponent,
    SignupFormComponent,
    LoginComponent,
    UserComponent,
    InputFormDirective,
    ContactFormComponent,
    NewCourseFormComponent,
    PostsComponent,
    BlogsComponent,
    AuthorsComponent,
    SummaryPipe,
    TitleCasePipe,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    GithubProfileComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: ''         , component: HomeComponent},
      { path: 'login'    , component: LoginComponent },
      { path: 'admin'    , component: AdminComponent, canActivate: [AdminAuthGuard] },
      { path: 'followers/:id/:username', component: GithubProfileComponent},
      { path: 'followers', component: GithubFollowersComponent},
      { path: 'posts'    , component: PostsComponent},
      { path: 'no-access', component: NoAccessComponent },
      { path: '**'       , component: NotFoundComponent},
      
    ]),
    FormsModule,
    // JwtModule.forRoot({
    //   config: {
    //     // tokenGetter
    //   }
    // }),
  ],
  providers: [
    PostService,
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: fakeBackendInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },

    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend

    //internally replace the implematations of errorhandling
    // {provide: ErrorHandler, useClass: AppErrorHandler}

    // CoursesService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
