export interface PostDetail {
  id: string;
  slug: string; //                  2021-09-01-A
  contentType: 'video' | 'blog' | 'podcast' | 'question' | 'community' | 'meetup' | 'conference'; 
  duration?: string;
  contentTitle: string;
  contentUrl: string;
  contentDescription: string;
  descriptionBy: string; //         either from source, by submitter, or by ADMIN
  imgUrl: string;
  datePosted: string;
  dateCreated?: string;
  postedBy: string;
  sourceSite?: string; //           YouTube, Angular University website
  sourceUrl?: string; //            'https://www.youtube.com/'
  authorName?: string; //           Frontend Decoded, Angular University,
  authorUrl?: string; //            channel url, personal website, etc.
  addedBy?: string; //              USER who submitted the article
  showAddedBy?: true;
  twitter?: string;
  stars?: number;
  saved?: number;
  tags?: string[];
  visits?: number;
}