import { combineReducers } from '@reduxjs/toolkit';

import ingredients from '../features/ingredients/ingredients-slice';

const rootReducer = combineReducers({
    ingredients,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
