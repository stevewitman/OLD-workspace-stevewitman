export interface PostDetail {
  id: string;
  slug: string; //                  2021-09-01-A
  contentType: 'video' | 'blog' | 'podcast' | 'community'; 
  duration?: string;
  contentTitle: string;
  contentUrl: string; 
  contentDescription: string;
  imgUrl: string;
  datePosted: string;
  dateCreated?: string;
  postedBy: string;
  sourceSite?: string; //           YouTube, Angular University website
  sourceUrl?: string; //            'https://www.youtube.com/'
  authorName?: string; //           Frontend Decoded, Angular University,
  authorUrl?: string; //            channel url, personal website, etc.
  showAddedBy?: true;
  twitter?: string;
  likes?: number;
  featured: boolean;
  tags?: string[];
  visits?: number;
  status: 'wait' | 'block' | 'show',
  notes?: ''
}