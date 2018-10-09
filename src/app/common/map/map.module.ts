import { NgModule } from '@angular/core';
import {MapComponent} from './map.component';
import { AgmCoreModule } from '@agm/core';
import {MapService} from './map.service';
import {CamelizePipe} from 'ngx-pipes';
import {environment} from '../../../environments/environment';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_MAP_API_KEY
    }),
    CommonModule
  ],
  providers: [
    MapService,
    CamelizePipe
  ]
})
export class MapModule { }
