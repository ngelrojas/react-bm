import React from 'react';
import {Link} from 'react-router-dom';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

const Articles = ({ cover = DEFAULT_IMAGE, path, title, excerpt, category }) =>{
    return(
        <div className="col s12 m6 l4 xl4">
            <div className="card">
                <div className="card-image">
                    <Link to={path}>
                        <img src={cover} className="responsive-img" alt="ngel rojas" />
                    </Link>
                    <span className="card-title">{title}</span>
                    <Link className="btn-floating halfway-fab waves-effect waves-light red" to={path}>
                        <i className="material-icons">favorite_border</i>
                    </Link>
                </div>
                <div className="card-content">
                    <span><Link to={category}>Category: {category}</Link></span>
                    <Link to={path} className="txt-link-post">
                        <p>
                            {excerpt} 
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Articles
