// ── Icons ─────────────────────────────────────────────────────────────────────
export const SunIcon = () => (<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>)
export const MoonIcon = () => (<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>)
export const TrashIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="3,6 5,6 21,6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>)
export const LogoutIcon = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16,17 21,12 16,7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>)
export const SearchIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>)

// ── Logo ──────────────────────────────────────────────────────────────────────
export const AttisLogo = ({ size = 1, white = false }) => {
  const blue = white ? '#ffffff' : '#1a2d6b'
  const sub = white ? 'rgba(255,255,255,0.7)' : '#1a2d6b'
  return (
    <svg width={130 * size} height={48 * size} viewBox="0 0 130 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* A */}
      <text x="0" y="36" fontFamily="'Arial Black', 'Arial Bold', Arial, sans-serif" fontWeight="900" fontSize="40" fill={blue} letterSpacing="-1">A</text>
      {/* tt */}
      <text x="28" y="36" fontFamily="'Arial Black', 'Arial Bold', Arial, sans-serif" fontWeight="900" fontSize="40" fill={blue} letterSpacing="-1">tt</text>
      {/* point doré sur le i */}
      <circle cx="80" cy="8" r="5" fill="#c8922a"/>
      {/* is */}
      <text x="74" y="36" fontFamily="'Arial Black', 'Arial Bold', Arial, sans-serif" fontWeight="900" fontSize="40" fill={blue} letterSpacing="-1">is</text>
      {/* tagline */}
      <text x="0" y="47" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="9" fill={sub} letterSpacing="0.3">La référence Food Packaging</text>
    </svg>
  )
}

// ── Status ────────────────────────────────────────────────────────────────────
export const STATUS = {
  planifiee: { label: 'Planifiée', color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe', dot: '#2563eb' },
  confirmee: { label: 'Confirmée', color: '#d97706', bg: '#fffbeb', border: '#fcd34d', dot: '#d97706' },
  livree:    { label: 'Livrée',    color: '#16a34a', bg: '#f0fdf4', border: '#86efac', dot: '#16a34a' },
}

export const StatusBadge = ({ s }) => {
  const st = STATUS[s] || STATUS.planifiee
  return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:5, padding:'3px 10px', borderRadius:20, fontSize:'0.77rem', fontWeight:700, background:st.bg, color:st.color, border:`1px solid ${st.border}` }}>
      <span style={{ width:6, height:6, borderRadius:'50%', background:st.dot, display:'inline-block' }} />
      {st.label}
    </span>
  )
}

// ── Signature Pad ─────────────────────────────────────────────────────────────
import { useRef, useEffect } from 'react'

export function SignaturePad({ onSave, onCancel, commande }) {
  const canvasRef = useRef(null)
  const drawing = useRef(false)
  const lastPos = useRef(null)

  const getPos = (e, canvas) => {
    const rect = canvas.getBoundingClientRect()
    const src = e.touches ? e.touches[0] : e
    return { x: src.clientX - rect.left, y: src.clientY - rect.top }
  }
  const start = (e) => { e.preventDefault(); drawing.current = true; lastPos.current = getPos(e, canvasRef.current) }
  const move = (e) => {
    e.preventDefault()
    if (!drawing.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const pos = getPos(e, canvas)
    ctx.beginPath(); ctx.moveTo(lastPos.current.x, lastPos.current.y); ctx.lineTo(pos.x, pos.y)
    ctx.strokeStyle = '#1a2d6b'; ctx.lineWidth = 2.5; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.stroke()
    lastPos.current = pos
  }
  const stop = (e) => { e.preventDefault(); drawing.current = false }
  const clear = () => { const c = canvasRef.current; c.getContext('2d').clearRect(0, 0, c.width, c.height) }
  const isEmpty = () => !canvasRef.current.getContext('2d').getImageData(0, 0, canvasRef.current.width, canvasRef.current.height).data.some(v => v !== 0)
  const save = () => { if (isEmpty()) { alert('Veuillez apposer une signature.'); return } onSave(canvasRef.current.toDataURL('image/png')) }

  useEffect(() => {
    const c = canvasRef.current
    c.width = c.parentElement.clientWidth - 48
    c.height = 180
  }, [])

  return (
    <div className="overlay">
      <div className="modal sig-modal">
        <div className="sig-header"><div className="sig-title">Signature du client</div><div className="sig-cmd">{commande}</div></div>
        <p className="sig-hint">Faites signer le client dans le cadre ci-dessous</p>
        <div className="sig-box">
          <canvas ref={canvasRef}
            onMouseDown={start} onMouseMove={move} onMouseUp={stop} onMouseLeave={stop}
            onTouchStart={start} onTouchMove={move} onTouchEnd={stop}
            style={{ cursor:'crosshair', display:'block', touchAction:'none' }} />
        </div>
        <div className="sig-actions">
          <button className="btn-ghost" onClick={clear}>Effacer</button>
          <button className="btn-ghost" onClick={onCancel}>Annuler</button>
          <button className="btn-primary" onClick={save}>Valider la livraison ✓</button>
        </div>
      </div>
    </div>
  )
}
