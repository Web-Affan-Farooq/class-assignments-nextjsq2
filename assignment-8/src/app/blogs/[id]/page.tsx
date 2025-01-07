import React from 'react';
import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/lib/live';
import Blog from '@/components/Blog-page/Blog';
import { IBlogData, Params } from '@/@types/Types';

const ProductsDynamicSegment = async ( {params} : Params) => {

  const {id} = await params;  // --------------------> getting id while resolving promise
  const querry =
    `
  *[_type == 'blog' && _id == '${id}']{
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
  `;  // ----------------------> querry string

  const response = await sanityFetch({query:defineQuery(querry)});
  const blogData:IBlogData = response.data[0];
  // console.log(querry); // ----------> for checking querry string
  // console.log(blogData);// ----------> for checking blogData that is fetched
  // console.log(blogData.title);// ----------> for checking title 
  // console.log(blogData.description);// ----------> for checking description
  // console.log(blogData.bannerImage.asset.url); // ----------> for checking image
  // blogData.blogBody.map((chunks:any) => {
  //   console.log(chunks.children[0].text);
  // })  // ----------> for checking main blog body
  
  return (
    <div>
              <Blog title={blogData.title} headline={blogData.description} dateCreated={"/12/12/12"} body={blogData.blogBody} image={blogData.bannerImage.asset.url}/>
        </div>
  )
}

export default ProductsDynamicSegment