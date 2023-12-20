import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
  QuerySnapshot,
} from 'firebase/firestore';

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);
  let controlled = false;

  useEffect(() => {
    if (controlled) return;
    if (!controlled && cancelled && search) {
      setCancelled(false);
    }
  }, [cancelled, search, controlled]);

  useEffect(() => {
    async function loadData() {
      if (cancelled) return;

      setLoading(true);

      const collectionRef = await collection(db, docCollection);

      try {
        let newQuery;

        if (search) {
          newQuery = await query(
            collectionRef,
            where('tags', 'array-contains', search),
            orderBy('createdAt', 'desc'),
          );
        } else if (uid) {
          newQuery = await query(
            collectionRef,
            where('uid', '==', uid),
            orderBy('createdAt', 'desc'),
          );
        } else {
          newQuery = await query(collectionRef, orderBy('createdAt', 'desc'));
        }

        await onSnapshot(newQuery, (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            })),
          );
        });

        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);

        setLoading(false);
      }
    }

    loadData();
  }, [docCollection, search, uid, cancelled]);

  useEffect(() => {
    return () => {
      setCancelled(true);
      controlled = true;
    };
  }, []);

  return { documents, loading, error };
};
