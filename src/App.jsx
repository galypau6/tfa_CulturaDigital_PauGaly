import './App.css'
import { useState } from 'react'

function App() {

  const [popupStep, setPopupStep] = useState(1)

  const [cookiesAccepted, setCookiesAccepted] = useState(true)

const [notificationsAccepted, setNotificationsAccepted] = useState(false)

const [locationAccepted, setLocationAccepted] = useState(false)

const [microphoneAccepted, setMicrophoneAccepted] = useState(false)

const [cameraAccepted, setCameraAccepted] = useState(false)

const [eyeCalibrationAccepted, setEyeCalibrationAccepted] = useState(false)

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

const [musicStyle, setMusicStyle] = useState("")
const [otherMusic, setOtherMusic] = useState("")

const [dailyPeriod, setDailyPeriod] = useState("Tarda")

const [sleepHabit, setSleepHabit] = useState("")

const [screenTime, setScreenTime] = useState(4)

const [personalityType, setPersonalityType] = useState("")

const [profileProgress, setProfileProgress] = useState(0)
const [profileMessage, setProfileMessage] = useState("")

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
  onClick={() => {
    setCookiesAccepted(true)
    nextPopup()
  }}
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
  onClick={() => {
    setNotificationsAccepted(true)
    nextPopup()
  }}
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
  onClick={() => {
    setLocationAccepted(true)
    nextPopup()
  }}
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
  onClick={() => {
    setMicrophoneAccepted(true)
    nextPopup()
  }}
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
  onClick={() => {
    setCameraAccepted(true)
    nextPopup()
  }}
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
    setCameraAccepted(true)
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
    setEyeCalibrationAccepted(true)
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

{/* POPUP 9 - MÚSICA PREFERIDA */}

{popupStep === 9 && (
  <div className="settings-panel">

    <h2>🎵 Estil musical preferit</h2>

    <p className="reminder-text">
      Selecciona l'estil musical que escoltes més sovint.
    </p>

    <div className="team-grid">

      <div
        className={`team-card ${musicStyle === "Pop" ? "selected-team" : ""}`}
        onClick={() => setMusicStyle("Pop")}
      >
        <div className="team-colors">🎵</div>
        <p>Pop</p>
      </div>

      <div
        className={`team-card ${musicStyle === "Rock" ? "selected-team" : ""}`}
        onClick={() => setMusicStyle("Rock")}
      >
        <div className="team-colors">🎸</div>
        <p>Rock</p>
      </div>

      <div
        className={`team-card ${musicStyle === "Electrònica" ? "selected-team" : ""}`}
        onClick={() => setMusicStyle("Electrònica")}
      >
        <div className="team-colors">🎧</div>
        <p>Electrònica</p>
      </div>

      <div
        className={`team-card ${musicStyle === "Urbana" ? "selected-team" : ""}`}
        onClick={() => setMusicStyle("Urbana")}
      >
        <div className="team-colors">🎤</div>
        <p>Urbana</p>
      </div>

      <div
        className={`team-card ${musicStyle === "Clàssica" ? "selected-team" : ""}`}
        onClick={() => setMusicStyle("Clàssica")}
      >
        <div className="team-colors">🎻</div>
        <p>Clàssica</p>
      </div>

      <div
        className={`team-card ${musicStyle === "Altre" ? "selected-team" : ""}`}
        onClick={() => setMusicStyle("Altre")}
      >
        <div className="team-colors">✏️</div>
        <p>Altre</p>
      </div>

    </div>

    {musicStyle === "Altre" && (
      <input
        type="text"
        placeholder="Escriu l'estil musical..."
        value={otherMusic}
        onChange={(e) => setOtherMusic(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "20px",
          borderRadius: "12px",
          border: "1px solid #ddd"
        }}
      />
    )}

    {musicStyle && (
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <button
          className="accept-button"
          onClick={() => setPopupStep(10)}
        >
          Continuar
        </button>
      </div>
    )}

  </div>
)}

{/* POPUP 10 - HORARI HABITUAL */}

{popupStep === 10 && (
  <div className="settings-panel">

    <h2>🌅 Horari habitual</h2>

    <p className="reminder-text">
      En quin moment del dia acostumes a estar més actiu?
    </p>

    <div
      className={`period-scene ${
        dailyPeriod === "Matí"
          ? "scene-morning"
          : dailyPeriod === "Tarda"
          ? "scene-afternoon"
          : "scene-night"
      }`}
    >

      <div className="scene-icon">
        {dailyPeriod === "Matí" && "🌅"}
        {dailyPeriod === "Tarda" && "☀️"}
        {dailyPeriod === "Nit" && "🌙"}
      </div>

    </div>

    <input
      type="range"
      min="0"
      max="2"
      step="1"
      value={
        dailyPeriod === "Matí"
          ? 0
          : dailyPeriod === "Tarda"
          ? 1
          : 2
      }
      onChange={(e) => {
        const value = Number(e.target.value)

        if (value === 0) setDailyPeriod("Matí")
        if (value === 1) setDailyPeriod("Tarda")
        if (value === 2) setDailyPeriod("Nit")
      }}
      style={{
        width: "100%",
        marginTop: "10px"
      }}
    />

    <p
      style={{
        textAlign: "center",
        marginTop: "10px",
        fontWeight: "bold"
      }}
    >
      {dailyPeriod}
    </p>

    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "flex-end"
      }}
    >
      <button
        className="accept-button"
        onClick={() => setPopupStep(11)}
      >
        Continuar
      </button>
    </div>

  </div>
)}

