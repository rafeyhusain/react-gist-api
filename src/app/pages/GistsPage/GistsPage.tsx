import React, { useState, useEffect } from 'react';
import Gists from '../../components/Gists/Gists';
import { Gists as GistsModel } from '../../sdk/GistsModel';
import { IGist } from '../../sdk/IGist'
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';

function GistsPage(): JSX.Element {
  const [gists, setGists] = useState<IGist[]>([]);

  const fetchData = async (username: string) => {
    const data = await new GistsModel().get(username);

    await setGists(data);
  };

  useEffect(() => {
    fetchData("rafeyhusain");
  }, []);

  const onSearch = async (text: string) => {
    await fetchData(text);
  };

  let content;

  if (gists.length > 0) {
    content = <Gists gists={gists} />;
  } else {
    content = <h1>No matching gist found</h1>;
  }

  return (
    <div className="flex flex-col bg-gray-200">
      <div>
        <div>
          <Header />
        </div>
        <Search onSearch={onSearch} />
      </div>
      {content}
    </div>
  );
}

export default GistsPage;
