import Spotify from '@/assets/svgs/media/podcasts/spotify.svg';
import Google from '@/assets/svgs/media/podcasts/google.svg';
import Apple from '@/assets/svgs/media/podcasts/apple.svg';
import Overcast from '@/assets/svgs/media/podcasts/overcast.svg';
import PocketCast from '@/assets/svgs/media/podcasts/pocket_cast.svg';
import RadioPublic from '@/assets/svgs/media/podcasts/radio_public.svg';
import { StaticImageData } from 'next/image';

const podcastLinks: {
  icon: StaticImageData;
  link: string;
}[] = [
  {
    icon: Spotify,
    link: 'https://open.spotify.com/',
  },
  {
    icon: Google,
    link: 'https://www.google.com/',
  },
  {
    icon: Apple,
    link: 'https://podcasts.apple.com/us/podcast/',
  },
  {
    icon: Overcast,
    link: 'https://overcast.fm/itunes1253796810/',
  },
  {
    icon: PocketCast,
    link: 'https://pca.st/',
  },
  {
    icon: RadioPublic,
    link: 'https://radiopublic.com/',
  },
];

export default podcastLinks;
