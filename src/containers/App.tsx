import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';

import {store} from '@app/store';
import Main from '@app/views/Main';

const App = () => {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <Main />
      </Provider>
    </NativeBaseProvider>
  );
};
export default App;
