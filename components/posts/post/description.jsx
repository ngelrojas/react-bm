import React from 'react'
import Footer from '../../footer.jsx'


class Description extends React.Component
{ 

    render(){
        return(
            <div className="container-main">
                <div className="parallax-container">
                    <div className="parallax"><img src="https://picsum.photos/id/870/2500/1000" className="responsive-img" alt="ngel rojas" /></div>
                </div>
                <div className="container">
                    <h1 className="description-title">My tutorial or blog description</h1> 
                </div>
                <div className="row container-description">
                    <div className="col s3">left-side</div>
                    <div className="col s6">
                        
                        <p className="description-intro">
                            A Bootstrap is one of most Framework used around the world, for front-end programers,
                            called, junior and startup's begging.
                        </p>
                        <div className="description-author">

                            <div className="col s12 m12"> 
                                <div className="card horizontal card-author">
                                    <div className="card-image">
                                        <img src="https://lorempixel.com/100/100/nature/6" className="img-round responsive-img" />
                                    </div>
                                    <div className="card-stacked">

                                    <div className="card-content">
                                        <p>author: Ngel Rojas</p>
                                        <p>I am a very simple card. I am good at containing small bits of information.</p>
                                    </div>
                                    
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col s3">right side</div>
                </div>
                <Footer />
            </div>
        ) 
    }
}

export default Description

