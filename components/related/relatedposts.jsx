import React from 'react'
import {Link} from 'react-router-dom'

const DEFAULT_IMAGE ='https://picsum.photos/id/0/200/300'

export const RelatedPosts = ({cover = DEFAULT_IMAGE, path, title, excerpt, category}) =>{
    return( 
        <Link className="carousel-item" to={path}><img src={cover} alt={title} className="responsive-img" /></Link> 
    )
}
