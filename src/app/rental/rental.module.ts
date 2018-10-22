import {NgModule} from '@angular/core';
import {RentalComponent} from './rental.component';
import {RentalListComponent} from './rental-list/rental-list.component';
import {RentalListItemComponent} from './rental-list-item/rental-list-item.component';
import {CommonModule} from '@angular/common';
import {RentalService} from './shared/rental.service';
import {Routes, RouterModule} from '@angular/router';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalDetailBookingComponent } from './rental-detail/rental-detail-booking/rental-detail-booking.component';
import {NgPipesModule} from 'ngx-pipes';
import {UppercasePipe} from '../common/pipes/uppercase.pipe';
import {MapModule} from '../common/map/map.module';
import { Daterangepicker } from 'ng2-daterangepicker';
import { BookingService } from '../booking/shared/booking.service';
import { HelperService } from '../common/service/helper.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RentalSearchComponent } from './rental-search/rental-search.component';
import { RentalCreateComponent } from './rental-create/rental-create.component';
import { AuthGuard } from '../auth/shared/auth.guard';

const routes: Routes = [
  {
    path: 'rentals',
    component: RentalComponent,
    children: [
      { path: '', component: RentalListComponent},
      { path: 'create', component: RentalCreateComponent, canActivate: [AuthGuard] },
      { path: ':rentalId', component: RentalDetailComponent},
      { path: ':city/homes', component: RentalSearchComponent}
    ]
  }
];

@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent,
    RentalDetailBookingComponent,
    UppercasePipe,
    RentalSearchComponent,
    RentalCreateComponent
  ],
  providers: [
    RentalService,
    HelperService,
    BookingService,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgPipesModule,
    MapModule,
    Daterangepicker,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class RentalModule { }
