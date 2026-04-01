// src/DemoModal.jsx
import React, { useState } from 'react';

function DemoModal({ isOpen, onClose }) {
  // Estados para controlar la seguridad y la vista
  const [isVerified, setIsVerified] = useState(false);
  const [showApp, setShowApp] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Estado para el cargando

  // Si el modal está cerrado, reseteamos los estados y no mostramos nada
  if (!isOpen) {
    if (isVerified || showApp) {
      setIsVerified(false);
      setShowApp(false);
      setIsLoading(true); // Reseteamos el loader para la próxima vez
    }
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4">
      <div className="bg-slate-800 w-full max-w-4xl rounded-xl border border-slate-700 shadow-2xl overflow-hidden relative flex flex-col h-[85vh]">
        
        {/* Cabecera del Modal */}
        <div className="flex justify-between items-center p-4 border-b border-slate-700 bg-slate-900/50">
          <h3 className="text-xl font-bold text-white flex items-center gap-2 font-mono">
            <span className={showApp ? "text-emerald-400" : "text-amber-400"}>●</span> 
            {showApp ? "Sistema de Turnos - Modo Seguro" : "Verificación de Seguridad"}
          </h3>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-1 bg-slate-800 rounded px-3"
          >
            ✕ Cerrar
          </button>
        </div>

        {/* Cuerpo del Modal: Cambia según si ya entró a la app o no */}
        <div className="flex-1 overflow-hidden flex flex-col bg-slate-800 p-6">
          
          {!showApp ? (
            /* --- PANTALLA 1: SEGURIDAD (Antes de entrar) --- */
            <div className="flex flex-col items-center justify-center h-full max-w-lg mx-auto w-full">
              
              <div className="bg-slate-900/80 rounded-lg p-6 border border-slate-700 mb-8 w-full text-center">
                <p className="text-slate-300 mb-2">
                  Estás a punto de acceder a una demo interactiva.
                </p>
                <p className="text-sm text-slate-500">
                  Por favor, confirmá que sos humano para habilitar el entorno de prueba.
                </p>
              </div>

              {/* Simulador de reCAPTCHA */}
              <div className="bg-slate-50 border border-slate-300 rounded p-4 flex items-center justify-between w-72 mb-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    id="robot-check"
                    checked={isVerified}
                    onChange={(e) => setIsVerified(e.target.checked)}
                    className="w-6 h-6 cursor-pointer accent-emerald-600"
                  />
                  <label htmlFor="robot-check" className="text-slate-700 font-medium cursor-pointer select-none">
                    No soy un robot
                  </label>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-blue-600 text-2xl leading-none">↻</span>
                  <span className="text-[10px] text-slate-500 mt-1">reCAPTCHA</span>
                </div>
              </div>

              {/* Botón dinámico */}
              <button 
                disabled={!isVerified}
                onClick={() => setShowApp(true)}
                className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                  isVerified 
                    ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20" 
                    : "bg-slate-700 text-slate-500 cursor-not-allowed"
                }`}
              >
                {isVerified ? "Acceder a la Demo" : "Esperando verificación..."}
              </button>

            </div>
          ) : (
            /* --- PANTALLA 2: LA APLICACIÓN DE FLASK --- */
            <div className="w-full h-full flex flex-col relative">
              
              {/* Barra de info */}
              <div className="bg-slate-900 rounded-t-lg p-3 border border-slate-700 flex justify-between items-center z-10">
                <span className="text-slate-400 text-sm font-mono flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Conexión segura establecida
                </span>
                <span className="bg-slate-800 text-xs text-slate-400 px-2 py-1 rounded">Demo Environment</span>
              </div>

              {/* Contenedor del iFrame con Loader */}
              <div className="flex-1 bg-slate-900 border-x border-b border-slate-700 rounded-b-lg overflow-hidden relative">
                
                {/* Loader Visual */}
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 z-50">
                    <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mb-4"></div>
                    <p className="text-emerald-500 font-mono text-sm animate-pulse">Estableciendo túnel seguro...</p>
                  </div>
                )}

                <iframe 
                  src="https://demo.visionrs.com.ar" 
                  title="Demo Sistema de Turnos"
                  className="w-full h-full border-none"
                  allow="payment"
                  onLoad={() => setIsLoading(false)}
                ></iframe>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default DemoModal;