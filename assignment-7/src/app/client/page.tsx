"use client";

import ClientCard from '@/components/ClientCard/ClientCard';
import React, {useEffect, useState } from 'react'

interface IProduct {
  category: string;
  description: string;
  image: string;
  price: number;
  id: number
  title: string
  rating: {
    rate: number;
    count: number;
  }
}

const Client = () => {
  const [fetchedData, setfetchedData] = useState<IProduct[]>();

  const getData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();

      setfetchedData(data);

    }
    catch (err) {
      console.error(err)
    }

  }
  useEffect(() => {
    getData();
  }, []);


  return (
    <div className='w-full h-screen'>
      <div className='h-[100vh] overflow-y-auto overflow-x-hidden flex justify-center items-center flex-wrap gap-3 columns-[300px]'>
          {fetchedData?.map((product: IProduct) => {
            return (
              <ClientCard key={product.id} category={product.category} description={product.description} price={product.price} title={product.title} ratings={product.rating} image={product.image} id={product.id} />
            )
          })}
      </div>
    </div>
  )
}

export default Client