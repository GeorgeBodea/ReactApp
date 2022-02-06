import { 
  ReactElement,
  createContext,
  useContext, 
  useEffect, 
  useState } from 'react'
import { auth } from '../firebase_config/firebase'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider, 
  signInWithPopup,
  User, 
  UserCredential } from 'firebase/auth'

const AuthContext = createContext<{
  currentUser: User | null,
  register: any,
  login: any,
  logout: any,
  signInWithGoogle: any

}>({
  "currentUser": null,
  "register": register,
  "login": login,
  "logout": logout,
  "signInWithGoogle": signInWithGoogle
})


function register(email: string, password: string): Promise<UserCredential>  {
  return createUserWithEmailAndPassword(auth, email, password)
}

function login(email: string, password: string): Promise<UserCredential>  {
  return signInWithEmailAndPassword(auth, email, password)
}

function logout(): Promise<void>  {
  return signOut(auth)
}

function signInWithGoogle(): Promise<UserCredential> {
  const provider = new GoogleAuthProvider()
  return signInWithPopup(auth, provider)
}



export const useAuth = () => useContext(AuthContext)

export function AuthContextProvider ({children} : any): ReactElement {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user=> {
      setCurrentUser(user)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const value = {
    currentUser,
    register,
    login,
    logout,
    signInWithGoogle
  }

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}