import { combineReducers } from '@reduxjs/toolkit';

import ingredients from '../features/ingredients/ingredients-slice';
import recepies from '../features/recepies/recepies-slice'

const rootReducer = combineReducers({
    ingredients,
    recepies,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
