import React from 'react';
import Card from '../Card-small/Card';
import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/lib/live';
import { IBlogData } from '@/@types/Types';

const querry = defineQuery(
  `
*[_type == 'blog']{
  title,
  description,
  _id,
  bannerImage,
  blogBody[]{
    _key,
    style,
    children[]{
    text,
    },
  },
  bannerImage{
    asset-> {
      url,
      _id
    }
  },
}
`
);

const Banner = async () => {
  const {data} = await sanityFetch({query:querry});
  
  // console.log(data[0].bannerImage.asset.url);  //----------> for checking image
  // console.log(data[0].title);  //----------> for checking blog title
  // console.log(data); // ----------> for checking incoming data
  
  return (
    <section className='p-6'>
        <h1 className='text-4xl font-bold font-ubuntu'>Explore my <span className='text-orange'>Blogs</span></h1>
        <br />
        <br />
        <br />
        <div className='2xl:w-[80vw] xl:w-[80vw] lg:w-[80vw] md:w-[80vw] sm:w-[80vw] flex flex-col flex-wrap justify-start items-start gap-5 p-[5px]'>
          {
            data.map((blog:IBlogData,index:number) => {
              return <Card image={blog.bannerImage.asset.url} key={index} title={blog.title} id={blog._id}/>//blog.bannerImage.asset.url
            })
          }
        </div>
    </section>
  )
}

export default Banner;