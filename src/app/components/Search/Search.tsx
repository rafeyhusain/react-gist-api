import React, { useState } from 'react';

type OnSearch = (text: string) => void;

type SearchProps = {
  onSearch: OnSearch;
};

function Search({ onSearch }: SearchProps): JSX.Element {
  const [text, setText] = useState('rafeyhusain');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setText(value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onSearch(text)
  };

  return <div className="text-l text-left bg-blue-300">
    <input
      className="ml-2 py-3 px-4 rounded"
      value={text}
      onChange={handleChange}
      placeholder=" e.g. rafeyhusain" />&nbsp;
    <button
      className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}>Search</button>
  </div >;
}

export default Search;
