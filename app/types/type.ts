export interface CardEventProps {
  title: string;
  days: string;
  country?: string;
  state?: string;
  city?: string;
  callForPapersUrl?: string;
  imageUrl?: string;
  format: string;
  eventUrl: string;
  tags?: string[];
}
