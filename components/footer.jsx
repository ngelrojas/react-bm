import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
    return(
        <footer className="page-footer">
            <div className="container">
                <div className="footer-copyright">
                    <div className="row"> 
                        <div className="col sm3">
                            <Link to="/">Twitter</Link>
                        </div>
                        <div className="col sm3">
                            <Link to="/">LinkedIn</Link>
                       </div>
                       <div className="col sm3">
                           <Link to="/">Facebook</Link>
                        </div>
                        <div className="col sm3">
                            <Link to="/">github</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col sm12">
                            @2019 Copyright 
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