{/* POPUP 11 - HORA HABITUAL D'ANAR A DORMIR */}

{popupStep === 11 && (
  <div className="settings-panel">

    <h2>😴 Quan acostumes a anar a dormir?</h2>

    <p className="reminder-text">
      Selecciona l'opció que s'ajusti millor als teus hàbits.
    </p>

    <div className="radio-group">

      <div
        className={`radio-option ${
          sleepHabit === "Abans de les 22:00" ? "selected-radio" : ""
        }`}
        onClick={() => setSleepHabit("Abans de les 22:00")}
      >
        <div className="radio-circle"></div>
        <span>Abans de les 22:00</span>
      </div>

      <div
        className={`radio-option ${
          sleepHabit === "Entre les 22:00 i les 00:00" ? "selected-radio" : ""
        }`}
        onClick={() => setSleepHabit("Entre les 22:00 i les 00:00")}
      >
        <div className="radio-circle"></div>
        <span>Entre les 22:00 i les 00:00</span>
      </div>

      <div
        className={`radio-option ${
          sleepHabit === "Entre les 00:00 i les 02:00" ? "selected-radio" : ""
        }`}
        onClick={() => setSleepHabit("Entre les 00:00 i les 02:00")}
      >
        <div className="radio-circle"></div>
        <span>Entre les 00:00 i les 02:00</span>
      </div>

      <div
        className={`radio-option ${
          sleepHabit === "Després de les 02:00" ? "selected-radio" : ""
        }`}
        onClick={() => setSleepHabit("Després de les 02:00")}
      >
        <div className="radio-circle"></div>
        <span>Després de les 02:00</span>
      </div>

    </div>

    {sleepHabit && (
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <button
          className="accept-button"
          onClick={() => setPopupStep(12)}
        >
          Continuar
        </button>
      </div>
    )}

  </div>
)}

{/* POPUP 12 - TEMPS DE PANTALLA */}

{popupStep === 12 && (
  <div className="settings-panel">

    <h2>📱 Temps de pantalla diari</h2>

    <p className="reminder-text">
      Quantes hores al dia utilitzes aproximadament el mòbil?
    </p>

    <div className="screen-time-display">

      <span>{screenTime}</span>

      <small>hores / dia</small>

    </div>

    <input
      type="range"
      min="0"
      max="12"
      step="1"
      value={screenTime}
      onChange={(e) => setScreenTime(Number(e.target.value))}
      className="screen-slider"
    />

    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <span>0h</span>
      <span>12h</span>
    </div>

    <div
      style={{
        marginTop: "25px",
        display: "flex",
        justifyContent: "flex-end"
      }}
    >
      <button
        className="accept-button"
        onClick={() => setPopupStep(13)}
      >
        Continuar
      </button>
    </div>

  </div>
)}

{/* POPUP 13 - PERSONALITAT */}

