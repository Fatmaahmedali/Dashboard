import { Component, Input, OnChanges, SimpleChanges, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more';  // Import if using additional Highcharts features
import HC_exporting from 'highcharts/modules/exporting';
HC_more(Highcharts);  // Initialize the additional modules if needed
HC_exporting(Highcharts);
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnChanges {
  @Input() item: any;
  @ViewChild('container') container!: ElementRef;
  Highcharts: typeof Highcharts = Highcharts;
  currentChart: Highcharts.Chart | undefined;
  currentChartOptions: Highcharts.Options = {};
  pieChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      height: '400px',
      events: {
        render: function () {
          const chart = this as Highcharts.Chart;
          const renderer = chart.renderer;
          chart.renderer.box.querySelectorAll('.central-text').forEach(element => element.remove());
          const isResponsive = chart.renderer.box.clientWidth <= 500;
          const centerX = chart.plotWidth / 2;
          const centerY = chart.plotHeight / 2;
                    if (isResponsive) {
            renderer.text('<div style="font-size: 18px; text-align: center;">42%<br>recurring</div>',
              centerX, centerY * 0.8)
              .attr({
                zIndex: 7,
                align: 'center',
                class: 'central-text'
              })
              .css({
                color: '#000',
                textAlign: 'center'
              })
              .add();
            renderer.text('<div style="font-size: 18px; text-align: center;">87%<br>Aware</div>',
              centerX, centerY * 1.5)
              .attr({
                zIndex: 5,
                align: 'center',
                class: 'central-text'
              })
              .css({
                color: '#000',
                textAlign: 'center'
              })
              .add();
          }else {
            renderer.text('<div style="font-size: 24px; text-align: center;">42%<br>recurring</div>',
              centerX * 0.6, centerY)
              .attr({
                zIndex: 5,
                align: 'center',
                class: 'central-text'
              })
              .css({
                color: '#000',
                textAlign: 'center'
              })
              .add();
            renderer.text('<div style="font-size: 24px; text-align: center;">87%<br>Aware</div>',
              centerX * 1.4, centerY)
              .attr({
                zIndex: 5,
                align: 'center',
                class: 'central-text'
              })
              .css({
                color: '#000',
                textAlign: 'center'
              })
              .add();
          }
        }
      }
    },
    title: {
      text: 'Overall analysis'
    },
    plotOptions: {
      pie: {
        shadow: false,
        dataLabels: {
          enabled: false
        },
        size: '50%',
        innerSize: '40%',
        borderWidth: 0
      }
    },
    series: [
      {
        type: 'pie',
        name: 'Pie Chart 1',
        data: [
          {
            name: 'Completed',
            y: 42,
            color: '#6D5CAE'
          },
          {
            name: 'Pending',
            y: 58,
            color: '#f3f3f3'
          }
        ],
        center: ['30%', '50%'],
        size: '60%',
        innerSize: '80%',
      },
      {
        type: 'pie',
        name: 'Pie Chart 2',
        data: [
          {
            name: 'Completed',
            y: 87,
            color: '#6D5CAE'
          },
          {
            name: 'Pending',
            y: 13,
            color: '#f3f3f3'
          }
        ],
        center: ['70%', '50%'],
        size: '60%',
        innerSize: '80%',
      }
    ],
    tooltip: {
      valueSuffix: '%'
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 400 // Breakpoint for responsiveness
        },
        chartOptions: {
          plotOptions: {
            pie: {
              size: '40%',
              innerSize: '20%',
              dataLabels: {
                enabled: true
              }
            }
          },
          series: [
            {
              type: 'pie',
              name: 'Pie Chart 1',
              center: ['50%', '30%'], // Position for smaller screens
              size: '30%',
              innerSize: '80%'
            },
            {
              type: 'pie',
              name: 'Pie Chart 2',
              center: ['50%', '70%'], // Position for smaller screens
              size: '30%',
              innerSize: '80%'
            }
          ]
        }
      }]
    }
  };
  data: Array<{ name: string, y: number, format?: 'percent' | 'duration' }> = [
    { name: 'Today:', y: 78 },
    { name: 'This month:', y: 459 },
    { name: 'All time:', y: 54 },
    { name: 'Bounce rate:', y: 81.08, format: 'percent' },
    { name: 'Session duration:', y: 101, format: 'duration' },
    { name: 'New session:', y: 63.86, format: 'percent' }
  ];
  chart: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item'] && this.item) {
      if (this.item.chartType === 'pie') {
        this.currentChartOptions = this.pieChartOptions;
        this.updateChart();
      }
    }
  }


  private updateChart(): void {
    if (this.container && this.currentChartOptions) {
      if (this.currentChart) {
        this.currentChart.update(this.currentChartOptions, true, true);
      } else {
        this.currentChart = Highcharts.chart(this.container.nativeElement, this.currentChartOptions);
      }
    }
  }

}
