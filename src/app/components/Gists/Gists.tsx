import React from 'react';
import Gist from '../Gist/Gist';
import { IGist } from '../../sdk/IGist';

type GistsProps = {
  gists: IGist[];
};

function Gists({ gists }: GistsProps): JSX.Element {
  if (!gists) {
    return <div>Not found</div>
  }

  return <div>
    {
      gists.map((gist: IGist) => <Gist key={gist.id} {...gist}></Gist>)
    }
  </div>;
}

export default Gists;
