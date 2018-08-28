import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { TermsFormComponent } from './terms-form/terms-form.component';
import { QuestionComponent } from './question/question.component';
import { IdentityFormComponent } from './identity-form/identity-form.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { PaymentSelectComponent } from './payment-select/payment-select.component';
import { DocumentsFormComponent } from './documents-form/documents-form.component';
import { ConfirmFormComponent } from './confirm-form/confirm-form.component';

const appRoutes: Routes = [
  { path: 'application', component: ApplicationFormComponent },
  { path: 'terms', component: TermsFormComponent },
  { path: 'identity', component: IdentityFormComponent },
  { path: 'payment', component: PaymentFormComponent },
  { path: 'documents', component: DocumentsFormComponent },
  { path: 'confirm', component: ConfirmFormComponent },
  { path: '', redirectTo: '/application', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    ApplicationFormComponent,
    TermsFormComponent,
    QuestionComponent,
    IdentityFormComponent,
    PaymentFormComponent,
    PaymentSelectComponent,
    DocumentsFormComponent,
    ConfirmFormComponent
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
