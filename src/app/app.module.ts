import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ListingsComponent } from './Components/listings/listings.component';
import { ListingComponent } from './Components/listings/listing/listing.component';
import { EditComponent } from './Components/listings/edit/edit.component';
import { AddComponent } from './Components/listings/add/add.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { ResetPasswordComponent } from './Components/dashboard/reset-password/reset-password.component';
import { HeaderComponent } from './Components/navigation/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    ListingsComponent,
    ListingComponent,
    EditComponent,
    AddComponent,
    DashboardComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
