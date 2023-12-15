import { useEffect, useState } from 'react';

// Hooks
import { useAuthentication } from '../../../hooks/useAuthentication';
import { useModalProvider } from '../../../context/ModalContext';

// icons
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { TbPassword } from 'react-icons/tb';
import Button from '../Btn/Index';

const Register = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');

  const { createUser, error: authError, loading } = useAuthentication();

  const { handleModal } = useModalProvider();

  const handleSumit = async (e) => {
    e.preventDefault();

    setError('');

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError('As senhas precisam ser iguais!');
      return;
    }

    const res = await createUser(user);
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
          <span>Nome</span>
          <FaUser />
          <input
            type="text"
            name="displayName"
            placeholder="Digite seu nome"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>Email</span>
          <MdEmail />
          <input
            type="email"
            name="email"
            placeholder="Informe seu email"
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
        <label>
          <span>Confirmar senha</span>
          <TbPassword />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Digite novamente sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <Button>Registrar</Button>}
        {loading && <Button disabled={true}>Aguarde...</Button>}
        {error && <span className="error">{error}</span>}
      </form>
    </div>
  );
};

export default Register;
