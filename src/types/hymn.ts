import { Route } from "../router/routes";

export type LanguageStackParamList = {
  [Route.TabNavigator]: undefined;
};

export interface Verse {
  verseName: string;
  text: string;
}

export interface HymnBook {
  hymnNumber: number;
  hymnTitle: string;
  verses: Verse[];
}