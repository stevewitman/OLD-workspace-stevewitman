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
    this.postService.getPosts();

    this.posts$ = this.onReadPosts();

  }

  ngAfterViewInit() {
    this.posts$
      .subscribe(snaps => {
        snaps.forEach(snap => {
          const date = snap.id;
          const postsData = snap.data();
          const posts = Object.values(postsData)
          this.recentPosts.push(
            {
              date: date,
              dailyPosts: posts
            }
          )
        })
      });
  }

  openPostInTab(url: string) {
    this.postService.openSourceInTab(url);
  }

  getPosts() {
    this.db.collection('posts');
  }

  onReadPosts() {
    return this.db
      .collection('dailyPosts')
      .get();
  }

}

  // getPost(id) {
  //   const result = docData(doc(this.afs, 'posts', id));
  //   console.log('FIRESTORE RESULT:', result);
  //   return result;
  // }

