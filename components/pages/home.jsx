import React from 'react'
import Articles from '../posts/articles.jsx'
import Footer from '../footer.jsx'
import Pagination from '../Pagination.jsx'


class Home extends React.Component
{

    render(){
        return (
            <div className="container-main">
                <div className="container">
                    <h1></h1>
                    <Articles />
                    <Articles />
                    <Pagination />
                </div>
                <Footer />
            </div>
            
        ); 
    }
}

export default Home;
