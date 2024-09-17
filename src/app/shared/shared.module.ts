import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[HeaderComponent,SidenavComponent]
})
export class SharedModule { }
