import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

import { Observable } from 'rxjs';

import { PostService } from '@nx-stevewitman/ngnuggets/services';
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
  post$: Observable<any>;

  @Output() postClicked = new EventEmitter<string>();

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.post$ = this.postService.getPostBySlug(this.slug);
  }

  onPostClicked(value: string) {
    this.postClicked.emit(value);
  }
}
