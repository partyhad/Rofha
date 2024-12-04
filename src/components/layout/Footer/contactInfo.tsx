import Location from '@/assets/svgs/contact/location.svg';
import Email from '@/assets/svgs/contact/email.svg';
import Phone from '@/assets/svgs/contact/phone.svg';

interface Info {
  icon: string;
  text: string;
  type?: 'email' | 'phone';
  alt: string;
}

const contactInfo: Info[] = [
  {
    icon: Location,
    text: 'OPP. Police College, Oji River, Enugu State.',
    alt: 'Address',
  },
  {
    icon: Email,
    text: 'therockoffaithintl@gmail.com',
    type: 'email',
    alt: 'Email',
  },
  {
    icon: Phone,
    text: '+234 703 219 6433',
    type: 'phone',
    alt: 'Phone',
  },
];

export default contactInfo;
