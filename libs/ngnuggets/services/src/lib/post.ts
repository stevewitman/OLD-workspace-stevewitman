export interface Post {
  id: string;
  slug: string;
  type: 'video' | 'blog' | 'podcast' | 'community' | 'release'; 
  dur?: string;
  title: string;
  url: string; 
  featuring: string;
  desc: string;
  imgUrl: string;
  dAdd: string;
  dSrc: string;
  postedBy: string;
  srcSite: string;
  srcUrl: string;
  aName: string;
  aUrl: string;
  spkrs: string[];
  likes: number;
  tags: string[];
  visits: number;
}