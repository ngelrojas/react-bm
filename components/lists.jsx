import React from 'react'
import Articles from './posts/articles.jsx'
import { categories } from '../db.json'


const ListArticles = () => {
    return(
        <div className="row">
            {
                categories.map( category => <Articles key={category.id} {...category} /> ) 
            } 
        </div>
    )
}

export default ListArticles

