import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';

import 'materialize-css/dist/js/materialize';

import './style/main.scss';

import MainCmp from './js/components/common/main/Main.cmp.jsx';

let appDiv = document.getElementById('react-go');

ReactDOM.render(<MainCmp />, appDiv);
