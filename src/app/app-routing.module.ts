import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ListingsComponent } from './Components/listings/listings.component';
import { ListingComponent } from './Components/listings/listing/listing.component';
import { AddListingComponent } from './Components/listings/add-listing/add-listing.component';
import { EditListingComponent } from './Components/listings/edit-listing/edit-listing.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'listings/:id', component: ListingComponent },
  { path: 'listings/add', component: AddListingComponent },
  { path: 'listings/edit/:id', component: EditListingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
