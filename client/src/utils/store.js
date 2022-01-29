// Creates a redux store that holds the state of the app. Only one store
import { createStore } from 'redux';

// Imporint the reducer file
import { reducers } from './reducers';

export default createStore(reducers);