import { createContext, useContext, useEffect, useState} from 'react'
import { auth } from '../utils/firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const AuthContext = createContext({
  currentUser: null,
  register: () => Promise,
})

export const useAuth = () => useContext(AuthContext)

export function AuthContextProvider ({children}) {
  const [currentUser, setCurrentUser] = useState(null)

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const value = {
    currentUser,
    register
  }

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}