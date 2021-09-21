import { Component, OnInit } from '@angular/core';

import { delay } from 'rxjs/operators';

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

@Component({
  selector: 'ng-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  posts$;
  post$;

  constructor(private postService: PostService, private afs: Firestore) {}

  ngOnInit() {
    this.posts$ = this.postService.getPosts().pipe(delay(500));
    this.post$ = this.getPost('kPzPoMHmMsDfVBfEaI1K');
  }

  openPostInTab(url: string) {
    this.postService.openSourceInTab(url);
  }

  getPost(id) {
    return docData(doc(this.afs, 'posts', id));
  }

}