{popupStep === 13 && (
  <div className="settings-panel">

    <h2>🧠 Com et definiries?</h2>

    <p className="reminder-text">
      Quina d'aquestes característiques creus que et defineix millor?
    </p>

    <div className="team-grid">

      <div
        className={`team-card ${
          personalityType === "Analític" ? "selected-team" : ""
        }`}
        onClick={() => setPersonalityType("Analític")}
      >
        <div className="team-colors">🧠</div>
        <p>Analític</p>
      </div>

      <div
        className={`team-card ${
          personalityType === "Creatiu" ? "selected-team" : ""
        }`}
        onClick={() => setPersonalityType("Creatiu")}
      >
        <div className="team-colors">🎨</div>
        <p>Creatiu</p>
      </div>

      <div
        className={`team-card ${
          personalityType === "Competitiu" ? "selected-team" : ""
        }`}
        onClick={() => setPersonalityType("Competitiu")}
      >
        <div className="team-colors">🏆</div>
        <p>Competitiu</p>
      </div>

      <div
        className={`team-card ${
          personalityType === "Sociable" ? "selected-team" : ""
        }`}
        onClick={() => setPersonalityType("Sociable")}
      >
        <div className="team-colors">👥</div>
        <p>Sociable</p>
      </div>

    </div>

    {personalityType && (
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <button
          className="accept-button"
          onClick={() => {
  setPopupStep(14)

  setProfileProgress(0)
  setProfileMessage("Analitzant dades...")

  setTimeout(() => {
    setProfileProgress(25)
    setProfileMessage("Creuant informació...")
  }, 1000)

  setTimeout(() => {
    setProfileProgress(60)
    setProfileMessage("Identificant patrons...")
  }, 2000)

  setTimeout(() => {
    setProfileProgress(100)
    setProfileMessage("Construint perfil...")
  }, 3000)

  setTimeout(() => {
    setPopupStep(15)
  }, 4000)
}}
        >
          Continuar
        </button>
      </div>
    )}

  </div>
)}

{/* POPUP 14 - GENERANT PERFIL */}

{popupStep === 14 && (
  <div className="settings-panel">

    <h2>🌐 Generant perfil digital...</h2>

    <p className="reminder-text">
      {profileMessage}
    </p>

    <div className="profile-progress-container">

      <div
        className="profile-progress-bar"
        style={{
          width: `${profileProgress}%`
        }}
      />

    </div>

    <p
      style={{
        textAlign: "center",
        marginTop: "15px",
        fontWeight: "bold"
      }}
    >
      {profileProgress}%
    </p>

  </div>
)}

{/* POPUP 15 - PERFIL DIGITAL */}

{popupStep === 15 && (
  <div className="settings-panel">

    <h2>📊 Perfil digital generat</h2>

    <div className="settings-scroll">

      <div className="setting-item">
        <label>🎂 Data de naixement</label>
        <strong>{birthDate || "No indicada"}</strong>
      </div>

      <div className="setting-item">
        <label>⚽ Equip preferit</label>
        <strong>
          {favoriteTeam === "Altre"
            ? otherTeam
            : favoriteTeam}
        </strong>
      </div>

      <div className="setting-item">
        <label>🎵 Música preferida</label>
        <strong>
          {musicStyle === "Altre"
            ? otherMusic
            : musicStyle}
        </strong>
      </div>

      <div className="setting-item">
        <label>🌅 Horari habitual</label>
        <strong>{dailyPeriod}</strong>
      </div>

      <div className="setting-item">
        <label>😴 Hàbits de son</label>
        <strong>{sleepHabit}</strong>
      </div>

      <div className="setting-item">
        <label>📱 Temps de pantalla</label>
        <strong>{screenTime} hores</strong>
      </div>

      <div className="setting-item">
        <label>🧠 Personalitat</label>
        <strong>{personalityType}</strong>
      </div>

    </div>

    <p
      style={{
        textAlign: "center",
        marginBottom: "20px",
        fontWeight: "bold",
        color: "green"
      }}
    >
      ✓ Perfil digital completat
    </p>

    <div className="popup-buttons">

      <button
        className="accept-button"
        onClick={() => setPopupStep(0)}
      >
        Acceptar
      </button>

    </div>

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