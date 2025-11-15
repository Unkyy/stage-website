import React, { Fragment } from 'react';
import HeroBanner from 'src/components/herobanner'
import TrailActivities from 'src/components/TrailActivities'
import WeeklyPlanning from 'src/components/WeeklyPlanning'
import StaffDescription from 'src/components/StaffDescription'
import ParticipationRequirements from 'src/components/ParticipationRequirements'

const HomePage = () => {
  return (
    <div className='scroll-container'>
      <HeroBanner/>
      <TrailActivities />
      <WeeklyPlanning />
      <StaffDescription />
      <ParticipationRequirements />
    </div>
  );
};

export default HomePage;
