import React from 'react';
import ServerCard from '@/components/ServerCard/ServerCard';

interface IBook {
  name:string;
  type:string;
  available:boolean;
  id:number;
}
const Server = async () => {
  const response = await fetch("https://simple-books-api.glitch.me/books");
  const data = await response.json();
  

  return (
    <div>
      <div className='flex flex-row flex-wrap gap-5 justify-center items-center'>
        {data.map((book:IBook) => {
          return <ServerCard bookName={book.name} type={book.type} available={book.available} id={book.id} key={book.id}/>
        })}
      </div>
    </div>
  )
}

export default Server