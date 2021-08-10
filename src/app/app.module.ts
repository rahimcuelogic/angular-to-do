import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ListingsComponent } from './Components/listings/listings.component';
import { ListingComponent } from './Components/listings/listing/listing.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { ResetPasswordComponent } from './Components/dashboard/reset-password/reset-password.component';
import { HeaderComponent } from './Components/navigation/header/header.component';
import { EditListingComponent } from './Components/listings/edit-listing/edit-listing.component';
import { AddListingComponent } from './Components/listings/add-listing/add-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    ListingsComponent,
    ListingComponent,
    DashboardComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    HeaderComponent,
    AddListingComponent,
    EditListingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
