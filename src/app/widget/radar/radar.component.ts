import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more';
import HC_exporting from 'highcharts/modules/exporting';

// Initialize additional modules for Highcharts
HC_more(Highcharts);
HC_exporting(Highcharts);

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit, OnChanges {
  @Input() item: any;
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chartOptions = {
      chart: {
        type: 'area', // Use 'area' type for full color fill
        polar: true
      },
      title: {
        text: 'Radar Chart Example'
      },
      pane: {
        size: '80%'
      },
      xAxis: {
        categories: ["Taming", "Accessory", "Development", "Grooming", "Awareness", "Ration"],
        tickmarkPlacement: 'on',
        lineWidth: 0
      },
      yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        labels: {
          enabled: false // Disable labels to hide numbers
        }
      },
      tooltip: {
        shared: true,
        useHTML: true, // Use HTML for custom tooltip formatting
        formatter: function() {
          // Ensure points is defined before accessing it
          if (this.points) {
            return this.points.map(point =>
              `<span style="color:${point.color}">${point.series.name}: ${point.y}</span><br>`)
              .join('');
          } else {
            return ''; // Return an empty string if points is undefined
          }
        }
      },
      series: [
        {
          name: "Allocated resources",
          data: [45, 39, 58, 63, 38, 93],
          type: 'area',
          pointPlacement: 'on',
          color: '#676F84',
          fillOpacity: 0.5, // Set fill opacity to make the area color visible
          marker: {
            enabled: false // Disable markers
          },
          dataLabels: {
            enabled: false // Disable data labels
          }
        },
        {
          name: "Spent resources",
          data: [83, 49, 60, 60, 77, 90],
          type: 'area',
          pointPlacement: 'on',
          color: '#F35958',
          fillOpacity: 0.5, // Set fill opacity to make the area color visible
          marker: {
            enabled: false // Disable markers
          },
          dataLabels: {
            enabled: false // Disable data labels
          }
        }
      ],
      plotOptions: {
        area: {
          dataLabels: {
            enabled: false // Ensure data labels are not shown
          },
          enableMouseTracking: true
        }
      },
      legend: {
        align: 'right', // Align legend to the right
        verticalAlign: 'middle', // Vertically align legend to the middle
        layout: 'vertical' // Layout legend vertically
      }
    };
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item']) {
      if (this.item.chartType === 'radar') {
        this.chartOptions = { ...this.chartOptions, ...this.item.highchartsOptions };
      }
    }
  }
}
