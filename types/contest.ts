import { Quodra } from "./common";

export interface Contest {
  id: string;
  title: string;
  titleSlug: string;
  time: number;
  company: {
    name?: string;
    description?: string;
    logo?: string;
    slug?: string;
  };

  problemIds: Quodra<string>;
}

export type ContestMap = Record<string, Contest>;
