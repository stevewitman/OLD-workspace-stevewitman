import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Post } from './post';
import { posts } from './posts'

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  constructor(private db: AngularFirestore) {}

  getPosts() {
    const results = [];
    return posts.reverse();

    const posts$ = this.db
      .collection('dailyPosts')
      .get()
      .pipe(
        map((result) => this.convertSnaps(result)),

      );
    posts$.subscribe(data => console.log('DAT', data))

    // posts$.subscribe((snaps) => {
    //   snaps.forEach((snap) => {
    //     const date = snap.id;
    //     const postsData = snap.data();
    //     const posts = Object.values(postsData);
    //     results.push({
    //       date: date,
    //       dailyPosts: posts,
    //     });
    //   });
    // });
    return results;
  }

  convertSnaps<T>(results) {
    return <T[]> results.docs.map((snap) => {
      return {
        date: snap.id,
        ...(<any>snap.data()),
      };
    })
  }

  // getPostBySlug(slug: string) {
  //   // return of(this.posts.find((obj) => obj.slug === slug));
  // }

  openSourceInTab(externalUrl: string): void {
    window.open(externalUrl, '_blank');
  }


}
