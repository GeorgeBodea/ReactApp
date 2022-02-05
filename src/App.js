import React from 'react'
import AllRoutes from "./react_components/AppRouters"
import { AuthContextProvider } from './contexts/AppContexts';

function App() {
  return (
      <AuthContextProvider>
        <AllRoutes/>
      </AuthContextProvider>
  );
}

export default App;
