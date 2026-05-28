import { useState } from 'react'
import Resumen from './components/Resumen'
import Marco from './components/Marco'
import Delitos from './components/Delitos'
import Comparacion from './components/Comparacion'
import Responsabilidades from './components/Responsabilidades'
import Datos from './components/Datos'
import Conclusion from './components/Conclusion'
import Prompts from './components/Prompts'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState(0)

  const sections = [
    { id: 0, name: 'Resumen', component: Resumen },
    { id: 1, name: 'Marco Normativo', component: Marco },
    { id: 2, name: 'Delitos Informáticos', component: Delitos },
    { id: 3, name: 'Comparación', component: Comparacion },
    { id: 4, name: 'Responsabilidades', component: Responsabilidades },
    { id: 5, name: 'Datos', component: Datos },
    { id: 6, name: 'Conclusión', component: Conclusion },
    { id: 7, name: 'Prompts IA', component: Prompts }
  ]

  const CurrentComponent = sections[activeSection].component

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-950 border-b border-gray-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-white">
              📋 Caso Equifax 2017
            </h1>
          </div>
          
          {/* Navigation Tabs */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-2 pb-4 px-4 min-w-max">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                    activeSection === section.id
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="w-full">
        <CurrentComponent />
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-700 text-gray-400 py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-center justify-between text-sm">
          <div className="text-center md:text-left">
            <p>Creado por el estudiante: Diego Hector Arroyo Moraga</p>
            <p className="mt-2 text-gray-500">Analista Programador | Inacap Valparaiso 2026</p>
          </div>

          <a
            href="https://github.com/diegoarroyomoraga/informe_arrdie.git"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 md:mt-0 inline-flex items-center px-3 py-1 bg-gray-800 text-white text-sm font-medium rounded-md shadow hover:bg-gray-700 transition"
            aria-label="Link de github - abrir repositorio en nueva pestaña"
          >
            Link de github
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
