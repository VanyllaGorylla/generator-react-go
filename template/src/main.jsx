import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';

// import './vendor/materialize-src/js/bin/materialize';
import 'materialize-css/dist/js/materialize';

import './style/main.scss';

import MainCmp from './js/components/common/main/main.cmp.jsx';

let appDiv = document.getElementById('react-go');

ReactDOM.render(<MainCmp />, appDiv);
