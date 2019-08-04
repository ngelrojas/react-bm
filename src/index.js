import React from 'react';
import ReactDOM from 'react-dom';
// import scss file in the current project
import 'sass/index.scss';
import 'materialize-css/dist/css/materialize.min.css';
//import 'materialize-css/dist/js/materialize.min.js';
import MainComponent from '../components/main.jsx';


ReactDOM.render(
    <MainComponent />, 
    document.getElementById('root')
);
