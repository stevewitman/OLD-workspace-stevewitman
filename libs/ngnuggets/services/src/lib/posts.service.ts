import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { PostDetail } from './post-detail';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: PostDetail[] = [
    {
      id: '1',
      slug: '210818A',
      contentType: 'VIDEO',
      contentIcon: 'smart_display',
      title: 'Angular Admin Dashboard Template with Angular Material',
      imgUrl: 'ang1.jpg',
      datePosted: 'TODAY',
      sourceAuthor: 'Decoded Frontend',
      sourceSite: 'youtube.com',
      sourceUrl: 'https://www.youtube.com/watch?v=wPjVWeXSdqU',
      description:
        'In this episode, we cover our 5 most commonly used RxJs operators. Those include the rxjs map, tap, switchmap, takeuntil, and in this episode, we cover our 5 most commonly used RxJs operators. ',
    },
    {
      id: '2',
      slug: '210818B',
      contentType: 'ARTICLE',
      contentIcon: 'article',
      title: 'Angular Crash Course 2021',
      imgUrl: 'ang5.jpg',
      datePosted: 'TODAY',
      sourceAuthor: 'Traversy Media WWWWW',
      sourceSite: 'youtube.com',
      sourceUrl: 'https://www.youtube.com/watch?v=3dHNOWTI7H8',
      description:
        'Learn the fundamentals of Angular in this project-based crash course',
    },
    {
      id: '3',
      slug: '210818C',
      contentType: 'VIDEO',
      contentIcon: 'smart_display',
      title:
        'Observables in Angular - Part 1 (by Steve Witman) - Angular Boulder Meetup (online) - July 13, 2021',
      imgUrl: 'ang6.jpg',
      datePosted: 'TODAY',
      sourceAuthor: 'Angular Boulder Meetup',
      sourceSite: 'youtube.com',
      sourceUrl: 'https://www.youtube.com/watch?v=wPjVWeXSdqU',
      description: '',
    },
    {
      id: '4',
      slug: '210818D',
      contentType: 'ARTICLE',
      contentIcon: 'article',
      title: 'Angular in 100 Seconds',
      imgUrl: 'ang7.jpg',
      sourceAuthor: 'Fireship',
      datePosted: 'TODAY',
      sourceSite: 'youtube.com',
      sourceUrl: 'https://www.youtube.com/watch?v=Ata9cSC2WpM',
      description: '',
    },
    {
      id: '5',
      slug: '210819A',
      contentType: 'VIDEO',
      contentIcon: 'smart_display',
      title: 'Angular Admin Dashboard Template',
      imgUrl: 'ang2.jpg',
      datePosted: 'TODAY',
      sourceAuthor: 'Decoded Frontend',
      sourceSite: 'youtube.com',
      sourceUrl: 'https://www.youtube.com/watch?v=wPjVWeXSdqU',
      description:
        'In this episode, we cover our 5 most commonly used RxJs operators. Those include the rxjs map, tap, switchmap, takeuntil, and in this episode, we cover our 5 most commonly used RxJs operators. ',
    },
    {
      id: '6',
      slug: '210819B',
      contentType: 'ARTICLE',
      contentIcon: 'article',
      title:
        'Angular Admin Dashboard Template with Angular Material Dashboard Template',
      imgUrl: 'ang3.jpg',
      datePosted: 'TODAY',
      sourceAuthor: 'Decoded Frontend',
      sourceSite: 'youtube.com',
      sourceUrl: 'https://www.youtube.com/watch?v=wPjVWeXSdqU',
      description:
        'In this episode, we cover our 5 most commonly used RxJs operators. Those include the rxjs map, tap, switchmap, takeuntil, and in this episode, we cover our 5 most commonly used RxJs operators. ',
    },
    {
      id: '7',
      slug: '210819C',
      contentType: 'ARTICLE',
      contentIcon: 'article',
      title: 'Angular Admin Dashboard Template with Angular Material',
      imgUrl: 'ang9.png',
      datePosted: 'TODAY',
      sourceAuthor: 'Brian F Love',
      sourceSite: 'brianflove.com',
      sourceUrl: 'https://brianflove.com/2020-06-05/angular-transfer-state/',
      description:
        'In this episode, we cover our 5 most commonly used RxJs operators. Those include the rxjs map, tap, switchmap, takeuntil, and in this episode, we cover our 5 most commonly used RxJs operators. ',
    },
    {
      id: '8',
      slug: '210819D',
      contentType: 'VIDEO',
      contentIcon: 'video',
      title: 'Custom RxJS Operators by Example',
      imgUrl: 'ang8.jpg',
      sourceAuthor: 'Fireship',
      datePosted: 'TODAY',
      sourceSite: 'youtube.com',
      sourceUrl: 'https://www.youtube.com/watch?v=JWjXBWINlzU',
      description: 'A guide for building custom RxJS (v6) pipeable operators',
    },
  ];

  getPosts() {
    return of(this.posts);
  }

  getPostBySlug(slug: string) {
    return of(this.posts.find(obj => obj.slug === slug));
  }
}
