"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Chunks } from '@/@types/Types';


interface BlogCard {  // types for component
    title:string;
    headline:string;
    dateCreated:string;
    body:Chunks[];
    image:string;
}

const Blog = ({title, headline, dateCreated, body, image}:BlogCard) => {
    const [comment, setcomment] = useState("");    
    const [comments, setComments] = useState([
        ` maxime quibusdam repellendus autem quisquam quos, quam alias .`,
        ` uscipit  commodi sequi autem quam alias mollitia .`,
        `  cum facilis suscipit reprehenderit unde,
        A, volupt.`,
        ` maxim sequi autem quam t atque illum dolorem, vero aque.`,
        ` maxime quibusdambus commodi sequi autem quam alias  .`,
        `mollitia natus ab velit atque anditiis fugit eaque.`,
        ` blanditiis suscipit exercitationem. Volum dolorem, .`,
        ` maxime quibusdam repellenSaepe optio .`,
        ` maxime quibuss fugit eaque.`,
    ]);

    const handleCommentAdd = () => {
        if(comment.trim() !== "") {
            setComments([...comments, comment])
            setcomment("");
            const input = document.querySelector("#comment") as HTMLInputElement;
            input.value = "";
        }
    }

    return (
        <section className='px-[40px] py-[80px] sm:w-[90vw] lg:w-[70vw] xl:w-[60vw] lg:px-[40px] m-auto'>
            <h1 className='font-playfair text-[30px] font-bold'>{title}</h1>
            <br />
            <br />
            <h2 className='text-[19px] font-ubuntu font-semibold'>
               {headline}
            </h2>
            <br />
            <br />
            <Image src={image} alt='banner' width={400} height={400} className='m-auto'/>
            <br />
            <br />
            <div className='flex flex-row flex-nowrap justify-between items-center'>
                <div className='flex flex-row flex-nowrap justify-between items-center gap-2'>
                    <Image src={"/images/author.jpg"} alt='author' width={50} height={50} className='w-[50px] h-[50px] rounded-full' />
                    <span className='font-bold text-[18px] text-black'>Muhammad affan</span>
                </div>
                <span className='text-gray-600 font-normal'>{dateCreated}</span>
            </div>
            <br /><br />
            <div className='font-playfair leading-[35px]'>
                {
                    body.map((chunks:Chunks, index:number) => {
                            return <div key={index}><p>{chunks.children[0].text}</p></div>
                    })
                }
            </div>

            <br /><br /><br />
            <h2 className='text-[20px] font-ubuntu font-semibold'>Comments</h2>
            <br />
            <div>
                {comments.map((comment: string, index: number) => {
                    return <div key={index} className='w-[70vw]'>
                        <div><span className='text-2xl font-bold'>-</span> {comment}</div> <br />
                    </div>
                })}
            </div>
            <br /><br /><br />
            <div className='flex flex-row flex-wrap gap-3 p-2 items-center justify-center max-md:justify-between'>
                <input type="text" name='comment' id='comment' placeholder='Enter your comment' className='w-[70vw] px-[20px] py-2'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setcomment(e.target.value);
                    }}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.code === "Enter") {
                            handleCommentAdd();
                        } else {}
                    }} />
                <button type="button" className='rounded-[20px] bg-orange font-bold text-white text-[15px] px-[20px] py-[7px]' onClick={handleCommentAdd}>Comment</button>
            </div>
        </section>
    )
}

export default Blog;