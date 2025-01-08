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

const BlogDetailPage = async ({ params }: BlogID) => {


    const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`);
    const blog: BlogPost = await res.json();
    console.log(blog);


    return (
        <div>
            <BlogDetails blog={blog}></BlogDetails>
        </div>
    );
};

export default BlogDetailPage;