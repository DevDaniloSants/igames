import { useEffect, useState } from 'react';
import { useAuthentication } from '../../../hooks/useAuthentication';

// Icons
import { FaUser } from 'react-icons/fa';
import { TbPassword } from 'react-icons/tb';

// Components
import Button from '../Btn/Index';
import { useModalProvider } from '../../../context/ModalContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const { login, error: authError, loading } = useAuthentication();

  const { handleModal } = useModalProvider();

  const handleSumit = async (e) => {
    e.preventDefault();

    setError('');

    const user = {
      email,
      password,
    };

    const res = await login(user);
    if (res) {
      handleModal();
    }
  };

  useEffect(() => {
    setError(authError);
  }, [authError]);

  return (
    <div>
      <form onSubmit={handleSumit}>
        <label>
          <span>Email</span>
          <FaUser />
          <input
            type="email"
            name="email"
            placeholder="Informe o seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha</span>
          <TbPassword />
          <input
            type="password"
            name="password"
            placeholder="Digite a sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {!loading && <Button>Entrar</Button>}
        {loading && <Button disabled={true}>Aguarde...</Button>}
        {error && <span className="error">{error}</span>}
      </form>
    </div>
  );
};

export default LoginForm;
