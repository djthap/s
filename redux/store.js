import { configurStore } from '@reduxjs/toolkit';
import totalReducer from './reducers/counterReducers';




export const store =configurStore(
    {
        reducer: totalReducer
    }
)