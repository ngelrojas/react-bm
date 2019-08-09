import React from 'react'
import {Link} from 'react-router-dom'

const DEFAULT_IMAGE ='https://picsum.photos/id/0/200/300'

export const RelatedPosts = ({cover = DEFAULT_IMAGE, path, title, excerpt, category}) =>{
    return(
        <div className="col s2 m2 l2">
            <Link className="related" to={path}>
                <figure className="post-image">
                    <img src={cover} alt={title} className="responsive-img" />
                </figure>
                <span className="post-overlay">
                    <span className="post-title">{title}</span>
                </span>
            </Link> 
        </div>
         
    )
}
