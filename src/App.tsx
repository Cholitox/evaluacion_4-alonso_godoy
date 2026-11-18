

import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'
import './App.css'
import SobreMi from './pages/SobreMi'
import Habilidades from './pages/Habilidades'
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'

function Inicio() {
  return (
    <section className="inicio">
      <div className="inicio-texto">
        <p className="saludo">Hola, soy</p>

        <h1>Alonso godoy</h1>

        <h2>Estudiante de Bachiller en ciencias y humanidades</h2>

        <p>
          Me interesa el desarrollo de software, la tecnología
          y aprender nuevas herramientas para crear soluciones
        </p>

        <Link to="/proyectos" className="boton">
          Ver mis proyectos
        </Link>
      </div>

      <div className="circulo" aria-hidden="true">
        <span>AG</span>
      </div>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav aria-label="Navegación principal">
          <NavLink to="/" className="logo">
            Mi Portafolio
          </NavLink>

          <ul>
            <li><NavLink to="/" end>Inicio</NavLink></li>
            <li><NavLink to="/sobre-mi">Sobre mí</NavLink></li>
            <li><NavLink to="/habilidades">Habilidades</NavLink></li>
            <li><NavLink to="/proyectos">Proyectos</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route
            path="*"
            element={
              <section className="seccion">
                <h1 className="titulo">Página no encontrada</h1>
                <Link to="/" className="boton">
                  Volver al inicio
                </Link>
              </section>
            }
          />
        </Routes>
      </main>

      <footer>
        <p>© 2026 Alonso Godoy - universidad catolica de temuco</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
