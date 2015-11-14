import React from 'react';
import ready from 'domready';
import ReactDom from 'react-dom';
import Hello from './hello.jsx';

ready(() => {
	var root = document.getElementById('container');
	ReactDom.render(<Hello count="111" />, root);
});