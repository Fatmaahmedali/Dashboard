import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AudianceComponent } from './components/audiance/audiance.component';
import { OverviewComponent } from './components/overview/overview.component';

@NgModule({
  declarations: [  OverviewComponent, AudianceComponent],
  imports: [
    CommonModule,AppRoutingModule,
    TooltipModule.forRoot(),
    SortableModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports:[OverviewComponent , AudianceComponent]
})
export class SidebarModule { }
