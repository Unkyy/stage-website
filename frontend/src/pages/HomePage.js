import React, { Fragment } from 'react';
import HeroBanner from 'src/components/herobanner'
import HomePageComponent from 'src/components/HomePage'
import TrailActivities from 'src/components/TrailActivities'

const HomePage = () => {
  return (
    <Fragment>
      <HeroBanner/>
      <TrailActivities />
      <HomePageComponent />
    </Fragment>
  );
};

export default HomePage;
