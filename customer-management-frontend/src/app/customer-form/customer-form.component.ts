import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customerForm: FormGroup;
  customerId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]  // Add this line
    });
  }

  ngOnInit(): void {
    this.customerId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.customerId) {
      this.customerService.getCustomer(this.customerId).subscribe((customer: Customer) => {
        this.customerForm.patchValue(customer);
      });
    }
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      if (this.customerId) {
        this.customerService.updateCustomer({ ...this.customerForm.value, id: this.customerId }).subscribe(() => {
          this.router.navigate(['/']);
        });
      } else {
        this.customerService.addCustomer(this.customerForm.value).subscribe(() => {
          this.router.navigate(['/']);
        });
      }
    }
  }
}
