import { Component, Input, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {
  @Input() item: any;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item'] && this.item) {
      if (this.item.chartType === 'pie1') {
        this.chartOptions = this.pieChartOptions;
      }
    }
  }



  pieChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Daily usage'
    },
    tooltip: {
      valueSuffix: '%'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        innerSize: '70%', // Turn pie chart into donut
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.percentage:.1f}%',
          style: {
            fontSize: '1.2em',
            textOutline: 'none',
            opacity: 0.7
          }
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Percentage',
      data: [
        { name: 'Front yard', y: 10.8 },
        { name: 'Closet', y: 27.3 },
        { name: 'Swim pool', y: 52.9 },
        { name: 'Like a boss', y: 4.9 },
        { name: 'Braking', y: 4.1 },
      ]
    }]
  };
}
