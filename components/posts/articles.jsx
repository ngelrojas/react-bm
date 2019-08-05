import React from 'react';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';

const Articles = () =>{
    return(
        <div className="row">
            <div className="col s12 m6 l4 xl4">
                <div className="card">
                    <div className="card-image">
                        <Link to="/">
                            <img src="https://picsum.photos/id/1010/5184/3456" className="responsive-img" alt="ngel rojas" />
                        </Link>
                        <span className="card-title">Card title</span>
                        <Link className="btn-floating halfway-fab waves-effect waves-light red" to="/">
                            <i className="material-icons">favorite_border</i>
                        </Link>
                    </div>
                    <div className="card-content">
                        <Link to="/" className="txt-link-post">
                            <p>
                                this is a very simple card and atractive for this theme fake, 
                                this is a very simple card and atractive for this theme fake,
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col s12 m6 l4 xl4">
                <div className="card">
                    <div className="card-image">
                        <Link to="/">
                            <img src="https://picsum.photos/id/1010/5184/3456" className="responsive-img" alt="ngel rojas" />
                        </Link>
                        <span className="card-title">Card title</span>
                        <Link className="btn-floating halfway-fab waves-effect waves-light red" to="/">
                            <i className="material-icons">favorite_border</i>
                        </Link>
                    </div>
                    <div className="card-content">
                        <Link to="/" className="txt-link-post">
                            <p>
                                this is a very simple card and atractive for this theme fake, 
                                this is a very simple card and atractive for this theme fake,
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col s12 m6 l4 xl4">
                <div className="card">
                    <div className="card-image">
                        <Link to="/">
                            <img src="https://picsum.photos/id/1010/5184/3456" className="responsive-img" alt="ngel rojas" />
                        </Link>
                        <span className="card-title">Card title</span>
                        <Link className="btn-floating halfway-fab waves-effect waves-light red" to="/">
                            <i className="material-icons">favorite_border</i>
                        </Link>
                    </div>
                    <div className="card-content">
                        <Link to="/" className="txt-link-post">
                            <p>
                                this is a very simple card and atractive for this theme fake, 
                                this is a very simple card and atractive for this theme fake,
                            </p>
                        </Link> 
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Articles
