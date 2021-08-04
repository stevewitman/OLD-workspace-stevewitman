import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';

import {
  isValidEmail,
  isValidTwitterHandle,
  isValidTwitterUrl,
  emailOrTwitterRequired,
} from '../helpers/helpers';

@Component({
  selector: 'ng-newsletter-page',
  templateUrl: './newsletter-page.component.html',
  styleUrls: ['./newsletter-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('400ms ease-in'),
      ]),
    ]),
  ],
})
export class NewsletterPageComponent implements OnInit {

  deliveryFrequency: string[] = ['Weekly', 'Bi-Weekly', 'Monthly', 'Quarterly'];
  deliveryMethod: string[] = ['Email', 'Twitter DM'];
  newsletterForm: FormGroup;
  showFormErrors = false;
  twitterHandle = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
    this.updateMethodOnAddress();
  }

  initializeForm(): void {
    this.newsletterForm = this.fb.group(
      {
        deliveryAddress: ['', { validators: [Validators.required] }],
        deliveryMethod: ['Email'],
        deliveryFrequency: ['Weekly'],
      },
      { validators: emailOrTwitterRequired }
    );
  }

  get address() {
    return this.newsletterForm.get('deliveryAddress');
  }

  get method() {
    return this.newsletterForm.get('deliveryMethod');
  }

  get frequency() {
    return this.newsletterForm.get('deliveryFrequency');
  }

  isValidEmail() {
    const reEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const result = reEmail.test(this.address.value) ? true : false;
    return result;
  }

  isValidTwitterHandle() {
    const reTwitterHandle = new RegExp(/^@(\w){4,16}$/);
    const result = reTwitterHandle.test(this.address.value) ? true : false;
    return result;
  }

  isValidTwitterUrl() {
    const reTwitterUrl = new RegExp(
      /^((?:http:\/\/)?|(?:https:\/\/)?)?(?:www\.)?twitter\.com\/(\w+)$/i
    );
    const result = reTwitterUrl.test(this.address.value) ? true : false;
    return result;
  }

  updateMethodOnAddress(): void {
    this.newsletterForm.get('deliveryAddress').valueChanges.subscribe((val) => {
      if (isValidTwitterUrl(val) || isValidTwitterHandle(val)) {
        this.newsletterForm.patchValue({
          deliveryMethod: 'Twitter DM',
        });
      }
      if (isValidEmail(val)) {
        this.newsletterForm.patchValue({
          deliveryMethod: 'Email',
        });
      }
    });
  }

  onSubmit() {
    if (this.newsletterForm.invalid) {
      this.showFormErrors = true;
      return;
    }
    const newsletterRequest = {
      method: '',
      address: '',
      frequency: this.frequency.value.toLowerCase(),
    };
    if (this.method.value === 'Email') {
      newsletterRequest.method = 'email';
      newsletterRequest.address = this.address.value.toLowerCase().trim();
    } else if (this.method.value === 'Twitter DM' && this.isValidTwitterHandle()) {
      newsletterRequest.method = 'twitter';
      newsletterRequest.address = this.address.value;
    } else if (this.method.value === 'Twitter DM' && this.isValidTwitterUrl()) {
      newsletterRequest.method = 'twitter';      
      newsletterRequest.address = '@' + this.address.value.split('/').pop();
    }
    console.log(newsletterRequest);
    
  }

  isOptionSelected(i, control) {
    if (i === control.value) {
      return { 'radio-button-selected': true };
    }
  }
}
