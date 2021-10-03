import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { PostDetail, PostService } from '@nx-stevewitman/ngnuggets/services';
@Component({
  selector: 'nx-stevewitman-admin-submit',
  templateUrl: './admin-submit.component.html',
  styleUrls: ['./admin-submit.component.scss'],
})
export class AdminSubmitComponent implements OnInit {
  postForm = this.fb.group({
    slug: [''],
    url: [''],
    type: [''],
    duration: [''],
    title: [''],
    description: [''],
    imgUrl: [''],
    datePosted: [''],
    dateCreated: [''],
    sourceSite: [''],
    sourceUrl: [''],
    authorName: [''],
    authorUrl: [''],
    likes: [''],
    featured: [''],
    tags: [''],
    visits: [''],
    postedBy: ['']
  });
  types = [
    { value: 'video', viewValue: 'Video' },
    { value: 'blog', viewValue: 'Blog' },
    { value: 'podcast', viewValue: 'Podcast' },
    { value: 'release', viewValue: 'Release' },
    { value: 'community', viewValue: 'Community' },
  ];
  typeControl = new FormControl();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('ON INIT');
  }

  onSubmit() {
    console.log('SUBMIT CLICKED')
  }
}
