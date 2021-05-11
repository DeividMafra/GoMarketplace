import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import {Product} from '../pages/Dashboard/styles';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({children}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const prds = await AsyncStorage.getItem('@GoMarketplace:products');

      if (prds) {
        setProducts([...JSON.parse(prds)]);
      }
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    async product => {
      const prdExists = products.find((prd: Product) => prd.id === product.id);

      if (prdExists) {
        setProducts(
          products.map((prd: Product) =>
            prd.id === product.id
              ? {...product, quantity: prd.quantity + 1}
              : prd,
          ),
        );
      } else {
        setProducts([...products, {...product, quantity: 1}]);
      }

      await AsyncStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(products),
      );
    },
    [products],
  );

  const increment = useCallback(
    async id => {
      const newPrdList = products.map((prd: Product) =>
        prd.id === id ? {...prd, quantity: prd.quantity + 1} : prd,
      );

      setProducts(newPrdList);

      await AsyncStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(newPrdList),
      );
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      const newPrdList = products.map((prd: Product) =>
        prd.id === id ? {...prd, quantity: prd.quantity - 1} : prd,
      );

      setProducts(newPrdList);

      await AsyncStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(newPrdList),
      );
    },
    [products],
  );

  const value = React.useMemo(
    () => ({addToCart, increment, decrement, products}),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}

export {CartProvider, useCart};
