import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AutopayComponent } from './components/autopay/autopay.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    DashboardComponent,
    AutopayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'dashboard', component: DashboardComponent},
        { path: 'autopay', component: AutopayComponent},
        { path: '**', redirectTo: 'dashboard' }
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
  exports: [DashboardComponent] // maybe not here
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule)
