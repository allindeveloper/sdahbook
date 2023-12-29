import { Route } from "../router/routes";

export type HymnScreenStackParamList = {
  [Route.HymnScreen]: undefined;
};

export interface Verse {
  verseName: string;
  text: string;
  verseNumber?: number;
  isRefrain: boolean;
}

export interface HymnBook {
  hymnNumber: string;
  number: string;
  hymnTitle: string;
  verses: Verse[];
}