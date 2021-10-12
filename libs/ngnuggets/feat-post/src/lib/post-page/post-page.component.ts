import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

import { PostDetail, PostService } from '@nx-stevewitman/ngnuggets/services';
// import { PostSummary } from '@nx-stevewitman/ngnuggets/services';
// import { PostDetail } from '@nx-stevewitman/ngnuggets/services';

@Component({
  selector: 'ng-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('400ms ease-in'),
      ]),
    ]),
  ],
})
export class PostPageComponent implements OnInit {
  slug: string;
  post: PostDetail;
  stared = false;
  bookmarked = false;
  likesText = "";

  @Output() postClicked = new EventEmitter<string>();


  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    // this.postService.getPostBySlug(this.slug).subscribe(
    //   val => this.post = val
    // );
  }

  ngOnValueChanges() {
    if (this.post.likes !== 1) {
      this.likesText = this.post.likes + ' LIKES';
    } else {
      this.likesText = this.post.likes + ' LIKE';
    }
  }

  onPostClicked(value: string) {
    this.postClicked.emit(value);
  }

  openPostInTab(url: string) {
    this.postService.openSourceInTab(url);
  }

  toggleStared() {
    this.stared = !this.stared;
  }

  toggleBookmarked() {
    this.bookmarked = !this.bookmarked;
  }

}
