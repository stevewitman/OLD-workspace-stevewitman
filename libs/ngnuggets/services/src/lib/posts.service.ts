import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { PostDetail } from './post-detail';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: PostDetail[] = [
    // -----> TEMPORARY UNTIL FIREBASE CONNECTED <------
    {
      id: '01-a',
      slug: '2021-09-01-a',
      contentType: 'podcast',
      duration: '65',
      contentTitle: 'E065 - Angular & Qwik (The Angular Show Podcast)',
      contentUrl: 'https://www.spreaker.com/user/ng-conf/e065-angular-qwik',
      contentDescription:
        "In this episode of the Angular Show, the panelists (Aaron, Brian, and Jennifer) have the esteemed privilege to be chat with Misko Hevery. In case you haven't heard, Misko is the creator (and sometimes lovingly referred to as the father) of Angular...",
      descriptionBy: '',
      imgUrl: '2021-09-01-a.png',
      datePosted: '2021-09-01',
      dateCreated: '2021-08-26',
      postedBy: 'Steve Witman',
      sourceSite: 'Spreaker',
      sourceUrl: 'https://www.spreaker.com',
      authorName: '',
      authorUrl: 'https://www.spreaker.com/show/angular-show',
      stars: 0,
      tags: ['Kwik'],
    },
    {
      id: '01-b',
      slug: '2021-09-01-b',
      contentType: 'video',
      duration: '95',
      contentTitle:
        'Reactive State Management Using NgRx and Angular (with Brandon Roberts) — Learn With Jason',
      contentUrl: 'https://www.youtube.com/watch?v=gVOwffv4_hA',
      contentDescription:
        'How do you handle local and global state in Angular projects? Brandon Roberts will show us how using Ngrx demo: ...',
      descriptionBy: '',
      imgUrl: '2021-09-01-b.jpg',
      datePosted: '2021-09-01',
      dateCreated: '2021-09-01',
      postedBy: 'Steve Witman',
      sourceSite: 'YouTube',
      sourceUrl: 'https://youtube.com',
      authorName: 'Jason Lengstorf',
      authorUrl: 'https://www.youtube.com/channel/UCnty0z0pNRDgnuoirYXnC5A',
      stars: 0,
      tags: ['NgRx', 'State Management'],
    },
    {
      id: '01-c',
      slug: '2021-09-01-c',
      contentType: 'video',
      duration: '6',
      contentTitle: 'Angular modules - shared and featured',
      contentUrl: 'https://www.youtube.com/watch?v=25XRm8fLPZs',
      contentDescription:
        "Let's see how to use shared and features modules in Angular in practice. Angular Course: ...",
      descriptionBy: '',
      imgUrl: '2021-09-01-c.png',
      datePosted: '2021-09-01',
      dateCreated: '2021-09-01',
      postedBy: 'Steve Witman',
      sourceSite: 'YouTube',
      sourceUrl: 'https://youtube.com',
      authorName: 'Nevyan Neykov',
      authorUrl: 'https://www.youtube.com/c/NevyanNeykov/featured',
      stars: 0,
      tags: ['Modules'],
    },
    {
      id: '01-d',
      slug: '2021-09-01-d',
      contentType: 'blog',
      duration: '',
      contentTitle:
        'When Use RxJS Subject, BehaviourSubject, ReplaySubject, AsyncSubject, or Void Subject in Angular',
      contentUrl:
        'https://hasnode.byrayray.dev/rxjs-subject-behavioursubject-replaysubject-asyncsubject-void-subject-angular',
      contentDescription:
        "Angular has many types of Observables which you can use. Maybe you've seen Subject, BehaviourSubject, ReplaySubject, or AsyncSubject in Angular examples and wondering what they are and when you can use them. In this post, I want to dive deeper into what those types of Subjects are and when you should use them. So buckle up and enjoy the ride.",
      descriptionBy: '',
      imgUrl: '2021-09-01-d.png',
      datePosted: '2021-09-01',
      dateCreated: '2021-09-01',
      postedBy: 'Steve Witman',
      sourceSite: 'hashnode',
      sourceUrl: 'https://hashnode.com',
      authorName: 'Dev by RayRay',
      authorUrl: 'https://hashnode.com/@devbyrayray',
      stars: 0,
      tags: [
        'RxJS',
        'Subject',
        'BehaviourSubject',
        'ReplaySubject',
        'AsyncSubject',
        'Void Subject',
      ],
    },
    {
      id: '01-e',
      slug: '2021-09-01-e',
      contentType: 'blog',
      duration: '',
      contentTitle: 'Angular Module Loading: Eager, Lazy and Preloading',
      contentUrl:
        'https://www.concretepage.com/angular-2/angular-module-loading-eager-lazy-and-preloading',
      contentDescription:
        'This page will walk through Angular module loading example. A module can be loaded eagerly, lazily and preloaded. Eager loading is loading modules before application starts. Lazy loading is loading modules on demand. Preloading is loading modules in background just after application starts. In lazy loading and preloading, modules are loaded asynchronously. ',
      descriptionBy: '',
      imgUrl: '2021-09-01-e.png',
      datePosted: '2021-09-01',
      dateCreated: '2021-09-01',
      postedBy: 'Steve Witman',
      sourceSite: 'ConcretePage.com',
      sourceUrl: 'https://concretepage.com',
      authorName: 'Arvind Rai',
      authorUrl: 'https://www.concretepage.com/angular/',
      stars: 0,
      tags: ['Eager Loading', 'Lazy Loading', 'Preloading'],
    },

    {
      id: '02-b',
      slug: '2021-09-02-b',
      contentType: 'blog',
      duration: '',
      contentTitle: 'Angular ngx Bootstrap Tooltip Component',
      contentUrl:
        'https://www.geeksforgeeks.org/angular-ngx-bootstrap-tooltip-component/',
      contentDescription:
        'Angular ngx bootstrap is a bootstrap framework used with angular to create components with great styling and this framework is very easy to use and is used to make responsive websites. In this article, we will see how to use Tooltip in angular ngx bootstrap.',
      descriptionBy: '',
      imgUrl: '2021-09-02-b.png',
      datePosted: '2021-09-02',
      dateCreated: '2021-09-02',
      postedBy: 'Steve Witman',
      sourceSite: 'GeeksforGeeks',
      sourceUrl: 'https://www.geeksforgeeks.org',
      authorName: 'taran910',
      authorUrl: 'https://auth.geeksforgeeks.org/user/taran910/articles',
      stars: 0,
      tags: ['ngx-bootstrap', 'tooltip'],
    },
    {
      id: '02-c',
      slug: '2021-09-02-c',
      contentType: 'podcast',
      duration: '64',
      contentTitle:
        'RxJS Best Practices in Angular ft. Tomas Trajan – AiA 324 (Adventures in Angular Podcast)',
      contentUrl:
        'https://devchat.tv/adv-in-angular/rxjs-best-practices-in-angular-ft-tomas-trajan-aia-324/',
      contentDescription:
        'Tomas Trajan is a developer from Slovakia living in Switzerland. He talks about his experiences using streams, observables, and RxJS in Angular over the last several years. He gives a few lessons and examples of when and how it should be used in your applications.',
      descriptionBy: '',
      imgUrl: '2021-09-02-c.png',
      datePosted: '2021-09-02',
      dateCreated: '2021-09-02',
      postedBy: 'Steve Witman',
      sourceSite: 'Devchat.tv',
      sourceUrl: 'https://devchat.tv',
      authorName: 'Adventures In Angular',
      authorUrl: 'https://devchat.tv/show/adventures-in-angular/',
      stars: 0,
      tags: ['RxJS'],
    },
    {
      id: '02-d',
      slug: '2021-09-02-d',
      contentType: 'blog',
      duration: '',
      contentTitle: 'Conditionally Load a Module Using Angular Router',
      contentUrl:
        'https://netbasal.com/conditionally-load-a-module-using-angular-router-aff022923850',
      contentDescription:
        'In most cases, a feature flag is used when creating a new version of an existing page rather than adding multiple conditions to our code. When this is the case, we usually prefer to use the same URL for both versions.',
      descriptionBy: '',
      imgUrl: '2021-09-02-d.png',
      datePosted: '2021-09-02',
      dateCreated: '2021-09-02',
      postedBy: 'Steve Witman',
      sourceSite: 'netbasal.com',
      sourceUrl: 'https://netbasal.com',
      authorName: 'Netanel Basal',
      authorUrl: 'https://netbasal.com',
      stars: 0,
      tags: ['conditional load', 'module', 'useFactory'],
    },
    {
      id: '02-a',
      slug: '2021-09-03-a',
      contentType: 'video',
      duration: '45',
      contentTitle:
        'Integrate Firebase Phone Number Authentication with Angular 12 Using an Auto Focus Input Field',
      contentUrl: 'https://www.youtube.com/watch?v=2k1m952Iyk8',
      contentDescription:
        'In this video, you will learn how to integrate phone number authentication sign up with Angular 12(A TypeScript frontend framework) Application using Firebase. The process involves an SMS being sent to the user on their phone and which contains a six-digit code they need to enter into the form to get authenticated and then routed into the dashboard.',
      descriptionBy: '',
      imgUrl: '2021-09-03-a.jpg',
      datePosted: '2021-09-03',
      dateCreated: '2021-09-03',
      postedBy: 'Steve Witman',
      sourceSite: 'YouTube',
      sourceUrl: 'https://www.youtube.com',
      authorName: 'The Code Angle',
      authorUrl: 'https://www.youtube.com/channel/UChi_aILZkMMx8_KlVAsbI7g',
      stars: 0,
      tags: ['Firebase', 'Auth', 'Phone'],
    },
    {
      id: '02-b',
      slug: '2021-09-03-b',
      contentType: 'video',
      duration: '37',
      contentTitle:
        'BärnerJS Talks #5 2021 - Tomas Trajan - The Best Way To Architect Your Angular Libraries',
      contentUrl: 'https://www.youtube.com/watch?v=Ha3eX_LSpfM',
      contentDescription:
        "In this talk we're going to explore how to architect Angular libraries with the help of sub-entries so that our consumers can benefit from the smallest possible bundle size and our teammates from great developer experience when adding additional components and services to the library itself!",
      descriptionBy: '',
      imgUrl: '2021-09-03-b.jpg',
      datePosted: '2021-09-03',
      dateCreated: '2021-09-03',
      postedBy: 'Steve Witman',
      sourceSite: 'YouTube',
      sourceUrl: 'https://www.youtube.com',
      authorName: 'Bärner JS Talks',
      authorUrl: 'https://www.youtube.com/channel/UC1LgUku8iebO4eDNzI2Uf2w',
      stars: 0,
      tags: ['Libraries'],
    },
    {
      id: '02-c',
      slug: '2021-09-03-c',
      contentType: 'blog',
      duration: '',
      contentTitle: 'Simple selection by Angular CDK',
      contentUrl:
        'https://dev.to/tomwebwalker/simple-selection-by-angular-cdk-5dep',
      contentDescription:
        'In my recent projects, I had to implement a table with select all or single row functionality. Angular CDK library has SelectionModel, which makes that selection easy to implement.',
      descriptionBy: '',
      imgUrl: '2021-09-03-c.png',
      datePosted: '2021-09-03',
      dateCreated: '2021-09-03',
      postedBy: 'Steve Witman',
      sourceSite: 'Dev.to',
      sourceUrl: 'https://www.dev.to',
      authorName: 'Tomasz Flis',
      authorUrl: 'https://dev.to/tomwebwalker',
      stars: 0,
      tags: ['Libraries'],
    },
    {
      id: '02-d',
      slug: '2021-09-03-d',
      contentType: 'podcast',
      duration: '37',
      contentTitle:
        'AMP 10: Target Performance at scale with Michael Hladky (Angular Master Podcast)',
      contentUrl: 'https://open.spotify.com/episode/6ua81Sty4bMLWZbUeROi8i',
      contentDescription:
        "Today we're talking about performance. Whether it is important, everyone will answer yes. How easy it is to create an efficient system, the answers will vary. Together with @Michael_Hladky, we will discuss this topic thoroughly. 1. What is the reason you are so interested in web performance?",
      descriptionBy: '',
      imgUrl: '2021-09-03-d.png',
      datePosted: '2021-09-03',
      dateCreated: '2021-09-03',
      postedBy: 'Steve Witman',
      sourceSite: 'Spotify',
      sourceUrl: 'https://open.spotify.com',
      authorName: 'Angular Master Podcast',
      authorUrl: 'https://open.spotify.com/show/1wgZAEEIoRZ8eP78LTbyZf',
      stars: 0,
      tags: ['Performance'],
    },
    {
      id: '03-e',
      slug: '2021-09-03-e',
      contentType: 'video',
      duration: '78',
      contentTitle: 'Games + QA with the Angular Team LIVE',
      contentUrl: 'https://www.youtube.com/watch?v=62wuXalBx8k',
      contentDescription:
        'Join members of the Angular team as we play some games and answer your questions.',
      descriptionBy: '',
      imgUrl: '2021-09-03-e.jpg',
      datePosted: '2021-09-03',
      dateCreated: '2021-09-03',
      postedBy: 'Steve Witman',
      sourceSite: 'YouTube',
      sourceUrl: 'https://youtube.com',
      authorName: 'Angular',
      authorUrl: 'https://www.youtube.com/channel/UCbn1OgGei-DV7aSRo_HaAiw',
      stars: 0,
      tags: [],
    },

    // Games + QA with the Angular Team LIVE https://www.youtube.com/watch?v=62wuXalBx8k
  ];

  getPosts() {
    return of(this.posts.reverse());
  }

  getPostBySlug(slug: string) {
    return of(this.posts.find((obj) => obj.slug === slug));
  }
}
