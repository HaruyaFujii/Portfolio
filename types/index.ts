export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  date: string;
};

export type Activity = {
  id: string;
  title: string;
  period: string;
  description: string;
  url: string;
  type: 'education' | 'research' | 'work' | 'other';
  image?: string;
};