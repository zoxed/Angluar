import { fakeBackendClass } from './helpers/fake-backend';
import { OrderService } from './_services/services/order.service';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubFollowersComponent } from './_components/github-followers/github-followers.component';
import { ChangePasswordComponent } from './_components/Authentication/change-password/change-password.component';
import { ZippyComponent } from './zippy/zippy.component';
import { LikeComponent } from './like/like.component';
import { TitleCasePipe } from './title-case.pipe';
import { SummaryPipe } from './summary.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { CourseComponent } from './course.component';
import { CoursesComponent } from './courses/courses.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormDirective } from './input-form.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user/user.component';
import { BlogsComponent } from './_components/Authentication/blogs/blogs.component';
import { PostService } from './_services/services/post.service';
import { AuthorsComponent } from './_components/Authentication/authors/authors.component';
import { AdminComponent } from './_components/Authentication/admin/admin.component';
import { LoginComponent } from './_components/Authentication/login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AuthService } from './_services/services/auth.service';
import { GithubProfileComponent } from './_components/github-profile/github-profile.component';
import { AuthGuard } from './_services/auth-guard.service';
import { AdminAuthGuard } from './_services/admin-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    // CourseComponent,
    FavoriteComponent,
    PanelComponent,
    InputFormDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostsComponent,
    UserComponent,
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
    HomeComponent,
    LoginComponent
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
    { provide: HTTP_INTERCEPTORS, useClass: fakeBackendClass, multi: true },

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
