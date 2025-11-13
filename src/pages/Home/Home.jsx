import React from 'react';
import Banner from '../../components/Banner/Banner';
import WhyChooseUs from '../../components/whyChoodeUs/WhyChooseUs';
import PopularCourse from '../../components/PopularCourse/PopularCourse';
import TopInstructors from '../../components/TopInstructors/TopInstructors';

const Home = () => {
  return (
    <div>
      <title>SkilledHub || Home</title>
      <Banner></Banner>
      <PopularCourse></PopularCourse>
      <WhyChooseUs></WhyChooseUs>
      <TopInstructors></TopInstructors>
    </div>
  );
};

export default Home;