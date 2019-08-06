import React from 'react'
import ListArticles from '../lists.jsx'
import Footer from '../footer.jsx'
import Pagination from '../Pagination.jsx'


class Home extends React.Component
{

    render(){
        return (
            <div className="container-main">
                <div className="container">
                    <h1></h1>
                    <ListArticles />
                    <Pagination />
                </div>
                <Footer />
            </div>
            
        ) 
    }
}

export default Home;
