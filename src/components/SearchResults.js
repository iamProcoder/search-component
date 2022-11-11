import React, { useEffect, useState } from 'react'

import getData from '../services/user.service';
import ResultItems from './ResultItems';
import '../styles/searchResult.css';

const SearchResults = ({ searchFilter }) => {

  const [users, setUsers] = useState([]);
  useEffect(() => {     
    const data = getData(searchFilter);
    setUsers(data);
  }, [searchFilter])

  return (
    <>
      {
        searchFilter && (
          <div className='searchResult'>
            <ul>
              {users.map(u => <ResultItems key={u.id} user={u} />)}
            </ul>
          </div>
        )
      }    
    </>
  )
}

export default SearchResults