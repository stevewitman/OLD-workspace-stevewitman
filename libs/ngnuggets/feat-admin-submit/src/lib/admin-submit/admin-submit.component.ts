import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { PostDetail, PostService } from '@nx-stevewitman/ngnuggets/services';
@Component({
  selector: 'nx-stevewitman-admin-submit',
  templateUrl: './admin-submit.component.html',
  styleUrls: ['./admin-submit.component.scss'],
})
export class AdminSubmitComponent implements OnInit {
  form: FormGroup;
  types = [
    { value: 'video', viewValue: 'Video' },
    { value: 'blog', viewValue: 'Blog' },
    { value: 'podcast', viewValue: 'Podcast' },
  ];
  typeControl = new FormControl();

  constructor() {
    this.form = new FormGroup({
      type: this.typeControl,
    });
  }

  ngOnInit(): void {}
}
