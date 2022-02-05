import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  ChakraProvider,
  extendTheme,
  theme,
} from '@chakra-ui/react'

const customTheme = extendTheme({
  colors: {
    primary: theme.colors.blue,
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
