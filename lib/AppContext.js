import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppContextWrapper({ children }) {

    const [state, setState] = useState({})
    
    const dispatch = data => setState({...state, ...data})

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = (props) => useContext(AppContext)