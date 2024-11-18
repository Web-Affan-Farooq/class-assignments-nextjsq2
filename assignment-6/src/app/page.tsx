import React from 'react';
import Upper_head from '@/components/Header/Upper-head';
import Header from '@/components/Header/Header';
import Hero from '@/components/hero/Hero';
import Section_2 from '@/components/Section-2/Section-2';
import Section_3 from '@/components/Section-3/Section-3';
import Section_4 from '@/components/Section-4/Section-4';
import Section_5 from '@/components/Section-5/Section-5';
import Section_6 from '@/components/Section-6/Section-6';
import Section_7 from '@/components/Section-7/Section-7';
import Section_8 from '@/components/Section-8/Section-8';
import Footer from '@/components/Footer/Footer';
import Footer_next from '@/components/Footer/Footer-next';

const Home = () => {
  return (
    <div>
      <Upper_head/>
      <Header/><br /><br /><br /><br /><br />
      <Hero/>
      <Section_2/>
      <br /><br /><br />
      <Section_3/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Section_4/>
      <br /><br /><br /><br /><br /><br />
      <Section_5/>
      <br /><br /><br /><br />
      <Section_6/>
      <br /><br /><br />
      <Section_7/>
      <br /><br /><br />
      <Section_8/>
      <br /><br /><br />
      <br />
      <Footer/>
      <br /><br />
      <Footer_next/>
    </div>
  )
}

export default Home;