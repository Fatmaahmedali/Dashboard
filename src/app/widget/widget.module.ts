import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { RadarComponent } from './radar/radar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from '../shared/shared.module';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { PieComponent } from './pie/pie.component';
import { AreaComponent } from './area/area.component';

@NgModule({
  declarations: [ChartsComponent, RadarComponent, PieComponent, AreaComponent],
  imports: [
    CommonModule,
    NgApexchartsModule,
    HighchartsChartModule,
    NgbModule,
    SharedModule,
    NgbProgressbarModule,
    MatProgressBarModule,
    ProgressbarModule.forRoot() // Add this line


  ],
  exports:[
    ChartsComponent,RadarComponent,PieComponent,AreaComponent
  ]
})
export class WidgetModule { }
