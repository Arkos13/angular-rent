import { NgModule } from '@angular/core';
import {MapComponent} from './map.component';
import { AgmCoreModule } from '@agm/core';
import {MapService} from './map.service';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-GhNIhwzZlPnQHDl1Gxm69ywn0UrKBhk'
    })
  ],
  providers: [
    MapService
  ]
})
export class MapModule { }
