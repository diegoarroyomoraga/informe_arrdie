export default function Comparacion() {
  const marcos = [
    {
      nombre: "Ley 21.459",
      pais: "🇨🇱 Chile",
      alcance: "Regula delitos informáticos como acceso ilícito y ataques a sistemas",
      sanciones: "Sanciones penales y penas privativas de libertad",
      sujeto: "Personas que cometan delitos informáticos",
      jurisdiccion: "Chile",
      aplicabilidad: "Aplica por acceso no autorizado y extracción ilegal de información"
    },
    {
      nombre: "Ley 19.628",
      pais: "🇨🇱 Chile",
      alcance: "Regula el tratamiento y protección de datos personales",
      sanciones: "Responsabilidades por uso indebido o exposición de datos",
      sujeto: "Empresas y organizaciones que almacenan o procesan datos personales",
      jurisdiccion: "Chile",
      aplicabilidad: "Aplica porque Equifax almacenaba información personal y financiera sensible"
    },
    {
      nombre: "FTC Act",
      pais: "🇺🇸 Estados Unidos",
      alcance: "Protege a consumidores frente a prácticas comerciales injustas o engañosas",
      sanciones: "Investigaciones, acuerdos y sanciones económicas",
      sujeto: "Empresas y organizaciones comerciales",
      jurisdiccion: "Estados Unidos",
      aplicabilidad: "Utilizada por autoridades estadounidenses para investigar y sancionar a Equifax"
    },
    {
      nombre: "Gramm-Leach-Bliley Act (GLBA)",
      pais: "🇺🇸 Estados Unidos",
      alcance: "Regula la protección de información financiera de consumidores",
      sanciones: "Sanciones regulatorias por incumplimientos en protección financiera",
      sujeto: "Instituciones financieras y agencias de crédito",
      jurisdiccion: "Estados Unidos",
      aplicabilidad: "Aplica porque Equifax opera como agencia crediticia con datos financieros"
    },
    {
      nombre: "GDPR",
      pais: "🇪🇺 Unión Europea",
      alcance: "Regula estrictamente la protección y tratamiento de datos personales",
      sanciones: "Multas económicas elevadas y obligaciones de notificación",
      sujeto: "Empresas que procesen datos personales de ciudadanos europeos",
      jurisdiccion: "Unión Europea",
      aplicabilidad: "Relevante como estándar internacional y por obligaciones de notificación de brechas"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Marcos Regulatorios Comparados</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">Tabla comparativa de normativas aplicables al caso Equifax</p>

        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <caption className="sr-only">Tabla comparativa de marcos regulatorios</caption>
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marco regulatorio</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alcance</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sanciones</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sujeto regulado</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jurisdicción</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aplicabilidad al caso Equifax</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {marcos.map((m, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-4 whitespace-nowrap align-top">
                    <div className="text-sm font-semibold text-gray-900">{m.nombre}</div>
                    <div className="text-xs text-gray-500">{m.pais}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-normal text-sm text-gray-700 max-w-xs">{m.alcance}</td>
                  <td className="px-4 py-4 whitespace-normal text-sm text-gray-700 max-w-xs">{m.sanciones}</td>
                  <td className="px-4 py-4 whitespace-normal text-sm text-gray-700">{m.sujeto}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{m.jurisdiccion}</td>
                  <td className="px-4 py-4 whitespace-normal text-sm text-gray-700 max-w-md">{m.aplicabilidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-indigo-500">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Alcance</h3>
            <p className="text-gray-700 text-sm">La Ley 21.459 apunta a delitos informáticos; la Ley 19.628 y GDPR protegen la privacidad y datos personales.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Sanciones</h3>
            <p className="text-gray-700 text-sm">Las sanciones varían: penales en la Ley 21.459 y multas económicas importantes en GDPR; la FTC permite acuerdos y sanciones.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Jurisdicción y Aplicabilidad</h3>
            <p className="text-gray-700 text-sm">Combinación de normas nacionales e internacionales permite un análisis amplio del caso Equifax desde varias perspectivas legales.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
