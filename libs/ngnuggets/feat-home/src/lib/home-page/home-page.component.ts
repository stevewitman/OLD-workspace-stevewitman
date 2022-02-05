import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { PostService } from '@nx-stevewitman/ngnuggets/services';
import { Post } from '@nx-stevewitman/ngnuggets/services';
import { toArray } from 'rxjs/operators';
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
  recentPosts: any;
  recentPosts1: any;
  recentPosts2: any;
  tags = [];
  uniqueTags;
  uniqueTagsString = 'init';

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getPosts('02').subscribe((data) => {
      this.recentPosts = data;
    });
  }



  getPosts(m) {
    return this.postService.getPosts(m);
  }

  getMorePosts() {
    console.log('recentPosts BEFORE:', this.recentPosts);
    this.getPosts('01').subscribe((data) => {
      this.recentPosts2 = data;
      console.log('MORE:', this.recentPosts2);
      this.recentPosts = [...this.recentPosts2, ...this.recentPosts];
      console.log('recentPosts AFTER:', this.recentPosts);
    });
  }

  openPostInTab(url: string) {
    this.postService.openSourceInTab(url);
  }

  extractTags(postGroups) {
    const allTags = [];
    postGroups.forEach((e) => {
      e.dailyPosts.forEach((f) => {
        if (f.tags.length > 0) {
          f.tags.forEach((g) => {
            allTags.push(g);
          });
        }
      });
    });
    // console.log(allTags)
    const sorted = allTags.sort();
    // console.log(sorted)
    // return sorted
    const uniqueArray = sorted.filter(function (item, pos) {
      return sorted.indexOf(item) == pos;
    });
    return uniqueArray;
  }
}
