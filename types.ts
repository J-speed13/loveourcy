
export interface NavItem {
  label: string;
  id: string;
}

export enum ViewState {
  HOME = 'HOME',
  STORY = 'STORY',
  DONATE = 'DONATE',
  DOWNLOAD = 'DOWNLOAD',
  PRIVACY = 'PRIVACY',
  TERMS = 'TERMS',
  CONTACT = 'CONTACT',
}

export interface ReportFormData {
  name: string;
  location: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}
