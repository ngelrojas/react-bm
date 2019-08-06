import React from 'react'
import ListArticles from '../lists.jsx'
import Pagination from '../Pagination.jsx'
import Footer from '../footer.jsx'


class Blog extends React.Component
{
    render(){
        return(
            <div className="container-main">
                <div className="container">
                    <h1>Blog</h1>
                    <ListArticles />
                    <Pagination />
                </div>
                <Footer />
            </div>
        ) 
    }
}

export default Blog
