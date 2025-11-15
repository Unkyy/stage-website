import React, { useEffect } from 'react';
import HeroBanner from 'src/components/herobanner'
import TrailActivities from 'src/components/TrailActivities'
import WeeklyPlanning from 'src/components/WeeklyPlanning'
import StaffDescription from 'src/components/StaffDescription'
import ParticipationRequirements from 'src/components/ParticipationRequirements'
import Gallery from 'src/components/Gallery'

const HomePage = () => {
  return (
    <div className='scroll-container'>
      <HeroBanner />
      <TrailActivities />
      <WeeklyPlanning />
      <StaffDescription />
      <ParticipationRequirements />
      <Gallery />
    </div>
  );
};

export default HomePage;
