import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/footer';
import Navbar from './components/navbar';
import Cadastro from './pages/Cadastrar';
import Consulta from './pages/Consulta';
import ConsultaSaperx from './pages/ConsultaSaperx';
import Editar from './pages/Editar';
import Visualizar from './pages/Visualizar';


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/consulta" element={<Consulta />} />
        <Route path="/consulta2" element={<ConsultaSaperx />} />
        <Route path="/visualizar/:id" element={<Visualizar />} />
        <Route path="/editar/:id" element={<Editar />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
