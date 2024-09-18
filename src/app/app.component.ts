
import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Dashboard';
  @ViewChild('sidebar') sidebar!: MatSidenav;
  constructor(private observer: BreakpointObserver, private cdr: ChangeDetectorRef) {}
  ngAfterViewInit() {
    this.observer.observe(["(max-width: 800px)"]).subscribe((res) => {
      if (res.matches) {
        this.sidebar.mode = 'over';
        this.sidebar.close();
      } else {
        this.sidebar.mode = 'side';
        this.sidebar.open();
      }      this.cdr.detectChanges();
    });
  }
}
