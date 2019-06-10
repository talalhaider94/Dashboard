import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TConfigurationComponent } from './tconfiguration.component';
import { TConfigurationRoutingModule } from './tconfiguration-routing.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [TConfigurationComponent],
  imports: [
    CommonModule,
    TConfigurationRoutingModule,
    DataTablesModule
  ]
})
export class TConfigurationModule { }
