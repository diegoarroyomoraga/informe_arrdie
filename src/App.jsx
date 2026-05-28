import { useState } from 'react'
import ResumenArrdie from './components/ResumenArrdie'
import MarcoArrdie from './components/MarcoArrdie'
import DelitosArrdie from './components/DelitosArrdie'
import ComparacionArrdie from './components/ComparacionArrdie'
import ResponsabilidadesArrdie from './components/ResponsabilidadesArrdie'
import DatosArrdie from './components/DatosArrdie'
import ConclusionArrdie from './components/ConclusionArrdie'
import PromptsArrdie from './components/PromptsArrdie'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState(0)

  const sections = [
    { id: 0, name: 'Resumen', component: ResumenArrdie },
    { id: 1, name: 'Marco Normativo', component: MarcoArrdie },
    { id: 2, name: 'Delitos Informáticos', component: DelitosArrdie },
    { id: 3, name: 'Comparación', component: ComparacionArrdie },
    { id: 4, name: 'Responsabilidades', component: ResponsabilidadesArrdie },
    { id: 5, name: 'Datos Personales', component: DatosArrdie },
    { id: 6, name: 'Conclusión', component: ConclusionArrdie },
    { id: 7, name: 'Prompts IA', component: PromptsArrdie }
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
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>Análisis jurídico del caso Equifax 2017 - Integración de Tailwind CSS</p>
          <p className="mt-2 text-gray-500">Componentes React con diseño responsive</p>
        </div>
      </footer>
    </div>
  )
}

export default App
