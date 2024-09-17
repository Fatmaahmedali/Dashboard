import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudianceComponent } from './sidebar/components/audiance/audiance.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'audiance', component: AudianceComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path:"**", redirectTo:"dashboard", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
