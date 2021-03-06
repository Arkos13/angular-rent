import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {HeaderComponent} from './common/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {RentalModule} from './rental/rental.module';
import {MapModule} from './common/map/map.module';
import {AuthModule} from './auth/auth.module';
import {ManageModule} from './manage/manage.module';
import {UserModule} from './user/user.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'rentals',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    RentalModule,
    MapModule,
    AuthModule,
    ManageModule,
    UserModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
