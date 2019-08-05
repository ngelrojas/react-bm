import React from 'react';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Tutorials from './pages/tutorials.jsx';
import Contact from './pages/contact.jsx';
import Blog from './pages/blog.jsx';
import NotFound from './pages/notfound.jsx';
import logo from '../src/img/ar_new.png';
import M from 'materialize-css';


class MainComponent extends React.Component
{
    componentDidMount(){
        let dropDown = document.querySelectorAll('.sidenav-trigger');
 
        let options = {
            constrainWidth: false,
            alignment: 'left',
            inDuration: 300,
            outDuration: 300,
            hover: false,
            coverTrigger: false,
        };

        M.Dropdown.init(dropDown, options);
    }

    render(){
        return(
            <Router>
                <nav className="red darken-4">
                    <div className="nav-wrapper wrapper-center">
                        <Link className="brand-logo"to="/"><img className="logo-main" src={logo} alt="ngel rojas" /></Link>
                        <Link to="#" data-target="mobile-ngel" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                        <div className="search-wrapper">
                            <form className="col s6">
                                <div className="input-field">
                                    <input id="search" className="search-input" type="search" placeholder="search" required />
                                        <i className="material-icons search-i-close">close</i>
                                </div>
                            </form>
                        </div>

                        <ul data-target="mobile-demo" className="right hide-on-med-and-down">
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/tutorials">Tutorials</Link></li>
                            <li><Link to="/about-me">About Me</Link></li>
                            <li><Link to="/contact-me">Contact Me</Link></li>
                        </ul>
                    </div>
             
                </nav>
                <ul className="dropdown-width sidenav" id="mobile-ngel">
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/tutorials">Tutorials</Link>
                    </li>
                    <li>
                        <Link to="/about-me">About Me</Link>
                    </li>
                    <li>
                        <Link to="/contact-me">Contact Me</Link>
                    </li>
                </ul>
                
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/blog" component={Blog}></Route>
                    <Route path="/tutorials" component={Tutorials}></Route>
                    <Route path="/about-me" component={About}></Route>
                    <Route path="/contact-me" component={Contact}></Route>
                    <Route component={NotFound}></Route>
                </Switch> 
                    
            </Router> 
        ); 
    }
}
export default MainComponent;
