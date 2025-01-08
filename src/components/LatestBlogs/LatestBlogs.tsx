import { BlogPost } from '@/types';
import React from 'react';
import LatestBlogCard from '../ui/LatestBlogCard';
import BlogCard from '../ui/BlogCard';

const LatestBlogs = ({blogs}:{blogs: BlogPost[]}) => {
    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-4xl text-center my-5'>Latest Blogs from <span className='text-accent'>Blogiz</span></h1>
            <p className='text-xl text-center w-2/4 mx-auto'><i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ab molestiae magni quisquam nulla et neque natus ullam eum nisi excepturi odit repellendus, fugit obcaecati sed inventore at doloremque dolorum.</i></p>

            <div className='grid grid-cols-2 gap-4 my-5'>
                {
                    blogs.slice(0,2).map((blog:BlogPost)=><LatestBlogCard key={blog.id} blog={blog}></LatestBlogCard>)
                }
            </div>

            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                    blogs.slice(2,5).map((blog:BlogPost)=><BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default LatestBlogs;