export interface Post {
  id: string;
  slug: string;
  type: 'video' | 'blog' | 'podcast' | 'community' | 'release'; 
  duration?: string;
  title: string;
  url: string; 
  featuring: string;
  description: string;
  imgUrl: string;
  datePosted: string;
  dateSource: string;
  postedBy: string;
  sourceSite: string;
  sourceUrl: string;
  authorName: string;
  authorUrl: string;
  speakers: string[];
  likes: number;
  tags: string[];
  visits: number;
}