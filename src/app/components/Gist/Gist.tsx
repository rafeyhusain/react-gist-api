import React from 'react';
import { IGist, IFile } from '../../sdk/IGist';
import File from '../File/File'

function Gist(gist: IGist): JSX.Element {
  let content: [] = []

  const showFiles = (gist: IGist) => {
    for (const key in gist.files) {
      const file: IFile = gist.files[key]
      content.push(<File key={file.filename} {...file}></File>)
    }
  }

  showFiles(gist)

  return <>
    <div className="grid grid-cols-1 mb-2 align-left bg-gray-300 rounded hover:bg-yellow-100">
      <div>
        {content}
      </div>
    </div>
  </>
}

export default Gist;
