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
  uniqueSpeakers;

  constructor(private postService: PostService) {}

  ngOnInit() {
    // this.getPosts('03').subscribe((data) => {
    //   this.recentPosts = data;
    // });
    this.getPosts().subscribe((data) => {
      this.recentPosts = data;
    });
    
  }

  // getPosts(m) {
  //   return this.postService.getPosts(m);
  // }
  getPosts() {
    const posts = this.postService.getPosts();
    this.extractSpeakers(posts);
    return posts;
  }

  getMorePosts() {
    console.log('recentPosts BEFORE:', this.recentPosts);
    // this.getPosts('02').subscribe((data) => {
    //   this.recentPosts2 = data;
    //   console.log('MORE:', this.recentPosts2);
    //   this.recentPosts = [...this.recentPosts2, ...this.recentPosts];
    //   console.log('recentPosts AFTER:', this.recentPosts);
    // });
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

  extractSpeakers(postGroups) {
    console.log('SPEAKERS');
    
    const allSpeakers = [];
    console.log(postGroups);
    postGroups.forEach((e) => {
      
      e.dailyPosts.forEach((f) => {
        if (f.spkrs && f.spkrs.length > 0) {
          f.spkrs.forEach((g) => {
            console.log(f.slug, g);
            
            allSpeakers.push(g);
          });
        }
      });
    });
    const sorted = allSpeakers.sort();
    const uniqueArray = sorted.filter(function (item, pos) {
      return sorted.indexOf(item) == pos;
    });
    return uniqueArray;
  }
}
