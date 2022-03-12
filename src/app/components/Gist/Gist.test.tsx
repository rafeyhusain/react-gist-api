import React from 'react';
import ReactDOM from 'react-dom';
import { IGist } from '../../sdk/IGist';
import Gist from './Gist';

test("renders without crash", ()=> {
  const div = document.createElement("div");
  let gist:IGist = JSON.parse(``);

  ReactDOM.render(<Gist {...gist}/>, div);
  ReactDOM.unmountComponentAtNode(div)
})