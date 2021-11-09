import { Component, OnInit } from '@angular/core';

import { PostService } from '@nx-stevewitman/ngnuggets/services';
import { Post } from '@nx-stevewitman/ngnuggets/services';
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
  tags = [];
  uniqueTags;
  uniqueTagsString = 'init';

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.recentPosts = this.getPosts();
    // this.uniqueTags = this.extractTags(this.recentPosts);
    // this.uniqueTags.forEach((x) => {
      
    //   this.uniqueTagsString += `'${x}', `
    // }) 
    // console.log(this.uniqueTagsString);
    

  }
  
  getPosts() {
    return this.postService.getPosts();
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
            allTags.push(g)
          })
        }
        
      })
    });
    // console.log(allTags)
    const sorted = allTags.sort()
    // console.log(sorted)
// return sorted
    const uniqueArray = sorted.filter(function (item, pos) {
      return sorted.indexOf(item) == pos;
    });
    return uniqueArray
  }

}


