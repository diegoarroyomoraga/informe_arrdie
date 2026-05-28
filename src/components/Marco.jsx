export default function Marco() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">Marco Normativo</h1>
        <p className="text-xl text-gray-600 mb-8">Leyes nacionales e internacionales aplicables al caso Equifax</p>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-500">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-3 text-xl">🇨🇱</span>
              Ley 21.459 sobre Delitos Informáticos (Chile)
            </h2>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              La Ley 21.459 es la principal normativa chilena que regula y sanciona los delitos informáticos. Esta ley protege la seguridad de los sistemas informáticos, la confidencialidad de los datos y la integridad de la información digital frente a accesos no autorizados o ataques tecnológicos.
            </p>
            
            <div className="bg-green-50 p-4 rounded mb-4 border-l-4 border-green-400">
              <h4 className="font-bold text-gray-900 mb-2">Aplicabilidad al caso Equifax:</h4>
              <p className="text-gray-700 text-sm">
                Los atacantes ingresaron ilegalmente a los sistemas de Equifax, comprometiendo la confidencialidad de datos almacenados y la seguridad de los sistemas informáticos protegidos por esta ley.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-500">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-3 text-xl">🇨🇱</span>
              Ley 19.628 sobre Protección de la Vida Privada (Chile)
            </h2>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              La Ley 19.628 regula en Chile el tratamiento y protección de datos personales. Su objetivo es establecer obligaciones para las organizaciones que recopilan, almacenan y utilizan información relacionada con personas naturales.
            </p>
            
            <div className="bg-blue-50 p-4 rounded mb-4 border-l-4 border-blue-400">
              <h4 className="font-bold text-gray-900 mb-2">Aplicabilidad al caso Equifax:</h4>
              <p className="text-gray-700 text-sm">
                La empresa almacenaba enormes cantidades de datos personales de usuarios. La filtración expuso información altamente sensible, afectando la privacidad de millones de personas.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-500">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-3 text-xl">🇺🇸</span>
              Federal Trade Commission Act — FTC Act (Estados Unidos)
            </h2>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              La FTC Act es una normativa estadounidense que permite a la Federal Trade Commission investigar y sancionar prácticas comerciales consideradas injustas o engañosas, especialmente aquellas relacionadas con protección de consumidores y seguridad de datos.
            </p>
            
            <div className="bg-red-50 p-4 rounded mb-4 border-l-4 border-red-400">
              <h4 className="font-bold text-gray-900 mb-2">Aplicabilidad al caso Equifax:</h4>
              <p className="text-gray-700 text-sm">
                Las autoridades estadounidenses determinaron que Equifax no implementó medidas razonables de seguridad. Esta regulación fue fundamental para establecer sanciones económicas posteriores.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-yellow-500">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-3 text-xl">🇺🇸</span>
              Gramm-Leach-Bliley Act — GLBA (Estados Unidos)
            </h2>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              La GLBA es una ley estadounidense enfocada en la protección de información financiera de los consumidores. Esta normativa obliga a instituciones financieras y empresas relacionadas con servicios crediticios a implementar medidas de seguridad.
            </p>
            
            <div className="bg-yellow-50 p-4 rounded mb-4 border-l-4 border-yellow-400">
              <h4 className="font-bold text-gray-900 mb-2">Aplicabilidad al caso Equifax:</h4>
              <p className="text-gray-700 text-sm">
                Equifax opera como agencia de informes crediticios y administra información financiera altamente sensible. La brecha evidenció fallas en la protección de información financiera.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-purple-500">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-3 text-xl">🇪🇺</span>
              General Data Protection Regulation — GDPR (Unión Europea)
            </h2>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              El GDPR es una de las regulaciones de protección de datos personales más importantes a nivel internacional. Establece obligaciones estrictas para las organizaciones que recopilan y procesan información de ciudadanos de la Unión Europea.
            </p>
            
            <div className="bg-purple-50 p-4 rounded mb-4 border-l-4 border-purple-400">
              <h4 className="font-bold text-gray-900 mb-2">Aplicabilidad al caso Equifax:</h4>
              <p className="text-gray-700 text-sm">
                El caso se convirtió en un ejemplo global sobre las consecuencias legales de una brecha de datos masiva. Es frecuentemente utilizado como referencia al analizar regulaciones internacionales de protección de datos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
