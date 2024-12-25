"use client";

import React, { useEffect, useState, use } from 'react';
import { Button } from '@/components/ui/button';

interface Params {
    params: Promise<{ id: number }>
}

interface ICard {
    category: string;
    description: string;
    price: number;
    title: string;
    rating: {
        rate: number;
        count: number;
    };
    image: string;
    id: number
}
const ProductsPage = ({ params }: Params) => {
    const resolved = use(params);
    const [product, setproduct] = useState<ICard>();

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${Number(resolved.id)}`);
            const data = await response.json();
            setproduct(data)
        }
        getData();
    }, [resolved.id])

    return (
        <div>
            <div className='relative top-56 p-[20px] w-[90vw] lg:w-[70vw] xl:w-[70vw] 2xl:w-[70vw] rounded-xl bg-gray-300 flex flex-row flex-nowrap justify-center items-center gap-3 m-auto max-md:flex-col-reverse'>
                <div className='w-[350px] p-3 max-md:w-[80vw]'>

                    <h1 className='font-bold text-2xl'>{product?.category}</h1>

                    <p>{product?.title}</p>
                    <br />
                    <p className='text-[15px] text-gray-400'>{product?.description}</p>
                    <br />
                    <div>
                        <span className='text-blue-700 text-[24px] font-bold'>${product?.price}</span>
                        <br />

                        <div className='flex flex-row flex-nowrap justify-between items-center'>
                            <div className='flex flex-row flex-nowrap gap-2'>

                                <div>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <div>
                                    <span className='text-gray-500 text-[15px]'>({product?.rating.count})</span>
                                </div>
                            </div>

                            <div>
                                <Button className='bg-blue-700'>Add to cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductsPage;

// import React, { useEffect, useState } from 'react';
// import { Button } from '@/components/ui/button';

// interface Params {
//   params: Promise<{ id: number }>;
// }

// interface ICard {
//   category: string;
//   description: string;
//   price: number;
//   title: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
//   image: string;
//   id: number;
// }

// const Page = ({ params }: Params) => { // Rename to PascalCase
//   const [resolved, setResolved] = useState<number | undefined>(); // Use optional chaining
//   const [product, setProduct] = useState<ICard>();

//   useEffect(() => {
//     const getData = async () => {
//       const response = await fetch(`https://fakestoreapi.com/products/${resolved}`);
//       const data = await response.json();
//       setProduct(data);
//     };

//     if (params) {
//       params.then(data => setResolved(data.id)); // Handle potential undefined params
//     }

//     getData(); // Call getData after setting resolved
//   }, [resolved]); // Only re-run when resolved changes

//   return (
//     <div>
//       <div className='relative top-56 p-[20px] w-[90vw] lg:w-[70vw] xl:w-[70vw] 2xl:w-[70vw] rounded-xl bg-gray-300 flex flex-row flex-nowrap justify-center items-center gap-3 m-auto max-md:flex-col-reverse'>
//         <div className='w-[350px] p-3 max-md:w-[80vw]'>

//           <h1 className='font-bold text-2xl'>{product?.category}</h1>

//           <p>{product?.title}</p>
//           <br />
//           <p className='text-[15px] text-gray-400'>{product?.description}</p>
//           <br />
//           <div>
//             <span className='text-blue-700 text-[24px] font-bold'>${product?.price}</span>
//             <br />

//             <div className='flex flex-row flex-nowrap justify-between items-center'>
//               <div className='flex flex-row flex-nowrap gap-2'>

//                 <div>
//                   <i className="fa-solid fa-star"></i>
//                   <i className="fa-solid fa-star"></i>
//                   <i className="fa-solid fa-star"></i>
//                   <i className="fa-solid fa-star"></i>
//                   <i className="fa-solid fa-star"></i>
//                 </div>
//                 <div>
//                   <span className='text-gray-500 text-[15px]'>({product?.rating.count})</span>
//                 </div>
//               </div>

//               <div>
//                 <Button className='bg-blue-700'>Add to cart</Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;