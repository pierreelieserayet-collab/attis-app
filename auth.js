import { useState, useEffect } from 'react'
import { AuthProvider, useAuth } from './lib/auth'
import { AttisLogo, LogoutIcon } from './components/ui'
import Login from './pages/Login'
import Suivi from './pages/Suivi'
import Agenda from './pages/Agenda'
import Tournees from './pages/Tournees'
import Livreur from './pages/Livreur'
import './index.css'

const TABS = [
  { id: 'suivi',    label: '🔍 Suivi',    roles: ['adv', 'responsable'] },
  { id: 'agenda',   label: '📅 Agenda',   roles: ['adv', 'responsable'] },
  { id: 'tournees', label: '📋 Tournées', roles: ['responsable'] },
  { id: 'livreur',  label: '🚚 Livreur',  roles: ['responsable', 'livreur'] },
]

const DEFAULT_TAB = { adv: 'suivi', responsable: 'tournees', livreur: 'livreur' }

function AppInner() {
  const { session, logout } = useAuth()
  const [page, setPage] = useState(null)

  useEffect(() => {
    if (session && !page) {
      setPage(DEFAULT_TAB[session.role])
    }
    if (!session) {
      setPage(null)
    }
  }, [session])

  if (!session) return <Login />

  const tabs = TABS.filter(t => t.roles.includes(session.role))

  return (
    <>
      <nav className="nav">
        <div className="nav-brand">
          <div className="nav-logo-box"><AttisLogo size={0.82} /></div>
          <span className="nav-tagline">Suivi des livraisons</span>
        </div>
        <div className="nav-center">
          <div className="nav-tabs">
            {tabs.map(t => (
              <button key={t.id} className={`nav-tab ${page === t.id ? 'active' : ''}`} onClick={() => setPage(t.id)}>{t.label}</button>
            ))}
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-user">
            <span className="nav-role-badge">{session.label}</span>
            <button className="btn-logout" onClick={logout}><LogoutIcon /> Déconnexion</button>
          </div>
        </div>
      </nav>
      {page === 'suivi'    && <Suivi />}
      {page === 'agenda'   && <Agenda />}
      {page === 'tournees' && <Tournees />}
      {page === 'livreur'  && <Livreur />}
    </>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppInner />
    </AuthProvider>
  )
}
