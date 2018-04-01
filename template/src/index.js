import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';

import 'materialize-css/dist/js/materialize';

import './style/main.scss';

import MainCmp from '@/components/main/Main.cmp';

let appDiv = document.getElementById('react-go');

ReactDOM.render(<MainCmp />, appDiv);
