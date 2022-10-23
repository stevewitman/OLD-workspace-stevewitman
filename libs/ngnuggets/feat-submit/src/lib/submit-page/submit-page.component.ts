import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'ng-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('400ms ease-in'),
      ]),
    ]),
  ],
})
export class SubmitPageComponent implements OnInit {

  submitForm: FormGroup;
  showFormErrors = false;
  isSignedIn = false;
  panelOpenState = false;



  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.submitForm = this.fb.group(
      {
        articleUrl: ['', { validators: [Validators.required] }],
        showSubmitter: ['', { validators: [Validators.required] }],
      }
    );
  }

  onSubmit() {}

  onAuth() {
    // console.log('AUTH clicked');
    
  }

}
