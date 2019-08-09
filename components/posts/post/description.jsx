import React from 'react'
import Footer from '../../footer.jsx'
import { RelatedPosts } from '../../related/relatedposts.jsx'
import { FormComment } from './letmecomment.jsx'
import { categories_related } from '../../../db_related.json'
import { Link } from 'react-router-dom'


class Description extends React.Component
{
    state = {
        open: false, 
    }

    showCommentbox = () =>{
        this.setState(state => {
            return{
                open: !state.open, 
            } 
        }) 
    }

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
                        
                        <div className="content-description">
                            <h3 id="one" className="section scrollspy">First title for the description</h3>

                            <p> I think this is a paragraph the five lines, becouse almost pelople reading to 200 line perminut,
                                and I decide write no loger paragraphs, one reason is'nt have boring, just for information and rapdly 
                                comprenhiention, with this blog I want to share my knowledg in programming and more, for example my favorite books,
                                about new tecnologies, of paradigms, one and another music and try podscast. well I spend...!
                                well yesterday in a course of machine learning, I had susprased with one question, it's did say "share with us a motivational phrase with us,
                                for mainte your self inspired", and I shared, my phrase was this, "I love learning, becouse continues learing is grow a personlly and speritually.", well I think forget some words but is almost all.
                                well gays bye it's was a placeru tak to you.</p>

                            <h3 id="two" className="section scrollspy">Second title for more description</h3>
                            <p>
                                well it's another little description, I am feeling fustrated, becouse my life is not good but is not bad, I am promedi people, 
                                or less, I don't know but it's my life, I want more but not for my destruction just for life, I don't have self family, I did say my 
                                wife, my child's, well it's par of my life.
                            </p>
                            <xmp>
                                <code>
                                !#/bin/bash
                                def oparators(x, y)
                                    return x + y
                                </code>                 
                            </xmp>
                            <xmp>
                                <code>
                                !#/bin/bash
                                def oparators(x, y)
                                    return x + y
                                </code>                 
                            </xmp>
                            <xmp>
                                <code>
                                !#/bin/bash
                                def oparators(x, y)
                                    return x + y
                                </code>                 
                            </xmp>

                            <h3 id="three" className="section scrollspy">Threth title for more description</h3>
                            <p><img src="https://picsum.photos/800/300" className="responsive-img" /></p>
                            <p>well it's another little description, I am feeling fustrated, becouse my life is not good but is not bad, I am promedi people, or less, I don't know but it's my life, I want more but not for my destruction just for life, I don't have self family, I did say my wife, my child's, well it's par of my life.
                            </p>
                            
                            <h3 id="four" className="section scrollspy">Fourth title for more description</h3>
                            <p>
                                well it's another little description, I am feeling fustrated, becouse my life is not good but is not bad, I am promedi people, or less, I don't know but it's my life, I want more but not for my destruction just for life, I don't have self family, I did say my wife, my child's, well it's par of my life. 
                            </p>

                            <h3 id="five" className="section scrollspy">Fourth title for more description</h3>
                            <p>
                                well it's another little description, I am feeling fustrated, becouse my life is not good but is not bad, I am promedi people, or less, I don't know but it's my life, I want more but not for my destruction just for life, I don't have self family, I did say my wife, my child's, well it's par of my life. 
                            </p>
                            <p>
                                well it's another little description, I am feeling fustrated, becouse my life is not good but is not bad, I am promedi people, or less, I don't know but it's my life, I want more but not for my destruction just for life, I don't have self family, I did say my wife, my child's, well it's par of my life. 
                            </p>
                            <p>
                                well it's another little description, I am feeling fustrated, becouse my life is not good but is not bad, I am promedi people, or less, I don't know but it's my life, I want more but not for my destruction just for life, I don't have self family, I did say my wife, my child's, well it's par of my life. 
                            </p>
                            <p>
                                well it's another little description, I am feeling fustrated, becouse my life is not good but is not bad, I am promedi people, or less, I don't know but it's my life, I want more but not for my destruction just for life, I don't have self family, I did say my wife, my child's, well it's par of my life. 
                            </p>

                            <h3 id="six" className="section scrollspy">Conclusion</h3>
                            <p>
                                well it's another little description, I am feeling fustrated, becouse my life is not good but is not bad, I am promedi people, or less, I don't know but it's my life, I want more but not for my destruction just for life, I don't have self family, I did say my wife, my child's, well it's par of my life. 
                            </p>
                        </div>

                        <div className="let-me-comment">
                            <h5>Let me a comment</h5>
                            <div className="row">
                                <FormComment />
                            </div>

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
                                    <div className="cart-btn-comment">
                                        <button  className="waves-effect waves-teal btn-flat" onClick={this.showCommentbox} rel="Comment"><i className="material-icons">comment</i></button>
                                        {this.state.open && (
                                            <div className="comment-box">
                                                <form className="col s12" >
                                                    <div className="input-field col s12">
                                                      <textarea id="textarea2" className="materialize-textarea"></textarea>
                                                      <label htmlFor="textarea2">Comment</label>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <button className="waves-effect waves-light btn-small">comment</button> 
                                                        </div>
                                                    </div>
                                                </form>
                                                
                                            </div>
                                        )}
                                    </div>
                                    
                                    </div>
                                </div>
                            </div>

                        </div>
                            
                            
                        </div> 

                    </div>
 
                    <div className="col s3">
                        <aside className="wrapper">
                            <div className="main">
                                
                                <div className="sidebar">
                                     <div className="row">
                                         <div className="col s12 m12">
                                             <div className="card-panel">
                                                 <h4>Table of Contents</h4>
                                                  <ul className="black-text">
                                                      <li> 
                                                        <a href="#one">what are inheritance and composition ?</a>
                                                        
                                                      </li>
                                                      <li>
                                                          <a href="#two">and overview of inheritance in python</a>
                                                      </li>
                                                      <li>
                                                          <a href="#three">Componsition in python</a>
                                                      </li>
                                                      <li>
                                                          <a href="#four">Choosing between inheritnace and composition in python</a>
                                                      </li>
                                                      <li>
                                                          <a href="#five">conclusion</a>
                                                      </li>
                                                      <li>
                                                          <a href="#six">recommended reading</a>
                                                      </li>

                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                </div>
                            </div> 
                        </aside>
                    </div>
                </div>
                <div className="related-post">
                    <div className="row">
                        {
                            categories_related.map(category => <RelatedPosts key={category.id} {...category} />) 
                        }
                    </div>
                    
                </div>
                <Footer />
            </div>
        ) 
    }
}

export default Description

