import { useEffect, useState } from 'react';
import styles from './Styles.module.css';

import { VscSearch } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="BUSCAR POR TAGS"
        value={query}
        onChange={handleInputChange}
      />
      <button>
        <VscSearch />
      </button>
    </form>
  );
};

export default Search;
