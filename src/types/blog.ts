
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: string;
  authorImage?: string;
  authorRole?: string;
  publishedAt: string;
  tags: string[];
}

export interface BlogCategory {
  name: string;
  slug: string;
}

export interface BlogComment {
  id: number;
  postId: number;
  name: string;
  email: string;
  content: string;
  createdAt: string;
  replies?: BlogComment[];
}
