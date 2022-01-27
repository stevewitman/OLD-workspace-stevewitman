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
    this.tooltip = `TITLE: ${this.post.title}\n\nDESCRIPTION: ${this.post.description}\n\nSPEAKERS: ${this.post.speakers}\n\nTAGS: ${this.post.tags}\n\nDATE POSTED: ${this.post.datePosted}\n\nDATE CREATED: ${this.post.dateSource}\n\n`;
  }

  onPostClicked(value: string) {
    this.postClicked.emit(value);
  }


}
