import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { TermsFormComponent } from './terms-form/terms-form.component';

const appRoutes: Routes = [
  { path: 'application', component: ApplicationFormComponent },
  { path: 'terms', component: TermsFormComponent },
  { path: '', redirectTo: '/application', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    ApplicationFormComponent,
    TermsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
