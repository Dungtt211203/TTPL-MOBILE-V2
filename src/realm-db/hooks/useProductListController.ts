import {useFocusEffect} from '@react-navigation/native';
import {getData} from '@realm-db/realmdb';
import {useRealm} from '@realm/react';
import {useCallback, useState} from 'react';

export const useProductListController = () => {
  const realm = useRealm();
  const [products, setProducts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      getData('Product', data => setProducts(data), realm);
    }, []),
  );

  const getProducts = () => {
    let arr: any[] = [];
    products.map(i => i.items.forEach((item: any) => arr.push(item)));
    return arr;
  };

  return {
    products,
  };
};
