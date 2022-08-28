import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Post } from '@nx-stevewitman/ngnuggets/services';

@Component({
  selector: 'sh-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() post: Post;
  @Output() postClicked = new EventEmitter<string>();
  likesText: string;
  tooltip: string;

  ngOnInit() {
    this.tooltip = `${this.post.slug}\n\nTITLE:\n${this.post.title}\n\nDESCRIPTION:\n${this.post.desc}\n\nSPEAKERS:\n${this.post.spkrs.toString().replace(/,/g, ', ')}\n\nDATE POSTED:\n${this.post.dAdd}\n\nDATE CREATED:\n${this.post.dSrc}\n\nTAGS:\n${this.post.tags.toString().replace(/,/g, ', ')}\n\n`;
  }

  onPostClicked(value: string) {
    this.postClicked.emit(value);
  }


}
