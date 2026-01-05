
export enum ViewType {
  SEARCH = 'SEARCH',
  DATABASE = 'DATABASE',
  HISTORY = 'HISTORY',
  API = 'API',
  BILLING = 'BILLING'
}

export interface ProfileData {
  fullName: string;
  phone: string;
  region: string;
  operator: string;
  dob: string;
  age: number;
  vkId: string;
  snils: string;
  email: string;
  status: 'active' | 'archived' | 'flagged';
}

export interface SearchEntry {
  id: string;
  query: string;
  type: 'Phone' | 'Name' | 'ID' | 'Email';
  timestamp: string;
  status: 'Found' | 'No Results' | 'Scanning';
}

export interface User {
  username: string;
  role: string;
  avatar: string;
  balance: number;
}
