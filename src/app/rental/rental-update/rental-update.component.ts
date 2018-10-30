import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { UcWordsPipe } from 'ngx-pipes';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rental-update',
  templateUrl: './rental-update.component.html',
  styleUrls: ['./rental-update.component.scss']
})
export class RentalUpdateComponent implements OnInit {
  public rental: Rental;
  public rentalCategories: string[] = Rental.CATEGORIES;
  public locationSubject: Subject<any> = new Subject();
  constructor(private route: ActivatedRoute,
              private rentalService: RentalService,
              private toastr: ToastrService,
              private upperPipe: UcWordsPipe) {
    this.transformLocation = this.transformLocation.bind(this);
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.getRental(params['rentalId']);
      }
    );
  }

  public transformLocation(location: string): string {
    return this.upperPipe.transform(location);
  }

  public  getRental(rentalId: string) {
    this.rentalService.getRentalById(rentalId).subscribe(
      (rental: Rental) => {
        this.rental = rental;
      });
  }

  public updateRental(rentalId: string, rentalData: any) {
    this.rentalService.updateRental(rentalId, rentalData).subscribe(
      (updatedRental: Rental) => {
        this.rental = updatedRental;
        if (rentalData.city || rentalData.street) {
          this.locationSubject.next(this.rental.city + ', ' + this.rental.street);
        }
      },
      (errorResponse: HttpErrorResponse) => {
        this.toastr.error(errorResponse.error.errors[0].detail, 'Error');
      }
    );
  }

  public countBedroomAssets(assetsNum: number) {
    return parseInt(<any>this.rental.bedroom || 0, 10) + assetsNum;
  }
}
