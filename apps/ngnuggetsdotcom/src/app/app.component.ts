import { Component, OnInit } from '@angular/core';

// import Posts from '../assets/posts-2022-03-LONG.json';
import Tags from '../assets/tag-posts-2022.json';

@Component({
  selector: 'nx-stevewitman-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngnuggetsdotcom';
  tags = Tags;

  ngOnInit() {
    // Posts.forEach(el => {
    //   el.dailyPosts.forEach(post => {
    //     post.tags.forEach((curTag) => {
    //       this.tags.forEach(element => {
    //         if (element.tag === curTag) {
    //           element.posts.push(post.slug)
    //         }
    //       }); 
    //     })
    //   })     
    // })
    // console.log(this.tags);
    console.log('ngOnInit');
    
  }

}