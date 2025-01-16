import Section_2 from '@/components/Section-2/Section-2';
import Section_1 from '@/components/Section-1/Section-1';
import Section_3 from '@/components/Section-3/Section-3';
import Banner from '@/components/Banner/Banner';
import React from 'react';


const Home = () => {
  return (
    <div>
      <br /><br />
      <Banner/>
      <Section_1/>
      <Section_2/>      
      <Section_3/>      
    </div>
  )
}

export default Home;


/* - Develop a basic e-commerce site featuring products, product details, and a shopping cart.
 - Integrate basic API routes for handling products data. 


 1. create a basic landing page  
 3. fetch the products in the backend routes and implement custom number of products routing
 */
