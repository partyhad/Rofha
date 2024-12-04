import React from 'react';

const timelines: { title: string; time: string }[] = [
  {
    title: 'Worship with Us Every Sunday',
    time: 'Sundays - 8:00am to 12:00pm',
  },
 
  {
    title: 'Join Us Every Wednesday for Mid-Week Service',
    time: 'Wednesday - 4pm to 6pm',
  },
  {
    title: 'Join Us Every Friday for Vigil',
    time: 'Friday - 10:00pm to 4:00am',
  },
];

export const serviceTimelines = timelines.map((timeline) => (
  <div key={timeline.title} className='h-[calc(8rem)] overflow-y-hidden'>
    <h2 className='text-[30px] md:text-[40px] lg:text-[50px] mb-[19px] font-normal font-secondary leading-4'>
      {timeline.title}
    </h2>
    <p className='font-secondary text-lg md:text-xl lg:text-[28px] leading-4'>
      {timeline.time}
    </p>
  </div>
));
