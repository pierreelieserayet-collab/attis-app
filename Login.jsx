import { createContext, useContext, useState } from 'react'

const GROUPS = {
  ADV2024:  { role: 'adv',         label: 'ADV',                     pages: ['suivi', 'agenda'] },
  TOUR8831: { role: 'responsable', label: 'Responsable des tournées', pages: ['suivi', 'agenda', 'tournees', 'livreur'] },
  LIV5517:  { role: 'livreur',     label: 'Livreur',                  pages: ['livreur'] },
}

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => {
    try {
      const saved = sessionStorage.getItem('attis-session')
      return saved ? JSON.parse(saved) : null
    } catch { return null }
  })

  const login = (code) => {
    const group = GROUPS[code.trim().toUpperCase()]
    if (!group) return false
    const s = { code: code.trim().toUpperCase(), ...group }
    setSession(s)
    sessionStorage.setItem('attis-session', JSON.stringify(s))
    return true
  }

  const logout = () => {
    setSession(null)
    sessionStorage.removeItem('attis-session')
  }

  return (
    <AuthContext.Provider value={{ session, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
