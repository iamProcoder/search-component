import React, { useState } from 'react';

import SearchResults from './SearchResults';
import { BiSearch } from 'react-icons/bi';
import '../styles/searcBox.css';

const SearchBar = () => {
  const [term, setTerm] = useState(null);

  const searchHandle = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length > 2) {
      setTerm(inputValue);
    }
    else setTerm(null);
  }

  return (
    <>
      <div className="searchBox">
        <BiSearch color="#757575" />
        <input
          type="text"
          name="searchText"
          id="searchText"
          className="searchText"
          placeholder="SEARCH (Client Name / Policy Number)"
          onChange={searchHandle}
        />
      </div>
      <SearchResults searchFilter={term} />
    </>
  );
}

export default SearchBar