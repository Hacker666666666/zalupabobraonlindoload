
import React from 'react';
import { Search, History, Terminal, Wallet } from 'lucide-react';
import { ProfileData, SearchEntry, ViewType } from './types';

export const COLORS = {
  obsidian: '#0D0D0E',
  slate: '#1A1A1C',
  lavender: '#B794F4',
  electricPurple: '#9F7AEA',
};

export const MOCK_PROFILE: ProfileData = {
  fullName: 'Lapkin Alexandr Sergeevich',
  phone: '+7 (912) 456-78-90',
  region: 'Moscow Region',
  operator: 'MTS PJSC',
  dob: '1988-05-14',
  age: 35,
  vkId: 'id284910384',
  snils: '123-456-789 01',
  email: 'a.lapkin@cybermail.ru',
  status: 'active',
};

export const MOCK_HISTORY: SearchEntry[] = [
  { id: '1', query: '+79124567890', type: 'Phone', timestamp: 'Oct 24, 14:22', status: 'Found' },
  { id: '2', query: 'Lapkin Alexandr', type: 'Name', timestamp: 'Oct 24, 14:15', status: 'Found' },
  { id: '3', query: 'unknown@email.com', type: 'Email', timestamp: 'Oct 23, 09:10', status: 'No Results' },
];

export const NAV_ITEMS = [
  { id: ViewType.SEARCH, icon: <Search size={22} />, label: 'Search' },
  { id: ViewType.HISTORY, icon: <History size={22} />, label: 'History' },
  { id: ViewType.API, icon: <Terminal size={22} />, label: 'API' },
  { id: ViewType.BILLING, icon: <Wallet size={22} />, label: 'Wallet' },
];
