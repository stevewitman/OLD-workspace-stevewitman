import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';

import { PostDetail } from './post-detail';

@Injectable({
  providedIn: 'root',
})
export class PostService {


  getPosts() {
    // return of(this.posts.reverse());
    let posts$ = this.db
      .collection('dailyPosts')
      .get();
  }

  // getPostBySlug(slug: string) {
  //   // return of(this.posts.find((obj) => obj.slug === slug));
  // }

  openSourceInTab(externalUrl: string): void {
    console.log('Posts Service - openSourceInTab');
    window.open(externalUrl, '_blank');
  }
}
