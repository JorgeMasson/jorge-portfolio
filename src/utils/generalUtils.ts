import { Linking } from 'react-native';
import { Profile } from '../models';

export const getProfileInitials = (name: string) =>
  name
    .split(' ')
    .slice(0, 3)
    .map(part => part[0])
    .join('');

export const openUrl = (url: string) => {
  void Linking.openURL(url);
};

export const getContactLinks = (profile: Profile) => [
  {
    label: 'LinkedIn',
    value: 'jorge-rodrigo-reynoso',
    url: profile.linkedin,
  },
  {
    label: 'GitHub',
    value: 'JorgeMasson',
    url: profile.github,
  },
  {
    label: 'Email',
    value: profile.email,
    url: `mailto:${profile.email}`,
  },
];

export const navigateToHash = (hash: string) => {
  document.getElementById(hash)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
  window.location.hash = hash;
};
