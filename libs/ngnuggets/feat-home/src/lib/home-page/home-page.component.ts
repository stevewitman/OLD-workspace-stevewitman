import { AfterViewInit, Component, OnInit, Query } from '@angular/core';

import { delay, take } from 'rxjs/operators';

import { PostService } from '@nx-stevewitman/ngnuggets/services';
import { PostDetail } from '@nx-stevewitman/ngnuggets/services';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'ng-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, AfterViewInit {
  posts$;
  dailyPosts;
  post$;
  recentPosts = [];

  constructor(private postService: PostService, private db: AngularFirestore) {}

  ngOnInit() {
    // this.posts$ = this.postService.getPosts().pipe(delay(200));

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
    this.posts$ = this.onReadPosts();
    this.posts$
    .subscribe(snaps => {
        snaps.forEach(snap => {
          this.recentPosts.push(snap.data());
          console.log(snap.id);
          console.log(snap.data());
        })
    });

  }

  ngAfterViewInit() {
    console.log('recentPosts:', this.recentPosts);
  }

  openPostInTab(url: string) {
    this.postService.openSourceInTab(url);
  }

  getPosts() {
    this.db.collection('posts');
  }

  onReadPosts() {
    return this.db
      .collection('posts', (ref) =>
        ref.orderBy('datePosted', 'desc')
      )
      .get();
    // .subscribe(snaps => {
    //   snaps.forEach(snap => {
    //     console.log(snap.id);
    //     console.log(snap.data());
    //   })
    // });
  }

}

  // getPost(id) {
  //   const result = docData(doc(this.afs, 'posts', id));
  //   console.log('FIRESTORE RESULT:', result);
  //   return result;
  // }

