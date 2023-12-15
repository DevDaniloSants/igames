import styles from './styles.module.css';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';

// Components
import Button from '../FormLogin/Btn/Index';

const CreatePostForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState(null);

  const { user } = useAuthContext();

  const navigate = useNavigate();

  const { insertDocument, response } = useInsertDocument('posts');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorMessage = '';

    // validate image
    try {
      new URL(image);
    } catch (error) {
      errorMessage = 'A imagem precisa ser uma URL.';
    }

    // check values
    if (!title || !image || !tags || !body) {
      errorMessage = 'Por favor, preencha todos os campos!';
    }

    // If there's an error, set it and return
    if (errorMessage) {
      setFormError(errorMessage);
      return;
    }

    // create tags array
    const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase());
    // submit the form
    const submissionError = await insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    if (submissionError) {
      setFormError(submissionError);
      return;
    }

    // redirect to home page
    navigate('/');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        <span>Título</span>
        <input
          type="text"
          name="title"
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
      {!response.loading && <Button>Registrar</Button>}
      {response.loading && <Button disabled={true}>Aguarde...</Button>}
      {response.error && <span className="error">{response.error}</span>}
      {formError && <span className="error">{formError}</span>}
    </form>
  );
};

export default CreatePostForm;
