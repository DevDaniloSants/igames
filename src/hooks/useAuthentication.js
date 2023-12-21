import { db } from '../firebase/config';

import { useEffect, useState } from 'react';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // cleanup
  const [cancelled, setCancelled] = useState(false);

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const auth = getAuth();

  // Create user

  const createUser = async (data) => {
    checkIfIsCancelled();

    setError('');
    setLoading(true);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      await updateProfile(user, { displayName: data.displayName });
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;

      if (error.message.includes('Password')) {
        systemErrorMessage = 'A senha precisa ter mais de 6 caracteres';
      } else if (error.message.includes('email-already')) {
        systemErrorMessage = 'Email já cadastrado';
      } else {
        systemErrorMessage = 'Ocorreu um erro, tente mais tarde.';
      }

      setError(systemErrorMessage);
    }

    setLoading(false);
  };

  // Sign out
  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
  };

  // Sign in
  const login = async (data) => {
    checkIfIsCancelled();
    setError(false);

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (error) {
      let systemErrorMessage;

      if (error.message.includes('user-not-found')) {
        systemErrorMessage = 'Usuário não encontrado';
      } else if (error.message.includes('wrong-password')) {
        systemErrorMessage = 'Senha incorreta';
      } else {
        systemErrorMessage = 'Ocorreu um erro, tente mais tarde.';
      }

      setError(systemErrorMessage);

      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  };
};
