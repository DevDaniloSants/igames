import { createContext, useContext } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children, value }) => {
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModalProvider = () => {
  return useContext(ModalContext);
};
