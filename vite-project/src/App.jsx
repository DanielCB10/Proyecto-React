import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './Form';
import Tabla from './Tabla';
import './App.css'

export default function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav>
           <ul className="nav">
              <li className="nav-item">
                  <Link className="nav-link" to="/">Formulario de Hoteles</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/Tabla">Tabla</Link>
              </li>

            </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/Tabla' element={<Tabla />} />
        </Routes>
      </div>
    </Router>
  )
}
