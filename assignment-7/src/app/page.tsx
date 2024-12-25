import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Home = () => {


  return (
    <div className='flex flex-col flex-wrap gap-3 justy items-center w-full h-screen'>
<br /><br /><br />
      <div>
      <h1 className='text-2xl font-bold text-black text-center'>Data fetching using client side and server side</h1>
      <br /><br />
      <div className='flex flex-row flex-nowrap gap-3 justify-center items-center'>
      <Link href={"/client"}><Button className="bg-blue-600">Client side</Button></Link>
      <Link href={"/server"}><Button className="bg-blue-600">Server side</Button></Link>
      </div>
      </div>
    </div>
  )
}

export default Home