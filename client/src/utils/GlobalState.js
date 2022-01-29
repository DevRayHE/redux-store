import React
// , { createContext, useContext } 
from "react";

import { Provider, useDispatch  } from 'react-redux';
import store from './store';

import { useProductReducer } from './reducers'

// const StoreContext = createContext();
// const { Provider } = StoreContext;

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: '',
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };

export default function StoreProvider(props) {
  // Return the provider component provided by react-redux
  return <Provider store={store} {...props} />;
}
