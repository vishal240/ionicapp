import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DefaultComponent,
  ],
  imports: [
    CommonModule, FormsModule,
    DashboardRoutingModule,
    IonicModule
  ]
})
export class DashboardModule { }
