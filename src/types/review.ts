export type Platform = 'instagram' | 'google';

export interface Review {
  id: string;
  name: string;
  avatarUrl: string;
  text: string;
  rating?: number;
  platform: Platform;
  petPhotoUrl?: string;
  date: string;
}