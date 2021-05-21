import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { Subject } from 'rxjs';

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
  isFormValid = false;
  formattedDeliveryAddress = '(formatted address)';
  isHandset = true;
  inputChange = new Subject();
  validEmailAddress = '';
  validTwitterHandle = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();

    this.newsletterForm.valueChanges.subscribe(console.log);
  }

  initializeForm(): void {
    this.newsletterForm = this.fb.group({
      deliveryAddress: ['', [
        Validators.required
      ]],
      deliveryMethod: ['email'],
      deliveryFrequency: ['weekly'],
    });
  }

  autoEmailSelected(evt) {
    console.log('autoEmailSelected', evt);
  }

  onSubmit(): void {
    console.log(this.newsletterForm);
    this.isFormValid = true;
  }

  onChange(e) {
    console.log('e', e);
    this.validateEmailOrTwitter(e);
    this.inputChange.next(e);
  }

  validateEmailOrTwitter(input) {
    const reEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const reTwitterUrl = new RegExp(
      /^((?:http:\/\/)?|(?:https:\/\/)?)?(?:www\.)?twitter\.com\/(\w+)$/i
    );
    const reTwitterHandle = new RegExp(/^@?(\w+)$/);
    console.log('INPUT:', input);

    if (reEmail.test(input)) {
      this.newsletterForm.controls[ 'deliveryMethod' ].setValue( 'email' );
      console.log('input is', 'email');
      this.formattedDeliveryAddress = input;
      return;
    } else if (input.match(reTwitterUrl)) {
      let result = input.substring(input.lastIndexOf('/') + 1);
      if (result[0] !== '@') {
        result = '@' + result;
      }
      this.validTwitterHandle = result;
      this.newsletterForm.controls['deliveryMethod'].setValue('twitter DM');
      console.log(
        'deliv meth:',
        this.newsletterForm.controls['deliveryMethod']
      );
      console.log('input is', 'twitter-url', this.validTwitterHandle);
      return;
    } else if (input.match(reTwitterHandle)) {
      this.validTwitterHandle = input;
      this.newsletterForm.controls['deliveryMethod'].setValue('twitter DM');
      console.log('input is', 'twitter-handle', this.validTwitterHandle);
      return;
    } else {
      console.log('input is', 'no valid email or twitter');
      return;
    }
  }
}
