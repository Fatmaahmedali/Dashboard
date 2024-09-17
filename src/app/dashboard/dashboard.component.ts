import { Component } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  options: GridsterConfig = {

    gridType: 'fit',
    margin: 10,
    outerMargin: true,
    columns: 12,
    rowHeight: 'auto',
    displayGrid: 'onDrag&Resize',
    mobileBreakpoint: 640,
    minCols: 4,
    maxCols: 12,
    swap: true,
    draggable: {
      enabled: true,
    },
    pushItems: true,
    resizable: {
      enabled: true,
    },
    swapWhileDragging: true,
    pushResizeItems: true,
    fixedRowHeight: 350,
    keepFixedHeightInMobile: true,
    scrollSensitivity: 10,
    scrollSpeed: 20,
    compactType: 'compactLeft&Up',
  };

  items: GridsterItem[] = [
    { cols: 7, rows: 1, y: 0, x: 0, itemTitle: 'Pie Chart Widget', chartType: 'pie' },
    { cols: 5, rows: 1, y: 0, x: 7, itemTitle: 'Data Chart Widget', chartType: 'data' },
    { cols: 5, rows: 1, y: 1, x: 0, itemTitle: 'Radar Chart Widget', chartType: 'radar' },
    { cols: 4, rows: 1, y: 1, x: 5, itemTitle: 'Area Chart Widget', chartType: 'area' },
    { cols: 3, rows: 1, y: 1, x: 9, itemTitle: 'New Area Chart Widget', chartType: 'new' },
    { cols: 12, rows: 1, y: 2, x: 0, itemTitle: 'Pie1 Chart Widget', chartType: 'pie1' },
  ];

  removeWidget(index: number): void {
    this.items.splice(index, 1);
  }
}
