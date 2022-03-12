import React from 'react';
import { IFile } from '../../sdk/IGist';

type FileProps = {
  file: IFile
};

function File(file: FileProps): JSX.Element {
  if (!file) {
    return <></>
  }

  let url = './src/app/assets/images/file.png'

  if (file.language) {
    url = `./src/app/assets/images/${file.language.toLowerCase()}.png`;
  }

  const handleFlagError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = './src/app/assets/images/file.png';
  }

  return <>
    <div className="grid grid-cols-1 m-2 bg-gray-100 rounded-l hover:bg-yellow-200">
      <div>
        <div className="flex flex-cols-1 gap-5">
          <div>
            <img className="align-middle" src={url} alt={file.filename} onError={e => handleFlagError(e)} />
          </div>
          <div className="text-gray-700 font-semibold">
            <a href={file.raw_url} target="_blank">{file.filename}</a>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default File;
