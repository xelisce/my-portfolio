import { Block } from "./Block";
export type Project = {
  slug: string;
  title: string;
  src: string;
  description: string;
  start: string;
  end: string;
  techStack: string[];
  skills: string[];
  blocks: Block[];
};

export type ProjectsData = {
  [category: string]: Project[];
};
