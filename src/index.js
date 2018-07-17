import _ from 'lodash';
import './style.scss';
import tania from './tania.jpg';
import printMe from './print.js';

function component() {
  	var element = document.createElement('div');
  	var btn = document.createElement('button');

	// Lodash, now imported by this script
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;

  	// Add the image to our existing div.
	var myIcon = new Image();
	myIcon.src = tania;

	element.appendChild(myIcon);
	element.appendChild(btn);

  	return element;
}

document.body.appendChild(component());