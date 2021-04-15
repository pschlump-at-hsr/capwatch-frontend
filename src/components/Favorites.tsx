import React from 'react';
import { Grid } from '@material-ui/core';
import StoreCard from './StoreCard';
import { useStores } from '../hooks/useStores';

function Favorites() {
  //const [stores, setStores] = useState<Array<any>>([]);
  const { stores, setStores } = useStores();

  // useEffect(() => {
  //   const fetchStores = async () => {
  //     setStores(await getStores());
  //   };
  //   fetchStores();
  // }, []);
  //
  // function isFavorite(storeId: number) {
  //   const favoritesString = localStorage.getItem('favorites');
  //   if (favoritesString) {
  //     return JSON.parse(favoritesString).some((entry: { id: number }) => entry.id === storeId);
  //   }
  // }
  //.filter((store: { id: number }) => isFavorite(store.id))

  return (
    <div className="content">
      <Grid container>
        <Grid item xs={12} md={7} sm={7} lg={5}>
          {/*{stores*/}
          {/*  .filter(store.isFavorite == true)*/}
          {/*  .map(*/}
          {/*    (store: {*/}
          {/*      id: number;*/}
          {/*      name: string;*/}
          {/*      currentCapacity: number;*/}
          {/*      maxCapacity: number;*/}
          {/*    }) => (*/}
          {/*      <StoreCard*/}
          {/*        key={store.id}*/}
          {/*        id={store.id}*/}
          {/*        name={store.name}*/}
          {/*        currentCapacity={store.currentCapacity}*/}
          {/*        maxCapacity={store.maxCapacity}*/}
          {/*        isFavorite={true}*/}
          {/*      />*/}
          {/*    )*/}
          {/*  )}*/}
        </Grid>
      </Grid>
    </div>
  );
}

export default Favorites;
