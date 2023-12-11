import styles from './styles.module.css';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

// Components
import Button from '../FormLogin/Btn/Index';

const CreatePostForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');

  return (
    <form className={styles.form}>
      <label>
        <span>Título</span>
        <input
          type="text"
          name="title"
          required
          placeholder="Adicione um título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        <span>Image</span>
        <input
          type="text"
          name="image"
          required
          placeholder="Adicione uma imagem"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <label>
        <span>Conteúdo</span>
        <textarea
          name="body"
          required
          placeholder="Adicione o seu texto aqui..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </label>
      <label>
        <span>Tags</span>
        <input
          type="text"
          name="tags"
          required
          placeholder="Adicione suas tags separadas por vírgula"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </label>
      <Button>Registrar</Button>
      {/* {!loading && <Button>Registrar</Button>}
        {loading && <Button disabled={true}>Aguarde...</Button>}
        {error && <span className="error">{error}</span>} */}
    </form>
  );
};

export default CreatePostForm;
