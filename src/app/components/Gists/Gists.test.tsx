import React from 'react';
import ReactDOM from 'react-dom';
import { IGist } from '../../sdk/GistsModel';
import Gists from './Gists';

test("renders without crash", ()=> {
  const div = document.createElement("div");
  let gists:IGist[] = JSON.parse(`[{
        "currency":"FJD",
        "precision":2,
        "nameI18N":"Fiji Dollar",
        "exchangeGist":{
          "buy":2.0000000,
          "middle":2.2500000,
          "sell":2.5000000,
          "indicator":0,
          "lastModified":"2012-02-14T23:00:00Z"
        },
        "banknoteGist":{
          "buy":2.2000000,
          "middle":2.4000000,
          "sell":2.6000000,
          "indicator":0,
          "lastModified":"2018-11-06T23:00:00Z"
        },
        "flags":[
          "provided"
        ]
    }]`);

  ReactDOM.render(<Gists item={gists}/>, div);
  ReactDOM.unmountComponentAtNode(div)
})