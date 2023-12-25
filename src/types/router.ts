export interface Router {
  screen: React.ComponentType | React.ReactNode | any;
  index: number;
  title: string;
  hideHiderTitle?: boolean;
  route: string;
  gestureEnabled?: boolean;
  showHeader?: boolean;
}
