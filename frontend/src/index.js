import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Router from './Router';
import './styles/index.css';
import './styles/global.css';
import theme from './styles/index'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => <Router />;
let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <ToastContainer />
      <Provider store={store}>
       <PersistGate persistor={persistor}>
       <App />
       </PersistGate>

      </Provider>
    </ChakraProvider>
  </BrowserRouter>
);