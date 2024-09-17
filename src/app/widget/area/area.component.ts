import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more';
import HC_exporting from 'highcharts/modules/exporting';

HC_more(Highcharts);
HC_exporting(Highcharts);

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnChanges {
  Highcharts = Highcharts;
  highchartsOptions!: Highcharts.Options; // Use non-null assertion

  @Input() item: any;

  constructor() {
    this.initializeDefaultOptions();
  }

  private initializeDefaultOptions() {
    this.highchartsOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Ration stock info'
      },
      xAxis: {
        allowDecimals: false,
        accessibility: {
          rangeDescription: 'Range: 1940 to 2024.'
        }
      },
      yAxis: {
        title: {
          text: 'Ration stock'
        }
      },
      tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
      },
      plotOptions: {
        area: {
          lineWidth: 2,
          marker: {
            enabled: false
          }
        }
      },
      series: [{
        type: 'area',
        name: 'dog ration stock',
        color: '#1bc98e',
        data: [
          null, null, null, null, null, 6, 11, 32, 50, 110, 235, 369, 640,
          1005, 1463, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
          27368, 29459, 31982, 32040, 31223, 29561, 27552, 26008, 25830,
          26516, 27835, 28537, 27519, 25914, 25542, 24418, 24138, 24104,
          23208, 22886, 23305, 23459, 23368, 23317, 23575, 23205, 22217,
          21392, 19008, 13708, 11511, 10979, 10904, 11011, 10903, 10732,
          10685, 10577, 10526, 10457, 10027, 8570, 8360, 7853, 5709, 5273,
          5113, 5066, 4897, 4881, 4804, 4717, 4571, 4018, 3822, 3785, 3805,
          3750, 3708, 3708, 3708, 3708
        ]
      }, {
        type: 'area',
        name: 'Evil cat stock',
        color: '#676F84',
        data: [
          null, null, null, null, null, null, null, null, null,
          1, 5, 25, 50, 120, 150, 200, 426, 660, 863, 1048, 1627, 2492,
          3346, 4259, 5242, 6144, 7091, 8400, 9490, 10671, 11736, 13279,
          14600, 15878, 17286, 19235, 22165, 24281, 26169, 28258, 30665,
          32146, 33486, 35130, 36825, 38582, 40159, 38107, 36538, 35078,
          32980, 29154, 26734, 24403, 21339, 18179, 15942, 15442, 14368,
          13188, 12188, 11152, 10114, 9076, 8038, 7000, 6643, 6286, 5929,
          5527, 5215, 4858, 4750, 4650, 4600, 4500, 4490, 4300, 4350, 4330,
          4310, 4495, 4477, 4489, 4380
        ]
      }]
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item']) {
      if (this.item.chartType === 'area') {
        this.highchartsOptions = { ...this.highchartsOptions, ...this.item.highchartsOptions };
      }
    }
  }
}
