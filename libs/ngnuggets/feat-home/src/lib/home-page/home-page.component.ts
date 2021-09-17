import { Component, OnInit } from '@angular/core';

import { delay } from 'rxjs/operators';

import { PostService } from '@nx-stevewitman/ngnuggets/services';

@Component({
  selector: 'ng-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  posts$;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts$ = this.postService.getPosts().pipe(
      delay(500),
    );
  }
  
  openPostInTab(url: string) {
    this.postService.openSourceInTab(url);
  }
}
