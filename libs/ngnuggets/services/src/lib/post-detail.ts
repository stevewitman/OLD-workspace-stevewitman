export interface PostDetail {
  id: string;
  slug: string; //                  2021-09-01-A
  type: 'video' | 'blog' | 'podcast' | 'community' | 'release'; 
  duration?: string;
  title: string;
  url: string; 
  description: string;
  imgUrl: string;
  datePosted: string;
  dateSource?: string;
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
  notes?: ''
  status?: 'review' | 'post' | 'hold'
}