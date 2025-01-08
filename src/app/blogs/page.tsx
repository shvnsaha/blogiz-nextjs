import BlogCard from '@/components/ui/BlogCard';
import { BlogPost } from '@/types';
import React from 'react';

const BlogsPage = async() => {

    const res = await fetch('http://localhost:5000/blogs',{
        cache:'no-store'
    });
    const blogs = await res.json();
    return (
        <div className='w-[90%] mx-auto my-10'>
            <h1 className='text-4xl text-center my-5'>All Blogs from <span className='text-accent'>Blogiz</span></h1>
            <p className='text-xl text-center w-2/4 mx-auto'><i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ab molestiae magni quisquam nulla et neque natus ullam eum nisi excepturi odit repellendus, fugit obcaecati sed inventore at doloremque dolorum.</i></p>
            <div className='grid grid-cols-3 gap-4'>
                {
                  blogs.map((blog:BlogPost)=><BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default BlogsPage;