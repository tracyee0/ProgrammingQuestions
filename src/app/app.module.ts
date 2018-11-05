import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { HeaderComponent } from './header/header.component';
import { QuestionComponent } from './question/question.component';
import { ViewQuestionsComponent } from './view-questions/view-questions.component';
import { AnswersComponent } from './answers/answers.component';

const ROUTES = [
  {path: '', component: BackgroundComponent},
  {path: 'Home', component: BackgroundComponent},
  {path: 'Questions', component: ViewQuestionsComponent}]

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    HeaderComponent,
    QuestionComponent,
    ViewQuestionsComponent,
    AnswersComponent
  ],
  imports: [
     [
      BrowserModule,
      RouterModule,
      RouterModule.forRoot(ROUTES),
      FormsModule,
      HttpClientModule
    ],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
