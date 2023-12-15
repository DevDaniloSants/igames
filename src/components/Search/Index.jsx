import { useState } from 'react';
import styles from './Styles.module.css';

import { VscSearch } from 'react-icons/vsc';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('buscando...');
  };
  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="BUSCAR"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>
        <VscSearch />
      </button>
    </form>
  );
};

export default Search;
