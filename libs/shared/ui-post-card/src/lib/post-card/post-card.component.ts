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
    this.tooltip = `${this.post.slug}\n\nTITLE:\n${this.post.title}\n\nDESCRIPTION:\n${this.post.description}\n\nSPEAKERS:\n${this.post.speakers.toString().replace(/,/g, ', ')}\n\nDATE POSTED:\n${this.post.datePosted}\n\nDATE CREATED:\n${this.post.dateSource}\n\nTAGS:\n${this.post.tags.toString().replace(/,/g, ', ')}\n\n`;
  }

  onPostClicked(value: string) {
    this.postClicked.emit(value);
  }


}
