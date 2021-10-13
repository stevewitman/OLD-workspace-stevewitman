import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { PostDetail, PostService } from '@nx-stevewitman/ngnuggets/services';
import { map, take, tap } from 'rxjs/operators';
@Component({
  selector: 'nx-stevewitman-admin-submit',
  templateUrl: './admin-submit.component.html',
  styleUrls: ['./admin-submit.component.scss'],
})
export class AdminSubmitComponent implements OnInit {
  today = new Date();
  postForm = this.fb.group({
    slug: [this.findNextSlug(this.todayString(this.today))],
    url: [''],
    type: [''],
    duration: [''],
    title: [''],
    description: [''],
    imgUrl: [''],
    datePosted: [this.today],
    dateSource: [this.today],
    sourceSite: [''],
    sourceUrl: [''],
    authorName: [''],
    authorUrl: [''],
    likes: [''],
    featured: [''],
    tags: [''],
    visits: [''],
    postedBy: ['Steve Witman'],
  });
  types = [
    { value: 'video', viewValue: 'Video' },
    { value: 'blog', viewValue: 'Blog' },
    { value: 'podcast', viewValue: 'Podcast' },
    { value: 'release', viewValue: 'Release' },
    { value: 'community', viewValue: 'Community' },
  ];
  typeControl = new FormControl();

  constructor(private fb: FormBuilder, private db: AngularFirestore) {}

  ngOnInit(): void {
    // this.autoSlug(this.todayString(this.today));
    // this.watchSlug();
    this.watchUrl();
  }

  onSubmit() {
    console.log('SUBMIT CLICKED');
  }

  findNextSlug(dateString: string): void {
    let nextLetter = '';
    let newSlug = '';
    this.db
      .doc(`/dailyPosts/${dateString}`)
      .get()
      .subscribe((snap) => {
        const data = snap.data();

        if (data === undefined) {
          newSlug = `${dateString}-a`;
        } else {
          const currLetter = Object.keys(data).sort().slice(-1).pop().slice(-1);
          nextLetter = this.nextChar(currLetter);
          newSlug = `${dateString}-${nextLetter}`;
        }

        this.postForm.patchValue({
          slug: `${newSlug}`,
        });
      });
  }

  todayString(today: Date) {
    let month = '' + (today.getMonth() + 1);
    let day = '' + today.getDate();
    const year = today.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    const result = [year, month, day].join('-');
    return result;
  }

  nextChar(c: string) {
    let skip = 1;
    if (c === 'k' || c === 'n') {
      skip = 2;
    }
    return String.fromCharCode(c.charCodeAt(0) + skip);
  }

  convertSnaps<T>(results: any) {
    return <T[]>results.docs.map((snap: any) => {
      return {
        date: snap.id,
        ...(<any>snap.data()),
      };
    });
  }

  // watchSlug() {
  //   this.postForm.get('slug').valueChanges.subscribe((val) => {
  //     this.autoSlug(val);
  //   });
  // }

  watchUrl() {
    this.postForm.get('url').valueChanges.subscribe((val) => {
      // YouTube (VIDEO)
      if (val.includes('https://www.youtube.com/')) {
        this.postForm.patchValue({
          type: 'video',
          sourceSite: 'YouTube',
          sourceUrl: 'https://youtube.com',
        });
      }
      // DEV Community (BLOG)
      if (val.includes('https://dev.to')) {
        this.postForm.patchValue({
          type: 'blog',
          sourceSite: 'DEV Community',
          sourceUrl: 'https://dev.to',
        });
      }
      // Angular Show (PODCAST)
      if (val.includes('https://www.spreaker.com/user/ng-conf')) {
        this.postForm.patchValue({
          type: 'podcast',
          sourceSite: 'Spreaker',
          sourceUrl: 'https://www.spreaker.com',
          authorName: 'The Angular Show',
          authorUrl: 'https://www.spreaker.com/show/angular-show',
        });
      }
      // Angular Air (PODCAST)
      if (val.includes('https://adventuresinangular.com')) {
        this.postForm.patchValue({
          type: 'podcast',
          sourceSite: 'Devchat.tv',
          sourceUrl: 'https://devchat.tv',
          authorName: 'Adventures In Angular',
          authorUrl: 'https://devchat.tv/show/adventures-in-angular/',
        });
      }
      // Angular Master (PODCAST)
      if (val.includes('https://open.spotify.com')) {
        this.postForm.patchValue({
          type: 'podcast',
          sourceSite: 'Spotify',
          sourceUrl: 'https://open.spotify.com',
          authorName: 'Angular Master Podcast',
          authorUrl: 'https://open.spotify.com/show/1wgZAEEIoRZ8eP78LTbyZf',
        });
      }
      // ngBuild --pod (PODCAST)
      if (val.includes('https://anchor.fm/ng-build-pod')) {
        this.postForm.patchValue({
          type: 'podcast',
          sourceSite: 'Anchor',
          sourceUrl: 'https://anchor.fm/ng-build-pod/',
          authorName: 'ng build --pod',
          authorUrl: 'https://ngbuildpod.com',
        });
      }
      // Angular Experience (PODCAST)
      if (val.includes('https://www.spreaker.com/user/14532324')) {
        this.postForm.patchValue({
          type: 'podcast',
          sourceSite: 'Spreaker',
          sourceUrl: 'https://spreaker.com',
          authorName: 'Angular Experience',
          authorUrl: 'https://angular-experience.web.app/episodes',
        });
      }
      // Web Rush (PODCAST)
      if (val.includes('https://webrush.io')) {
        this.postForm.patchValue({
          type: 'podcast',
          sourceSite: '',
          sourceUrl: '',
          authorName: 'Web Rush',
          authorUrl: 'https://webrush.io',
        });
      }
      // inDepthDev (BLOG)
      if (val.includes('https://indepth.dev')) {
        this.postForm.patchValue({
          type: 'blog',
          sourceSite: 'inDepthDev',
          sourceUrl: 'https://indepth.dev/tutorials/angular',
        });
      }
      // Angular Release (RELEASE)
      if (val.includes('https://indepth.dev')) {
        this.postForm.patchValue({
          type: 'release',
          sourceSite: 'GitHub Angular',
          sourceUrl: 'https://github.com/angular/angular/releases',
        });
      }
    });
  }

  dateChanged() {
    const datePosted = this.postForm.get('datePosted').value
    const dateString = this.todayString(datePosted)
    this.findNextSlug(dateString)
  }

}
