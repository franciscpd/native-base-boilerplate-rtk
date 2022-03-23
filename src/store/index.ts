import {configureStore} from '@reduxjs/toolkit';

import counterReducer from '@app/modules/counter/counter-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware();
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
