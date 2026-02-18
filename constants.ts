import { ViewState } from './types';
import { Heart, Home, Download, CreditCard } from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'Home', id: ViewState.HOME, icon: Home },
  { label: 'My Story', id: ViewState.STORY, icon: Heart },
  { label: 'Donate', id: ViewState.DONATE, icon: CreditCard },
  { label: 'Get Logo', id: ViewState.DOWNLOAD, icon: Download },
];

export const HERO_IMAGE = "https://picsum.photos/1920/1080?grayscale&blur=2";