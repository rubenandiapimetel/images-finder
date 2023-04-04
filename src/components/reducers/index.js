import { combineReducers } from 'redux';

//reducers
import fotoReducer from './fotoReducer';
import savedReducer from './savedReducer';

//funcion para compbinar reducers
const appReducer = combineReducers({
	fotos:fotoReducer,
	saved:savedReducer
});

export default appReducer;