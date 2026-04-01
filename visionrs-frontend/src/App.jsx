// src/App.jsx
import React, { useState } from 'react';
import DemoModal from './DemoModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Nuevo estado para controlar el menú del celular
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-slate-900 min-h-screen font-sans">
      
      {/* NAVBAR */}
      <nav className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          
          <div className="text-2xl font-bold text-white tracking-wider cursor-pointer z-50">
            <span className="text-emerald-400">&lt;</span>Edu<span className="text-emerald-400">/&gt;</span>
          </div>

          {/* Botón Hamburguesa (Solo visible en celulares) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-emerald-400 text-2xl focus:outline-none z-50"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          {/* Menú de Escritorio (Oculto en celulares) */}
          <ul className="hidden md:flex space-x-8 text-sm font-mono text-slate-300">
            <li><a href="#inicio" className="hover:text-emerald-400 transition-colors">Inicio</a></li>
            <li><a href="#sobre-mi" className="hover:text-emerald-400 transition-colors">Sobre Mí</a></li>
            <li><a href="#proyectos" className="hover:text-emerald-400 transition-colors">Proyectos</a></li>
            <li><a href="#contacto" className="hover:text-emerald-400 transition-colors">Contacto</a></li>
          </ul>
        </div>

        {/* Menú Desplegable para Celulares */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 absolute top-full left-0 w-full shadow-2xl">
            <ul className="flex flex-col px-4 py-6 text-center text-sm font-mono text-slate-300 gap-6">
              <li><a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block hover:text-emerald-400 transition-colors text-lg">Inicio</a></li>
              <li><a href="#sobre-mi" onClick={() => setIsMenuOpen(false)} className="block hover:text-emerald-400 transition-colors text-lg">Sobre Mí</a></li>
              <li><a href="#proyectos" onClick={() => setIsMenuOpen(false)} className="block hover:text-emerald-400 transition-colors text-lg">Proyectos</a></li>
              <li><a href="#contacto" onClick={() => setIsMenuOpen(false)} className="block hover:text-emerald-400 transition-colors text-lg">Contacto</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* 1. HERO SECTION */}
      <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-slate-900/80"></div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-6xl font-bold text-white tracking-widest drop-shadow-[0_5px_5px_rgba(255,255,255,0.3)]">
            VisionRs
          </h1>
          <p className="text-emerald-400 mt-4 text-xl font-mono text-center px-4">
            Transformando tus ideas en código funcional.
          </p>
        </div>
      </section>

      {/* 2. SECCIÓN SOBRE MÍ */}
      <section id="sobre-mi" className="bg-slate-800 text-slate-300 py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Sobre Mí</h2>
          <p className="text-lg leading-relaxed mb-6">
            ¡Hola! Soy Edu, Desarrollador Web Full Stack. Me especializo en la creación de soluciones a medida, combinando mi formación en desarrollo web con lenguajes como JavaScript y Python para construir plataformas eficientes y escalables.
          </p>
          <p className="text-lg leading-relaxed mb-10">
            Con más de una década de experiencia enfocada en la atención al cliente y el análisis de métricas a través de dashboards, desarrollé una visión estratégica: entiendo exactamente lo que el usuario final necesita. Mi objetivo es transformar problemas complejos en interfaces limpias, intuitivas y que realmente sumen valor.
          </p>
          
          {/* Insignias de tecnologías */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <span className="bg-slate-900 border border-emerald-500/30 px-5 py-2 rounded-full text-sm text-emerald-400 font-mono">JavaScript</span>
            <span className="bg-slate-900 border border-emerald-500/30 px-5 py-2 rounded-full text-sm text-emerald-400 font-mono">React</span>
            <span className="bg-slate-900 border border-emerald-500/30 px-5 py-2 rounded-full text-sm text-emerald-400 font-mono">Node.js</span>
            <span className="bg-slate-900 border border-emerald-500/30 px-5 py-2 rounded-full text-sm text-emerald-400 font-mono">Python</span>
            <span className="bg-slate-900 border border-emerald-500/30 px-5 py-2 rounded-full text-sm text-emerald-400 font-mono">Flask</span>
            <span className="bg-slate-900 border border-emerald-500/30 px-5 py-2 rounded-full text-sm text-emerald-400 font-mono">HTML/CSS</span>
          </div>

          {/* Sub-sección de Certificaciones */}
          <div className="border-t border-slate-700 pt-12">
            <h3 className="text-2xl font-bold text-white mb-8">Certificaciones</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/Desarrolloweb.png" target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-all bg-slate-900 w-48 h-32">
                <img src="/Desarrolloweb.png" alt="Certificado Desarrollo Web" className="w-full h-full object-cover opacity-70 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-emerald-400 font-mono text-sm border border-emerald-400 px-3 py-1 rounded">Ver Diploma</span>
                </div>
              </a>
              <a href="/Javascript.png" target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-all bg-slate-900 w-48 h-32">
                <img src="/Javascript.png" alt="Certificado JavaScript" className="w-full h-full object-cover opacity-70 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-emerald-400 font-mono text-sm border border-emerald-400 px-3 py-1 rounded">Ver Diploma</span>
                </div>
              </a>
              <a href="/Reactjs.png" target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-all bg-slate-900 w-48 h-32">
                <img src="/Reactjs.png" alt="Certificado React JS" className="w-full h-full object-cover opacity-70 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-emerald-400 font-mono text-sm border border-emerald-400 px-3 py-1 rounded">Ver Diploma</span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SECCIÓN PROYECTOS */}
      <section id="proyectos" className="bg-slate-900 text-slate-300 py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Proyectos Destacados</h2>
          
          <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-colors max-w-2xl mx-auto flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-slate-900 border-b md:border-b-0 md:border-r border-slate-700 relative overflow-hidden group">
<img 

                src="/dashboard_collage.png" 

                alt="Colage de la App de Turnos - VisionRs" 

                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"

              />
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all duration-500"></div>
            </div>
            
            <div className="p-8 md:w-2/3 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-2">Sistema de Gestión de Turnos</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Plataforma web integral desarrollada para profesionales de la salud. Permite agendar, modificar y gestionar citas médicas de manera intuitiva, optimizando la organización diaria del consultorio.
              </p>
              
              <div className="flex gap-2 mb-6 flex-wrap">
                <span className="bg-slate-900 text-emerald-400 text-xs px-2 py-1 rounded">Flask</span>
                <span className="bg-slate-900 text-emerald-400 text-xs px-2 py-1 rounded">JavaScript</span>
                <span className="bg-slate-900 text-emerald-400 text-xs px-2 py-1 rounded">HTML/CSS</span>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-lg shadow-emerald-600/20 w-max"
              >
                Probar Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER / CONTACTO */}
      <footer id="contacto" className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">¿Trabajamos juntos?</h2>
          <p className="mb-8 text-lg">
            Si tenés un proyecto en mente o necesitás una solución web a medida, no dudes en escribirme.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a 
              href="mailto:Edu.90@live.com.ar" 
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500/50 text-white font-mono py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              ✉️ Edu.90@live.com.ar
            </a>
            
            <a 
              href="https://github.com/EduardoRiosSale" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500/50 text-white font-mono py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              💻 GitHub
            </a>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© {new Date().getFullYear()} VisionRs. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0 text-emerald-500/70 font-mono">
              Desarrollado en El Palomar, Buenos Aires
            </p>
          </div>
        </div>
      </footer>

      {/* Renderizamos el Modal */}
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  )
}

export default App