import React, { useState, useEffect } from "react";
import './blog.css';
import BlogCards from "../../components/blogcards/blogcards";
import BlogPage from "../../components/blogpage/blogpage";

export default function Blog() {
    
    const [element, setElement] = useState(null)
    const [posts, setPosts] = useState({})


    useEffect(() => {

        fetch('http://127.0.0.1:5000/api/getPosts')
        .then(res => res.json())
        .then(res => setPosts(res))

    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            fetch('http://127.0.0.1:5000/api/getPosts')
            .then(res => res.json())
            .then(res => setPosts(res))
        }, 10000);


        return () => clearInterval(interval)
    },[posts])

    return (
        <section className="blog-section-blog">
            <div className="blog-container">
                {

                    !element ?  

                    Object.keys(posts).map((route, i) => {
                        return (      
                            <BlogCards
                            key={i}
                            id={posts[route].key}
                            name={route}
                            element={setElement}

                            />
                        )
                    })
                    :
                    <>
                    <BlogPage 
                    id={element}
                    />
                    <p onClick={() => setElement(null)} style={{textDecoration: 'underline', color: 'blue'}}>Regresar</p>
                    </>
                } 
            </div>
        </section>

    );
};