import { Component, OnInit } from '@angular/core';

import { delay, groupBy, mergeMap, tap, toArray } from 'rxjs/operators';

import { PostService } from '@nx-stevewitman/ngnuggets/services';
import { PostDetail } from '@nx-stevewitman/ngnuggets/services';

import {
  collection,
  doc,
  docData,
  DocumentReference,
  CollectionReference,
  Firestore,
  onSnapshot,
  query,
  where,
  Unsubscribe,
  Query,
  DocumentData,
  collectionData,
  collectionChanges,
  docSnapshots,
} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'ng-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  posts$;
  dailyPosts;
  post$;

  constructor(private postService: PostService, private afs: Firestore) {}

  ngOnInit() {
    this.posts$ = this.postService.getPosts()
      .pipe(
        delay(200),
      )
    

  //     ).pipe(
  //         groupBy(post => post.datePosted),
  // mergeMap(group => group
  //   .pipe(
  //     reduce((acc, cur) => {
  //         acc.values.push(cur);
  //         return acc;
  //       },
  //       { key: group.key, values: [] }
      // )
    
  
  }

  openPostInTab(url: string) {
    this.postService.openSourceInTab(url);
  }

  getPost(id) {
    const result = docData(doc(this.afs, 'posts', id));
    console.log('FIRESTORE RESULT:', result);
    return result;
  }

}
