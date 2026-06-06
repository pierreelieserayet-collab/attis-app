@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;600;700&family=Source+Serif+4:wght@700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --navy: #1a2d6b;
  --navy-dark: #122057;
  --navy-mid: #213580;
  --gold: #e8a030;
  --bg: #f4f6fb;
  --bg2: #eaeef8;
  --border: #d0d8ef;
  --text: #1a2340;
  --muted: #6b7a9e;
  --green: #16a34a;
  --green-bg: #f0fdf4;
  --red: #c0392b;
  --red-bg: #fdf0ee;
  --sun: #d97706;
  --sun-bg: #fef3c7;
  --moon: #2563eb;
  --moon-bg: #eff6ff;
  --radius: 10px;
}

body { font-family: 'Source Sans 3', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; }

/* NAV */
.nav { background: var(--navy); display: flex; align-items: center; justify-content: space-between; padding: 0 20px; height: 66px; box-shadow: 0 2px 12px rgba(26,45,107,0.2); position: sticky; top: 0; z-index: 100; gap: 12px; }
.nav-brand { display: flex; align-items: center; flex-shrink: 0; }
.nav-logo-box { background: white; border-radius: 8px; padding: 5px 10px; display: flex; align-items: center; box-shadow: 0 1px 6px rgba(0,0,0,0.18); }
.nav-tagline { color: rgba(255,255,255,0.45); font-size: 0.68rem; letter-spacing: 0.04em; margin-left: 10px; }
.nav-center { flex: 1; display: flex; justify-content: center; }
.nav-tabs { display: flex; gap: 4px; }
.nav-tab { padding: 7px 13px; border-radius: 7px; border: none; cursor: pointer; font-family: 'Source Sans 3', sans-serif; font-size: 0.82rem; font-weight: 600; transition: all 0.18s; background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.65); }
.nav-tab:hover { background: rgba(255,255,255,0.15); color: #fff; }
.nav-tab.active { background: var(--gold); color: var(--navy-dark); }
.nav-right { flex-shrink: 0; }
.nav-user { display: flex; align-items: center; gap: 8px; }
.nav-role-badge { background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.8); font-size: 0.72rem; font-weight: 700; padding: 4px 10px; border-radius: 20px; white-space: nowrap; }
.btn-logout { display: flex; align-items: center; gap: 5px; padding: 6px 12px; border-radius: 7px; border: 1px solid rgba(255,255,255,0.2); background: transparent; color: rgba(255,255,255,0.65); cursor: pointer; font-family: 'Source Sans 3', sans-serif; font-size: 0.78rem; font-weight: 600; transition: all 0.18s; }
.btn-logout:hover { background: rgba(255,255,255,0.1); color: white; }

/* PAGES */
.page { max-width: 920px; margin: 0 auto; padding: 32px 18px; }
.page-adv { max-width: 580px; }
.page-agenda { max-width: 1100px; }

.page-hero { background: linear-gradient(135deg, var(--navy) 70%, var(--navy-mid)); color: white; border-radius: var(--radius); padding: 26px 28px; margin-bottom: 24px; position: relative; overflow: hidden; }
.page-hero::before { content: ''; position: absolute; top: -30px; right: -30px; width: 130px; height: 130px; border-radius: 50%; background: rgba(232,160,48,0.1); }
.page-hero h2 { font-family: 'Source Serif 4', Georgia, serif; font-size: 1.45rem; margin-bottom: 5px; }
.page-hero p { color: rgba(255,255,255,0.62); font-size: 0.86rem; }
.hero-stats { display: flex; gap: 16px; margin-top: 14px; flex-wrap: wrap; }
.hstat { font-size: 0.82rem; font-weight: 600; }

