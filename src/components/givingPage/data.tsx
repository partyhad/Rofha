import fcmbIcon from '@/assets/images/giving/fcmb.svg';
import fbnIcon from '@/assets/images/giving/first-bank.svg';
import gtbIcon from '@/assets/images/giving/gtb.svg';
import ubaIcon from '@/assets/images/giving/uba.svg';
import zenithIcon from '@/assets/images/giving/zenith.svg';
import { StaticImageData } from 'next/image';

const offlineChannels: {
  color: string;
  icon: StaticImageData;
  accountName: string;
  accountNumber: string;
}[] = [
 /* {
    accountName: "The Rock of Faith Healing Assembly International",
    accountNumber: '111 1111 111',
    color: '#DE4A09',
    icon: gtbIcon,
  },
  {
    accountName: "The Rock of Faith Healing Assembly International",
    accountNumber: '111 1111 111',
    color: '#5A0B4D',
    icon: fcmbIcon,
  },*/
  {
    accountName: "The Rock of Faith Healing Assembly International",
    accountNumber: '204 173 6443',
    color: '#D61B0C',
    icon: ubaIcon,
  },
 /* {
    accountName: "The Rock of Faith Healing Assembly International",
    accountNumber: '111 1111 111',
    color: '#03476E',
    icon: fbnIcon,
  },
  {
    accountName: "The Rock of Faith Healing Assembly International",
    accountNumber: '111 1111 111',
    color: '#808285',
    icon: zenithIcon,
  },*/
];

export default offlineChannels;
