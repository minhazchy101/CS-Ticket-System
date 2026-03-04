import React from 'react';
import bgVector from '../../assets/vector1.png'
import BannerCard from './BannerCard';
const Banner = () => {
    return (
          <div className='flex flex-row justify-around items-center px-6 md:px-16 lg:px-24 py-14 gap-6'>
            <BannerCard bgVector={bgVector}/>
            <BannerCard bgVector={bgVector}/>
      
    </div>
    );
};

export default Banner;