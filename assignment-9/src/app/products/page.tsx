// main products page

"use client";

import React, { useEffect, useState } from 'react'
import Card from '@/components/Card/Card';
import { Product } from '@/logic/type_card';

const Products = () => {

    const [products, setproducts] = useState<Product[]>();

    const getData = async () => {
        try {
            const response = await fetch("/api/get-products");
            const data = await response.json();
            // console.log(data);
            setproducts(data)
        }
        catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getData();
    },[]);

  return (
    <main>
        <article>
            <section className='py-20 flex flex-row flex-wrap items-center justify-center gap-7 max-sm:gap-1 max-[420px]:gap-[8px] bg-[#e6e7e8]'>
                {
                    products?.map((product:Product, index:number) => {
                        return <Card name={product.name} shortDescription={product.short_description} longDescription={product.long_description} brand={product.brand} availability={product.availability} price={product.price} rating={product.rating} image={product.image} key={index} id={product.id}/>
                    })
                }
            </section>
        </article>
    </main>
  )
}

export default Products