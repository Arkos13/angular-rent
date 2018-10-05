import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RentalService} from '../shared/rental.service';
import {Rental} from '../shared/rental.module';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
  rental: Rental;
  constructor(private route: ActivatedRoute,
              private rentalService: RentalService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.getRental(parseInt(params['rentalId'], 0));
      }
    );
  }

  getRental(rentalId: number) {
    this.rentalService.getRentalById(rentalId).subscribe(
      (rental: Rental) => {
        this.rental = rental;
      }
    );
  }

}
