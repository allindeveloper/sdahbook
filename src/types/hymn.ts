import { Route } from "../router/routes";

export type HymnScreenStackParamList = {
  [Route.HymnScreen]: undefined;
};

export interface Verse {
  verseName: string;
  text: string;
  verseNumber?: number;
}

export interface HymnBook {
  hymnNumber: string;
  hymnTitle: string;
  verses: Verse[];
}