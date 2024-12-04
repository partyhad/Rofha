import React from 'react';
import VisionImage from '@/assets/images/about/pst20.jpg';
import Image from 'next/image';

const VisionSection = () => {
  return (
    <section id='vision' className='px-primary mt-[118px]'>
      <h2 className='text-center font-bold text-primary text-[30px] md:text-[35px] lg:text-[40px] mb-[51px] font-secondary'>
        Vision and Purpose
      </h2>

      <div className='flex flex-col gap-8 md:flex-row items-center md:items-start text-center md:text-left'>
        <div className='-mt-10 md:flex-[50%]'>
          <Image src={VisionImage} alt='vision' />
        </div>
        <div className='flex flex-col gap-[56px] text-[#00050D] md:flex-[50%]'>
          <div className='flex flex-col gap-1'>
            <p className='font-lg font-secondary font-bold uppercase'>Vision</p>
            <p className='text-2xl'>To become a dynamic, Christ-centered community, where people from all walks of life can encounter God's love and presence and also grow in their faith and relationship with Jesus Christ</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='font-lg font-secondary font-bold uppercase'>core values</p>
            <p className='text-2xl'><b> Love and compassion:</b> To demonstrate God's love and compassion to all the people, regardless of their background or circumstances.            </p>
            <p className='text-2xl'><b>Faith: </b>Encouraging members to live by faith, trusting in God's word and promises.</p>
            <p className='text-2xl'><b>Prayer:</b> We prioritize prayer seeking God's guidance and empowerment.</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='font-lg font-secondary font-bold uppercase'>our purpose</p>
            <p className='text-2xl'>
            <b>To make heaven: </b>To prepare members for eternity with God, emphasizing the importance of salvation and living a righteous life.

            </p>
            <p className='text-2xl'>
            <b>Spiritual guidance:</b>  To provide spiritual guidance, wisdom and insight to individuals, helping them navigate life's challenges. <br></br>
           <b> Prophetic ministry:</b>  To operate in the prophetic ministry sharing words of encouragement, warning and direction from God.



            </p>
            <p className='text-2xl'>
           <b> Counseling and pastoral care: </b> To provide counseling, pastoral care, and support to believers navigating life's challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
