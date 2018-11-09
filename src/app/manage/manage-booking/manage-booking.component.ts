import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../booking/shared/booking.service';
import { Booking } from '../../booking/shared/booking.model';
import {PaymentService} from '../../payment/payment.service';
import {Payment} from '../../payment/shared/payment.model';

@Component({
  selector: 'app-manage-booking',
  templateUrl: './manage-booking.component.html',
  styleUrls: ['./manage-booking.component.scss']
})
export class ManageBookingComponent implements OnInit {

  bookings: Booking[];
  payments: Payment[];

  constructor(private bookingService: BookingService,
              private paymentService: PaymentService) { }

  ngOnInit() {
    this.bookingService.getUserBookings().subscribe(
      (bookings: Booking[]) => {
        this.bookings = bookings;
      },
      () => {

      });
    this.getPendingPayment();
  }

  getPendingPayment() {
    this.paymentService.getPendingPayments().subscribe(
      (payments: any[]) => {
        this.payments = payments;
      }
    );
  }

  acceptPayment(payment: Payment) {
    this.paymentService.acceptPayment(payment).subscribe(
      (json) => {
        payment.status = 'paid';
      }
    );
  }

  declinePayment(payment: Payment) {
    this.paymentService.declinePayment(payment).subscribe(
      (json) => {
        payment.status = 'decline';
      }
    );
  }
}
