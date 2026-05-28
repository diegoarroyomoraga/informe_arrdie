export default function ComparacionArrdie() {
  const marcos = [
    {
      nombre: "Ley 21.459",
      pais: "🇨🇱 Chile",
      alcance: "Regula delitos informáticos como acceso ilícito y ataques a sistemas",
      sanciones: "Sanciones penales y penas privativas de libertad",
      sujeto: "Personas que cometan delitos informáticos",
      jurisdiccion: "Chile",
      aplicabilidad: "Acceso no autorizado a sistemas y extracción ilegal de información"
    },
    {
      nombre: "Ley 19.628",
      pais: "🇨🇱 Chile",
      alcance: "Regula protección de datos personales",
      sanciones: "Responsabilidades por uso indebido o exposición de datos",
      sujeto: "Empresas que almacenan datos personales",
      jurisdiccion: "Chile",
      aplicabilidad: "Equifax almacenaba información sensible afectada por la filtración"
    },
    {
      nombre: "FTC Act",
      pais: "🇺🇸 Estados Unidos",
      alcance: "Protege a consumidores frente a prácticas injustas o engañosas",
      sanciones: "Investigaciones y sanciones económicas",
      sujeto: "Empresas comerciales",
      jurisdiccion: "Estados Unidos",
      aplicabilidad: "Fue utilizada para investigar deficiencias de seguridad de Equifax"
    },
    {
      nombre: "Gramm-Leach-Bliley Act",
      pais: "🇺🇸 Estados Unidos",
      alcance: "Regula protección de información financiera",
      sanciones: "Sanciones regulatorias",
      sujeto: "Instituciones financieras y agencias de crédito",
      jurisdiccion: "Estados Unidos",
      aplicabilidad: "Equifax opera como agencia crediticia con información financiera sensible"
    },
    {
      nombre: "GDPR",
      pais: "🇪🇺 Unión Europea",
      alcance: "Protección estricta de datos personales",
      sanciones: "Multas económicas elevadas",
      sujeto: "Empresas que procesan datos europeos",
      jurisdiccion: "Unión Europea",
      aplicabilidad: "Referencia internacional sobre protección de datos y brechas"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">Marcos Regulatorios Comparados</h1>
        <p className="text-xl text-gray-600 mb-8">Análisis comparativo de normativas aplicables al caso Equifax</p>

        <div className="space-y-6">
          {marcos.map((marco, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-6">
                <h2 className="text-2xl font-bold text-white mb-1">{marco.nombre}</h2>
                <p className="text-indigo-100 text-lg">{marco.pais}</p>
              </div>
              
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2">Alcance</h4>
                  <p className="text-gray-700 text-sm">{marco.alcance}</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2">Sanciones</h4>
                  <p className="text-gray-700 text-sm">{marco.sanciones}</p>
                </div>

                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2">Sujeto Regulado</h4>
                  <p className="text-gray-700 text-sm">{marco.sujeto}</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2">Jurisdicción</h4>
                  <p className="text-gray-700 text-sm">{marco.jurisdiccion}</p>
                </div>

                <div className="lg:col-span-2 border-l-4 border-pink-500 pl-4">
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2">Aplicabilidad al caso</h4>
                  <p className="text-gray-700 text-sm">{marco.aplicabilidad}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-indigo-500">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Enfoque por Alcance</h3>
            <p className="text-gray-700 text-sm">
              Mientras la Ley 21.459 se enfoca en delitos informáticos, la Ley 19.628 y GDPR se orientan a protección de datos personales.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Diferencias en Sanciones</h3>
            <p className="text-gray-700 text-sm">
              La Ley 21.459 contempla sanciones penales, mientras que GDPR establece multas económicas más altas internacionalmente.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Sujeto Regulado</h3>
            <p className="text-gray-700 text-sm">
              La Ley 21.459 enfoca en personas delincuentes, mientras que otras regulan principalmente organizaciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
