import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudianceComponent } from './sidebar/components/audiance/audiance.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'audiance', component: AudianceComponent },
  { path: 'Dashboard', component: DashboardComponent },
  {path:"**", redirectTo:"Dashboard", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
