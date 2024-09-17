import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { GridsterModule } from 'angular-gridster2';
import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { LayoutModule } from '@angular/cdk/layout'; // For BreakpointObserver
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WidgetModule } from './widget/widget.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    // Declare any other components here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    SharedModule,
    GridsterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    BrowserAnimationsModule,
    WidgetModule,
    MatIconModule,
    LayoutModule,
    NgbModule
  ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
