import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ZippyComponent } from './zippy/zippy.component';
import { LikeComponent } from './like/like.component';
import { TitleCasePipe } from './title-case.pipe';
import { SummaryPipe } from './summary.pipe';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/validators/app-error-handler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
import { BlogsComponent } from './blogs/blogs.component';
import { PostService } from './services/post.service';
import { AuthorsComponent } from './authors/authors.component';

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
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'followers/:id/:username', component: GithubProfileComponent},
      {path:'followers', component: GithubFollowersComponent},
      {path:'posts', component: PostsComponent},
      {path:'**', component: NotFoundComponent},
    ])
  ],
  providers: [
    PostService,
    
    //internally replace the implematations of errorhandling
    {provide: ErrorHandler, useClass: AppErrorHandler}
    // CoursesService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
