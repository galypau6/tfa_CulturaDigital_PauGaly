import './App.css'
import { useState } from 'react'

function App() {

  const [popupStep, setPopupStep] = useState(1)

const [showSettings, setShowSettings] = useState(false)
const [showReminder, setShowReminder] = useState(false)
const [limitedMode, setLimitedMode] = useState(false)
const [showEmotionalPopup, setShowEmotionalPopup] = useState(false)

const [showCameraWarning, setShowCameraWarning] = useState(false)

const [eyeCalibrationStarted, setEyeCalibrationStarted] = useState(false)
const [eyeStep, setEyeStep] = useState(0)

const [birthDate, setBirthDate] = useState("")
const [showBirthWarning, setShowBirthWarning] = useState(false)

const [favoriteTeam, setFavoriteTeam] = useState("")
const [otherTeam, setOtherTeam] = useState("")

  const nextPopup = () => {
    setPopupStep(popupStep + 1)
  }

  return (
    <div className={`app ${limitedMode ? 'limited-mode' : ''}`}>

      {/* TOP BANNER */}

      <div className="top-banner">
        <p>
          🔥 ÚLTIMES PLACES DISPONIBLES · ACTIVA NOTIFICACIONS · EXPERIÈNCIA OPTIMITZADA · EXPERIÈNCIA PREMIUM · CONTINGUT DESTACAT ·
        </p>
      </div>

      {/* HEADER */}

      <header className="header">

        <div className="logo-section">
          <h1>CITM Experience</h1>
          <p>Centre de la Imatge i la Tecnologia Multimèdia</p>
        </div>

        <div className="header-actions">

          <input type="text" placeholder="Buscar..." />

          <button className="alert-button">
            Activa alertes
          </button>

        </div>

      </header>

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-label">
            EXPERIÈNCIA DIGITAL
          </p>

          <h2>
            Millora la teva experiència.
          </h2>

          <p className="hero-description">
            Accedeix abans que ningú a informació rellevant i contingut personalitzat.
          </p>

          <div className="hero-buttons">

            <button className="main-button">
              Continuar
            </button>

            <button className="secondary-button">
              Descobrir més
            </button>

          </div>

        </div>

      </section>

      {/* CARDS */}

      <main className="cards-container">

        <div className="card">

          <div className="card-image">
            <span>NOU</span>
          </div>

          <div className="card-content">

            <h3>Projectes destacats</h3>

            <p>
              Descobreix contingut seleccionat segons la teva activitat.
            </p>

            <button>
              Explorar
            </button>

          </div>

        </div>

        <div className="card">

          <div className="card-image">
            <span>URGENT</span>
          </div>

          <div className="card-content">

            <h3>Experiències immersives</h3>

            <p>
              Contingut optimitzat per millorar la interacció.
            </p>

            <button>
              Explorar
            </button>

          </div>

        </div>

      </main>

      {/* POPUP 1 */}

      {popupStep === 1 && (
  <div className="cookie-popup">

    <h3>🍪 Millorem la teva experiència</h3>

    <p>
      Aquesta plataforma utilitza cookies i dades contextuals
      per optimitzar la navegació.
    </p>

    <div className="popup-buttons">

      <button
        className="config-button"
        onClick={() => setShowSettings(true)}
      >
        Configurar
      </button>

      <button
        className="accept-button"
        onClick={nextPopup}
      >
        Acceptar-ho tot
      </button>

    </div>

  </div>
)}

      {/* SETTINGS */}

      {showSettings && (
        <div className="settings-panel">

          <h2>Configuració avançada</h2>

          <div className="settings-scroll">

            <div className="setting-item">
              <label>Cookies funcionals</label>
              <input type="checkbox" checked readOnly />
            </div>

            <div className="setting-item">
              <label>Seguiment contextual</label>
              <input type="checkbox" checked readOnly />
            </div>

            <div className="setting-item">
              <label>Anàlisi de comportament</label>
              <input type="checkbox" checked readOnly />
            </div>

            <div className="setting-item">
              <label>Interaccions emocionals</label>
              <input type="checkbox" checked readOnly />
            </div>

            <div className="setting-item">
              <label>Optimització predictiva</label>
              <input type="checkbox" checked readOnly />
            </div>

            <div className="setting-item">
              <label>Experiència personalitzada</label>
              <input type="checkbox" checked readOnly />
            </div>

            <div className="setting-item">
              <label>Sinergies digitals contextuals</label>
              <input type="checkbox" checked readOnly />
            </div>

            <div className="setting-item">
              <label>Monitorització d'activitat</label>
              <input type="checkbox" checked readOnly />
            </div>

            <div className="setting-item">
              <label>Dades biomètriques bàsiques</label>
              <input type="checkbox" checked readOnly />
            </div>

          </div>

          <button
            className="settings-accept"
            onClick={() => {
              setShowSettings(false)
              nextPopup()
            }}
          >
            Guardar i continuar
          </button>

        </div>
      )}

      {/* POPUP 2 */}

      {popupStep === 2 && (
        <div className="cookie-popup">

          <h3>🔔 Activa notificacions</h3>

          <p>
            Els estudiants amb notificacions actives
            accedeixen abans a informació rellevant.
          </p>

          <div className="popup-buttons">

            <button
              className="config-button"
              onClick={() => setShowReminder(true)}
            >
              Més tard
            </button>

            <button
              className="accept-button"
              onClick={nextPopup}
            >
              Permetre notificacions
            </button>

          </div>

        </div>
      )}

      {/* REMINDER */}

      {showReminder && (
        <div className="settings-panel">

          <h2>Recorda-m'ho més tard</h2>

          <p className="reminder-text">
            Quan vols que et tornem a recordar
            activar les notificacions?
          </p>

          <div className="reminder-options">

            <button
              className="reminder-button"
              onClick={() => {
                setShowReminder(false)
                nextPopup()
              }}
            >
              10 minuts
            </button>

            <button
              className="reminder-button"
              onClick={() => {
                setShowReminder(false)
                nextPopup()
              }}
            >
              15 minuts
            </button>

            <button
              className="reminder-button"
              onClick={() => {
                setShowReminder(false)
                nextPopup()
              }}
            >
              30 minuts
            </button>

            <button
              className="reminder-button"
              onClick={() => {
                setShowReminder(false)
                nextPopup()
              }}
            >
              1 hora
            </button>

          </div>

        </div>
      )}

      {/* POPUP 3 */}

      {popupStep === 3 && (
        <div className="cookie-popup">

          <h3>📍 Comparteix la ubicació</h3>

          <p>
            Utilitzem la teva ubicació per mostrar
            contingut contextualitzat i optimitzat.
          </p>

          <div className="popup-buttons">

            <button
              className="config-button"
              onClick={nextPopup}
            >
              Ometre
            </button>

            <button
              className="accept-button"
              onClick={nextPopup}
            >
              Compartir ubicació
            </button>

          </div>

        </div>
      )}

      {/* POPUP 4 */}

      {popupStep === 4 && (
        <div className="cookie-popup">

          <h3>🎤 Accés al micròfon</h3>

          <p>
            L’accés al micròfon permet millorar
            la interacció contextual amb la plataforma.
          </p>

          <div className="popup-buttons">

            <button
              className="config-button"
              onClick={() => {
                setLimitedMode(true)
                nextPopup()
              }}
            >
              Continuar limitat
            </button>

            <button
              className="accept-button"
              onClick={nextPopup}
            >
              Permetre micròfon
            </button>

          </div>

        </div>
      )}

      {/* POPUP 5 */}

{popupStep === 5 && (
  <div className="cookie-popup">

    <h3>📷 Accés a la càmera</h3>

    <p>
      L’accés a la càmera permet millorar les experiències
      interactives avançades i la personalització visual.
    </p>

    <div className="popup-buttons">

      <button
        className="config-button"
        onClick={() => setShowCameraWarning(true)}
      >
        Ara no
      </button>

      <button
        className="accept-button"
        onClick={nextPopup}
      >
        Permetre càmera
      </button>

    </div>

  </div>
)}

{showCameraWarning && (
  <div className="settings-panel">

    <h2>⚠️ Funcionalitat limitada</h2>

    <p className="reminder-text">
      La calibració visual requereix accés a la càmera.
      Sense aquest permís no podrem continuar amb
      les experiències interactives avançades.
    </p>

    <div className="popup-buttons">

      <button
        className="config-button"
        onClick={() => setShowCameraWarning(false)}
      >
        Tornar
      </button>

      <button
        className="accept-button"
        onClick={() => {
          setShowCameraWarning(false)
          nextPopup()
        }}
      >
        Permetre càmera
      </button>

    </div>

  </div>
)}

{/* POPUP 6 - CALIBRACIÓ VISUAL */}

{popupStep === 6 && (
  <>

    <div className="calibration-overlay"></div>

    {/* PUNT SUPERIOR ESQUERRA */}
    <button
      className={`calibration-point ${
        eyeStep === 1 ? "point-active" : "point-inactive"
      }`}
      style={{
        top: "80px",
        left: "80px"
      }}
      onClick={() => {
        if (eyeStep === 1) setEyeStep(2)
      }}
    />

    {/* PUNT SUPERIOR DRETA */}
    <button
      className={`calibration-point ${
        eyeStep === 2 ? "point-active" : "point-inactive"
      }`}
      style={{
        top: "80px",
        right: "80px"
      }}
      onClick={() => {
        if (eyeStep === 2) setEyeStep(3)
      }}
    />

    {/* PUNT INFERIOR ESQUERRA */}
    <button
      className={`calibration-point ${
        eyeStep === 3 ? "point-active" : "point-inactive"
      }`}
      style={{
        bottom: "80px",
        left: "80px"
      }}
      onClick={() => {
        if (eyeStep === 3) setEyeStep(4)
      }}
    />

    {/* PUNT INFERIOR DRETA */}
    <button
      className={`calibration-point ${
        eyeStep === 4 ? "point-active" : "point-inactive"
      }`}
      style={{
        bottom: "80px",
        right: "80px"
      }}
      onClick={() => {
        if (eyeStep === 4) setEyeStep(5)
      }}
    />

    <div className="settings-panel">

      <h2>👁 Calibració visual</h2>

      <p className="reminder-text">
        Per millorar l'experiència interactiva necessitem
        calibrar la teva mirada.
      </p>

      <p className="reminder-text">
        Quan premis "Iniciar calibració",
        fes clic en el punt que es posi de color taronja.
      </p>

      {!eyeCalibrationStarted && (
        <button
          className="settings-accept"
          onClick={() => {
            setEyeCalibrationStarted(true)
            setEyeStep(1)
          }}
        >
          Iniciar calibració
        </button>
      )}

      {eyeCalibrationStarted && eyeStep < 5 && (
        <p
          style={{
            marginTop: "20px",
            fontWeight: "bold",
            color: "orange"
          }}
        >
          Progrés: {(eyeStep - 1) * 25}%
        </p>
      )}

      {eyeStep === 5 && (
        <div>

          <p
            style={{
              marginTop: "20px",
              color: "green",
              fontWeight: "bold"
            }}
          >
            ✓ Calibració completada
          </p>

          <button
  className="settings-accept"
  onClick={() => {
    setPopupStep(7)
  }}
>
  Continuar
</button>

        </div>
      )}

    </div>

  </>
)}

{/* POPUP 7 - DATA DE NAIXEMENT */}

{popupStep === 7 && (
  <div className="settings-panel">

    <h2>🎂 Data de naixement</h2>

    <p className="reminder-text">
      Indica la teva data de naixement.
    </p>

    <input
      type="date"
      value={birthDate}
      onChange={(e) => setBirthDate(e.target.value)}
      style={{
        width: "100%",
        padding: "12px",
        marginBottom: "20px",
        borderRadius: "12px",
        border: "1px solid #ddd"
      }}
    />

    <div className="popup-buttons">

      <button
        className="config-button"
        onClick={() => setShowBirthWarning(true)}
      >
        Ometre
      </button>

      <button
        className="accept-button"
        onClick={() => setPopupStep(8)}
      >
        Continuar
      </button>

    </div>

  </div>
)}

{showBirthWarning && (
  <div className="settings-panel">

    <h2>⚠️ Informació incompleta</h2>

    <p className="reminder-text">
      Sense aquesta informació les recomanacions
      poden ser menys precises.
    </p>

    <div className="popup-buttons">

      <button
        className="config-button"
        onClick={() => setShowBirthWarning(false)}
      >
        Tornar
      </button>

      <button
        className="accept-button"
        onClick={() => {
          setShowBirthWarning(false)
          setPopupStep(8)
        }}
      >
        Continuar igualment
      </button>

    </div>

  </div>
)}

{/* POPUP 8 - EQUIP PREFERIT */}

{popupStep === 8 && (
  <div className="settings-panel">

    <h2>⚽ Equip de futbol preferit</h2>

    <p className="reminder-text">
      Selecciona l'equip que segueixes habitualment.
    </p>

    <div className="team-grid">

      <div
        className={`team-card ${favoriteTeam === "Barça" ? "selected-team" : ""}`}
        onClick={() => setFavoriteTeam("Barça")}
      >
        <div className="team-colors">🔵🔴</div>
        <p>Barça</p>
      </div>

      <div
        className={`team-card ${favoriteTeam === "Madrid" ? "selected-team" : ""}`}
        onClick={() => setFavoriteTeam("Madrid")}
      >
        <div className="team-colors">⚪⚪</div>
        <p>Madrid</p>
      </div>

      <div
        className={`team-card ${favoriteTeam === "Girona" ? "selected-team" : ""}`}
        onClick={() => setFavoriteTeam("Girona")}
      >
        <div className="team-colors">🔴⚪</div>
        <p>Girona</p>
      </div>

      <div
        className={`team-card ${favoriteTeam === "Espanyol" ? "selected-team" : ""}`}
        onClick={() => setFavoriteTeam("Espanyol")}
      >
        <div className="team-colors">🔵⚪</div>
        <p>Espanyol</p>
      </div>

      <div
        className={`team-card ${favoriteTeam === "Atl. Madrid" ? "selected-team" : ""}`}
        onClick={() => setFavoriteTeam("Atl. Madrid")}
      >
        <div className="team-colors">🔴⚪</div>
        <p>Atl. Madrid</p>
      </div>

      <div
        className={`team-card ${favoriteTeam === "Altre" ? "selected-team" : ""}`}
        onClick={() => setFavoriteTeam("Altre")}
      >
        <div className="team-colors">✏️</div>
        <p>Altre</p>
      </div>

    </div>

    {favoriteTeam === "Altre" && (
      <input
        type="text"
        placeholder="Escriu el nom de l'equip..."
        value={otherTeam}
        onChange={(e) => setOtherTeam(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "20px",
          borderRadius: "12px",
          border: "1px solid #ddd"
        }}
      />
    )}

    {favoriteTeam && (
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <button
          className="accept-button"
          onClick={() => setPopupStep(9)}
        >
          Continuar
        </button>
      </div>
    )}

  </div>
)}

      {/* FINAL PANEL */}

      {showEmotionalPopup && (
        <div className="settings-panel emotional-panel">

          <h2>Algunes funcionalitats quedaran limitades</h2>

          <p className="reminder-text">
            Sense verificació emocional, el sistema no podrà
            adaptar contingut immersiu segons el teu estat contextual.
          </p>

          <div className="popup-buttons">

            <button className="config-button">
              Continuar limitat
            </button>

            <button className="accept-button">
              Activar verificació emocional
            </button>

          </div>

        </div>
      )}

    </div>
  )
}

export default App