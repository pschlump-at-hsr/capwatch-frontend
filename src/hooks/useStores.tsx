import { useState, useEffect } from 'react';
import { getStores } from '../services/storesService';
import { Store } from '../types/store-types';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

export const useStores = () => {
  const [stores, setStores] = useState<Array<Store>>([]);
  const [connection, setConnection] = useState<null | HubConnection>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const isFavorite = (storeId: string) =>
    JSON.parse(localStorage.getItem('favorites') || '{}').some((id: string) => id === storeId);

  useEffect(() => {
    if (!localStorage.getItem('favorites')) localStorage.setItem('favorites', '[]');

    const fetchStores = async () => {
      setIsLoading(true);
      try {
        const storesData = await getStores();
        storesData.forEach((store: { id: string; isFavorite: boolean }) => {
          store.isFavorite = isFavorite(store.id);
        });
        setStores(storesData);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStores();
  }, []);

  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl(
        process.env.REACT_APP_BACKEND_API_URL + '/storeshub' || 'http://locahost:8080/storeshub'
      )
        // TODO LogLevel necessary?
      .configureLogging(LogLevel.Debug)
      .withAutomaticReconnect()
      .build();
    setConnection(connect);
  }, []);

  useEffect(() => {
    if (!isLoading && connection) {
      connection
        .start()
        .then(() => {
          connection.on('new', (message) => {
            if (message.length > 0) {
              // TODO test this and implement reFetching of stores due to received message
              console.log('Message received: ' + message);
            }

          });
        })
          // TODO improve error handling - hasError working?
        .catch((error) => {
          // setHasError(true);
          // TODO fix strange TypeError caused by JS fetch API, no more ideas how we could fix that
          console.log(error)
        });
    }
  }, [connection, isLoading]);

  const changeFavorite = (storeId: string) => {
    const updatedStores = stores.map((store: Store) => {
      if (store.id === storeId) {
        const initialIsFavorite = store.isFavorite;
        store.isFavorite = !initialIsFavorite;

        const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
        if (initialIsFavorite) {
          const index = favorites.indexOf(storeId);
          if (index >= 0) favorites.splice(index, 1);
          localStorage.setItem('favorites', JSON.stringify(favorites));
        } else {
          favorites.push(storeId);
          localStorage.setItem('favorites', JSON.stringify(favorites));
        }
      }
      return store;
    });

    setStores(updatedStores);
  };

  return { stores, isLoading, hasError, changeFavorite };
};
