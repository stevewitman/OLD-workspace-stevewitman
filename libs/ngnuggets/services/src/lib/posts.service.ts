import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts:any;

  constructor(private db: AngularFirestore, private http: HttpClient ) {}

  // getPosts(month) {
  //   return this.http.get(`assets/posts-2022-${month}-LONG.json`);
  // }

  getPosts() {
    return this.http.get(`assets/posts-2022.json`);
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
function reverse(): import("rxjs").OperatorFunction<Object, unknown> {
  throw new Error('Function not implemented.');
}

