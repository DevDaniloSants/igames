import styles from './Styles.module.css';

import { VscSearch } from 'react-icons/vsc';

const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('buscando...');
  };
  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input type="text" placeholder="BUSCAR" />
      <button>
        <VscSearch />
      </button>
    </form>
  );
};

export default Search;