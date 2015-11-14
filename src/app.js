import React from 'react';
import ready from 'domready';
import ReactDom from 'react-dom';
import Stateless from './stateless.jsx';

ready(() => {
	var root = document.getElementById('container');
	ReactDom.render(<Stateless name="World!"></Stateless>, root);
});