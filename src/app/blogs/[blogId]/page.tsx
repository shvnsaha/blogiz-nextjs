import BlogDetails from '@/components/ui/BlogDetails';
import { BlogPost } from '@/types';
import Image from 'next/image';
import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FaCalendar } from 'react-icons/fa';
interface BlogID {
    params: {
        blogId: string
    }
}

export const generateStaticParams = async() =>{
    const res = await fetch('http://localhost:5000/blogs');
    const blogs = await res.json();
    return blogs.slice(0,3).map((blog:BlogPost)=>({
         blogId:blog.id
    }))

}

const BlogDetailPage = async ({ params }: BlogID) => {


    const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`,{
        cache:'no-store'
    });
    const blog: BlogPost = await res.json();
    console.log(blog);


    return (
        <div>
            <BlogDetails blog={blog}></BlogDetails>
        </div>
    );
};

export default BlogDetailPage;