import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './apartments/apartments-by-residence.component';
import { AddApartmentComponent } from './apartments/add-apartment/add-apartment.component';
import { AddResidenceComponent } from './residences/add-residence/add-residence.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: 'details/:id', component: ResidenceDetailsComponent },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'apartments/residence/:residenceId', component: ApartmentsByResidenceComponent },
  { path: 'apartments/add', component: AddApartmentComponent },
  { path: 'add-residence', component: AddResidenceComponent },
  { path: 'add-residence/:id', component: AddResidenceComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
