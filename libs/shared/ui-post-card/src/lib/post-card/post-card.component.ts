import { Component, EventEmitter, Input, Output } from '@angular/core';

import { PostDetail } from '@nx-stevewitman/ngnuggets/services';

@Component({
  selector: 'sh-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
  @Input() post: PostDetail;
  @Output() postClicked = new EventEmitter<string>();

  onPostClicked(value: string) {
    this.postClicked.emit(value);
    console.log('onPostClicked')
  }
}