/* FLASH */
.flash { padding: 11px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 0.88rem; font-weight: 600; }
.flash-ok { background: var(--green-bg); color: var(--green); border: 1px solid #86efac; }
.flash-error { background: var(--red-bg); color: var(--red); border: 1px solid #f1b9b3; }

/* CARD */
.card { background: white; border: 1px solid var(--border); border-radius: var(--radius); padding: 22px; }
.card-title { font-size: 0.82rem; font-weight: 700; color: var(--navy); text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 16px; }
.form-card { margin-bottom: 24px; }

/* FORM */
.form-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px; }
@media (max-width: 600px) { .form-grid { grid-template-columns: 1fr; } }
.field label { display: block; font-size: 0.73rem; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 6px; }
input, select { width: 100%; padding: 10px 12px; border-radius: 8px; border: 1.5px solid var(--border); background: var(--bg); color: var(--text); font-family: 'Source Sans 3', sans-serif; font-size: 0.9rem; outline: none; transition: border-color 0.18s; }
input:focus, select:focus { border-color: var(--navy); background: white; }
input::placeholder { color: #b0bbd4; }
.toggle-group { display: flex; gap: 7px; }
.toggle-btn { flex: 1; display: flex; align-items: center; justify-content: center; gap: 5px; padding: 9px 7px; border-radius: 8px; border: 1.5px solid var(--border); background: var(--bg); color: var(--muted); cursor: pointer; font-family: 'Source Sans 3', sans-serif; font-size: 0.83rem; font-weight: 600; transition: all 0.18s; }
.toggle-btn:hover { border-color: var(--navy); color: var(--navy); }
.toggle-btn.active { background: var(--navy); border-color: var(--navy); color: white; }
.form-actions { display: flex; justify-content: flex-end; gap: 10px; }

/* BUTTONS */
.btn-primary { padding: 10px 22px; border-radius: 8px; border: none; cursor: pointer; background: var(--navy); color: white; font-family: 'Source Sans 3', sans-serif; font-size: 0.9rem; font-weight: 700; transition: all 0.18s; white-space: nowrap; }
.btn-primary:hover { background: var(--navy-mid); }
.btn-ghost { padding: 9px 18px; border-radius: 8px; border: 1.5px solid var(--border); background: transparent; color: var(--muted); cursor: pointer; font-family: 'Source Sans 3', sans-serif; font-size: 0.88rem; font-weight: 600; transition: all 0.18s; }
.btn-ghost:hover { border-color: var(--navy); color: var(--navy); }
.btn-danger { padding: 9px 18px; border-radius: 8px; border: none; cursor: pointer; background: var(--red); color: white; font-family: 'Source Sans 3', sans-serif; font-size: 0.88rem; font-weight: 700; }
.btn-status { padding: 5px 12px; border-radius: 6px; border: none; cursor: pointer; font-family: 'Source Sans 3', sans-serif; font-size: 0.78rem; font-weight: 700; transition: all 0.18s; }
.btn-status-confirm { background: #f0fdf4; color: var(--green); border: 1px solid #86efac; }
.btn-status-confirm:hover { background: var(--green); color: white; }
.btn-status-undo { background: #fef3c7; color: #92400e; border: 1px solid #fcd34d; }
.btn-status-undo:hover { background: #d97706; color: white; }
.btn-deliver { width: 100%; padding: 14px; border-radius: 9px; border: none; cursor: pointer; background: var(--navy); color: white; font-family: 'Source Sans 3', sans-serif; font-size: 1rem; font-weight: 700; transition: all 0.18s; }
.btn-deliver:hover { background: var(--navy-mid); transform: translateY(-1px); }

/* PILLS */
.pill { display: inline-flex; align-items: center; gap: 5px; padding: 3px 10px; border-radius: 20px; font-size: 0.78rem; font-weight: 700; }
.pill-sun { background: var(--sun-bg); color: var(--sun); }
.pill-moon { background: var(--moon-bg); color: var(--moon); }

/* PLANNING */
.planning-wrap { display: flex; flex-direction: column; gap: 8px; }
.day-block { background: white; border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }
.day-label { padding: 9px 16px; font-size: 0.73rem; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; color: white; background: var(--navy); border-bottom: 3px solid var(--gold); display: flex; align-items: center; gap: 8px; }
.day-count { background: rgba(255,255,255,0.2); padding: 1px 7px; border-radius: 10px; font-size: 0.7rem; }
.row-delivery { display: flex; align-items: center; gap: 12px; padding: 11px 16px; border-bottom: 1px solid var(--bg2); transition: background 0.12s; flex-wrap: wrap; }
.row-delivery:last-child { border-bottom: none; }
.row-delivery:hover { background: var(--bg); }
.cmd-mono { font-family: 'Courier New', monospace; font-size: 0.9rem; font-weight: 700; color: var(--navy); min-width: 100px; }
.row-actions { display: flex; gap: 6px; margin-left: auto; align-items: center; flex-wrap: wrap; }
.icon-btn { width: 30px; height: 30px; border-radius: 6px; border: 1px solid var(--border); background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--muted); font-size: 0.8rem; transition: all 0.15s; }
.icon-btn:hover { border-color: var(--navy); color: var(--navy); background: var(--bg2); }
.icon-btn.red:hover { border-color: var(--red); color: var(--red); background: var(--red-bg); }
.empty { padding: 50px; text-align: center; color: var(--muted); font-size: 0.9rem; background: white; border: 1px solid var(--border); border-radius: var(--radius); }

/* SEARCH */
.search-card { margin-bottom: 20px; }
.search-row { display: flex; gap: 10px; }
.search-input { font-family: 'Courier New', monospace !important; font-size: 0.97rem !important; font-weight: 700 !important; }

/* RESULT */
.result-card { display: flex; align-items: flex-start; gap: 16px; }
@keyframes popIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
.result-ok { border-color: #86efac; }
.result-ko { border-color: #f1b9b3; }
.result-check { width: 40px; height: 40px; border-radius: 50%; background: var(--green-bg); color: var(--green); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; font-weight: 900; flex-shrink: 0; }
.result-x { width: 40px; height: 40px; border-radius: 50%; background: var(--red-bg); color: var(--red); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; font-weight: 900; flex-shrink: 0; }
.result-cmd { font-family: 'Courier New', monospace; font-size: 1.15rem; font-weight: 700; color: var(--navy); margin-bottom: 10px; }
.result-row { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
.result-block { display: flex; flex-direction: column; gap: 3px; }
.result-sep { width: 1px; height: 34px; background: var(--border); }
.rlabel { font-size: 0.7rem; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 0.07em; }
.rvalue { font-size: 0.93rem; font-weight: 700; color: var(--text); display: flex; align-items: center; gap: 4px; }
.hint { color: var(--muted); font-size: 0.82rem; margin-top: 4px; }
.sig-preview { margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border); }
.delivered-msg { background: #f0fdf4; color: var(--green); border: 1px solid #86efac; padding: 12px 16px; border-radius: 8px; font-weight: 700; font-size: 0.9rem; text-align: center; }

/* MODAL */
.overlay { position: fixed; inset: 0; background: rgba(26,45,107,0.5); display: flex; align-items: center; justify-content: center; z-index: 200; padding: 16px; }
.modal { background: white; border-radius: var(--radius); padding: 24px; max-width: 340px; width: 100%; box-shadow: 0 8px 40px rgba(26,45,107,0.25); }
.modal p { margin-bottom: 18px; font-size: 0.95rem; font-weight: 600; }
.modal-btns { display: flex; justify-content: flex-end; gap: 10px; }
.sig-modal { max-width: 480px; }
.sig-header { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; }
.sig-title { font-size: 1rem; font-weight: 700; color: var(--navy); }
.sig-cmd { font-family: 'Courier New', monospace; font-size: 0.88rem; color: var(--muted); }
.sig-hint { font-size: 0.82rem; color: var(--muted); margin-bottom: 14px; }
.sig-box { border: 2px dashed var(--border); border-radius: 8px; overflow: hidden; background: #fafbfd; margin-bottom: 16px; }
.sig-actions { display: flex; gap: 8px; flex-wrap: wrap; justify-content: flex-end; }

/* AGENDA */
.agenda-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; }
@media (max-width: 860px) { .agenda-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 520px) { .agenda-grid { grid-template-columns: repeat(2, 1fr); } }
.agenda-col { background: white; border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; display: flex; flex-direction: column; }
.agenda-col-empty { opacity: 0.48; }
.agenda-day-header { background: var(--navy); border-bottom: 3px solid var(--gold); padding: 10px 12px; display: flex; align-items: center; justify-content: space-between; }
.agenda-day-name { color: white; font-size: 0.76rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
.agenda-day-count { background: var(--gold); color: var(--navy-dark); font-size: 0.68rem; font-weight: 800; padding: 1px 7px; border-radius: 10px; }
.agenda-empty-slot { padding: 28px 12px; text-align: center; color: #c0cce0; font-size: 1.3rem; flex: 1; display: flex; align-items: center; justify-content: center; }
.agenda-slots { padding: 10px 10px 12px; display: flex; flex-direction: column; gap: 5px; flex: 1; }
.agenda-creneau-label { display: flex; align-items: center; gap: 5px; font-size: 0.67rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 2px; }
.agenda-label-matin { color: var(--sun); }
.agenda-label-apm { color: var(--moon); }
.agenda-no-delivery { font-size: 0.73rem; color: #c0cce0; padding: 2px 0 4px 2px; font-style: italic; }
.agenda-divider { height: 1px; background: var(--bg2); margin: 6px 0; }
.agenda-card { border-radius: 6px; padding: 6px 8px; border-left: 3px solid transparent; display: flex; flex-direction: column; gap: 4px; }
.agenda-card-planifiee { background: #eff6ff; border-left-color: #2563eb; }
.agenda-card-confirmee { background: #fffbeb; border-left-color: #d97706; }
.agenda-card-livree    { background: #f0fdf4; border-left-color: #16a34a; }
.agenda-cmd { font-family: 'Courier New', monospace; font-size: 0.76rem; font-weight: 700; color: var(--navy); }

/* LOGIN */
.login-bg { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(145deg, #0e1d4a 0%, #1a2d6b 50%, #213580 100%); padding: 20px; }
.login-card { background: white; border-radius: 16px; padding: 40px 36px; width: 100%; max-width: 380px; box-shadow: 0 20px 60px rgba(0,0,0,0.35); display: flex; flex-direction: column; align-items: center; animation: fadeIn .4s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
@keyframes shake { 0%,100%{transform:translateX(0)} 20%,60%{transform:translateX(-8px)} 40%,80%{transform:translateX(8px)} }
.shake { animation: shake 0.45s ease; }
.login-logo { margin-bottom: 20px; }
.login-divider { width: 100%; height: 1px; background: #e8edf8; margin-bottom: 24px; }
.login-icon { width: 52px; height: 52px; border-radius: 14px; background: #eff6ff; color: #1a2d6b; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
.login-title { font-family: 'Source Serif 4', Georgia, serif; font-size: 1.3rem; color: #1a2d6b; margin-bottom: 6px; text-align: center; }
.login-sub { font-size: 0.84rem; color: #6b7a9e; text-align: center; margin-bottom: 24px; }
.login-input { width: 100%; padding: 13px 16px; border-radius: 10px; border: 2px solid #d0d8ef; background: #f4f6fb; font-family: 'Courier New', monospace; font-size: 1.05rem; font-weight: 700; letter-spacing: 0.08em; text-align: center; outline: none; transition: border-color 0.18s; margin-bottom: 8px; color: #1a2d6b; }
.login-input:focus { border-color: #1a2d6b; background: white; }
.login-input-error { border-color: #c0392b !important; background: #fdf0ee !important; }
.login-error { color: #c0392b; font-size: 0.82rem; font-weight: 600; margin-bottom: 8px; text-align: center; }
.btn-login { width: 100%; padding: 13px; border-radius: 10px; border: none; cursor: pointer; background: #1a2d6b; color: white; font-family: 'Source Sans 3', sans-serif; font-size: 0.95rem; font-weight: 700; margin-top: 8px; transition: all 0.18s; }
.btn-login:hover { background: #213580; transform: translateY(-1px); }
.loading { display: flex; align-items: center; justify-content: center; min-height: 200px; color: var(--muted); font-size: 0.9rem; gap: 10px; }
