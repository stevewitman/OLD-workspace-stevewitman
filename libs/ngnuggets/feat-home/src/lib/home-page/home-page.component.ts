import { Component, OnInit } from '@angular/core';

import { PostService } from '@nx-stevewitman/ngnuggets/services';
import { PostDetail } from '@nx-stevewitman/ngnuggets/services';
// import 'firebase/firestore';
// import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'ng-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  posts$;
  dailyPosts;
  post$;
  recentPosts = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.recentPosts = this.getPosts();
  }
  
  getPosts() {
    return this.postService.getPosts();
  }

  openPostInTab(url: string) {
    this.postService.openSourceInTab(url);
  }

}


