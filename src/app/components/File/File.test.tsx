import React from 'react';
import ReactDOM from 'react-dom';
import { IFile } from '../../sdk/IGist';
import File from './File';

test("renders without crash", async () => {
  const div = document.createElement("div");
  let file: IFile = await JSON.parse(`{
    "filename": "sample1.ts",
    "type": "video/MP2T",
    "language": "TypeScript",
    "raw_url": "https://gist.githubusercontent.com/rafeyhusain/89f4f5bd00cc952abbde391c3b850eb7/raw/dbd03171c005765ea61e9a9f66267f2028ff9867/sample1.ts",
    "size": 27
    }`);

  ReactDOM.render(<File {...file} />, div);
  ReactDOM.unmountComponentAtNode(div)
})