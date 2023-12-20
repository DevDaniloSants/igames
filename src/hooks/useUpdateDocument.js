import { useState, useEffect, useReducer } from 'react';
import { db } from '../firebase/config';
import { updateDoc, doc } from 'firebase/firestore';

const initialState = {
  loading: null,
  error: null,
};

const updateReduce = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { loading: true, error: null };
    case 'UPDTED_DOC':
      return { loading: false, error: null };
    case 'ERROR':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useUpdateDocument = (docCollection) => {
  const [response, dispatch] = useReducer(updateReduce, initialState);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = () => {
    if (cancelled) {
      return;
    }
  };

  const updateDocument = async (id, data) => {
    checkCancelBeforeDispatch();
    console.log(cancelled);
    dispatch({ type: 'LOADING' });

    try {
      const docRef = await doc(db, docCollection, id);

      const updatedDocument = await updateDoc(docRef, data);

      dispatch({
        type: 'UPDATED_DOC',
        payload: updatedDocument,
      });
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error.message });
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { updateDocument, response };
};
