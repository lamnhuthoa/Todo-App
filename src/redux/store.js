// import { legacy_createStore as createStore} from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducer';

// const composeEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composeEnhancers);

// export default store;

import { configureStore } from '@reduxtjs/toolkit'
import filtersReducer from '../components/Filters/FiltersSlice'
import todoListReducer from '../components/Todo/TodoSlice'

const store = configureStore({
    reducer: {
        filters: filtersReducer,
        todoList: todoListReducer,
    },
});

export default store;