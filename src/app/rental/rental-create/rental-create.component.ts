import { Component, OnInit } from '@angular/core';
import { Rental } from '../shared/rental.model';
import { RentalService } from '../shared/rental.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rental-create',
  templateUrl: './rental-create.component.html',
  styleUrls: ['./rental-create.component.scss']
})
export class RentalCreateComponent implements OnInit {
  public newRental: Rental;
  public rentalCategories = Rental.CATEGORIES;
  public rentalForm: FormGroup;
  public errors: any[] = [];
  constructor(private fb: FormBuilder,
              private rentalService: RentalService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  public initForm() {
    this.rentalForm = this.fb.group({
      title: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required],
      bedrooms: ['', Validators.required],
      description: ['', Validators.required],
      dailyRate: ['', Validators.required],
      shared: [false],
    });
  }

  public isInvalidForm(fieldName): boolean {
    return this.rentalForm.controls[fieldName].invalid &&
      (this.rentalForm.controls[fieldName].dirty || this.rentalForm.controls[fieldName].touched);
  }

  public isRequired(fieldName): boolean {
    return this.rentalForm.controls[fieldName].errors.required;
  }

  public createRental() {
    this.rentalService.createRental(this.rentalForm.value).subscribe(
      (rental: Rental) => {
        this.router.navigate([`/rentals/${rental._id}`]);
      },
      (errorResponse: HttpErrorResponse) => {
        this.errors = errorResponse.error.errors;
      }
    );
  }

}
