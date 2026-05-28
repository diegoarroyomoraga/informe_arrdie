export default function Resumen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">Caso Equifax 2017</h1>
        <h2 className="text-2xl text-indigo-600 font-semibold mb-8">¿Qué pasó?</h2>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-gray-700 mb-4 leading-relaxed">
            En 2017, la empresa estadounidense Equifax sufrió una grave brecha de seguridad que permitió el acceso no autorizado a información personal y financiera de aproximadamente 147 millones de personas. El ataque ocurrió debido a una vulnerabilidad crítica en Apache Struts, un framework utilizado por la empresa en sus aplicaciones web.
          </p>
          
          <p className="text-gray-700 mb-4 leading-relaxed">
            Los atacantes aprovecharon esta vulnerabilidad para ingresar a los sistemas internos de Equifax y extraer grandes cantidades de información confidencial almacenada en sus bases de datos. Entre los datos comprometidos se encontraban nombres completos, fechas de nacimiento, direcciones, números de seguro social, licencias de conducir y datos financieros de millones de usuarios.
          </p>
          
          <p className="text-gray-700 mb-4 leading-relaxed">
            La vulnerabilidad utilizada en el ataque correspondía a la falla conocida como CVE-2017-5638. Aunque el parche de seguridad había sido publicado antes del incidente, Equifax no aplicó la actualización a tiempo, dejando sus sistemas expuestos. Esto permitió que los atacantes permanecieran dentro de la infraestructura tecnológica de la empresa durante varias semanas sin ser detectados.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            El incidente se convirtió rápidamente en uno de los casos de filtración de datos más importantes de la historia debido a la enorme cantidad de personas afectadas y a la sensibilidad de la información expuesta.
          </p>
        </div>

        <h2 className="text-2xl text-indigo-600 font-semibold mb-8 mt-12">¿Cuándo ocurrió?</h2>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-gray-700 mb-4 leading-relaxed">
            El ataque ocurrió entre mayo y julio de 2017. Durante ese período, los atacantes permanecieron dentro de los sistemas de Equifax recopilando información sin ser detectados.
          </p>
          
          <p className="text-gray-700 mb-4 leading-relaxed">
            La empresa detectó la intrusión a finales de julio de 2017, pero el incidente fue comunicado públicamente recién en septiembre del mismo año. Esta demora generó fuertes críticas hacia la compañía, ya que millones de personas desconocían que sus datos personales habían sido comprometidos.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Después de hacerse pública la brecha de seguridad, comenzaron investigaciones gubernamentales, demandas judicales y auditorías relacionadas con las medidas de seguridad implementadas por la empresa.
          </p>
        </div>

        <h2 className="text-2xl text-indigo-600 font-semibold mb-8 mt-12">¿Quiénes participaron?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Equifax</h3>
            <p className="text-gray-700 text-sm">
              La empresa afectada y principal responsable. Una de las principales agencias de informes crediticios del mundo que fue ampliamente cuestionada por no aplicar oportunamente actualizaciones de seguridad.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Los atacantes</h3>
            <p className="text-gray-700 text-sm">
              Responsables del ataque atribuidos a miembros vinculados al ejército chino. Lograron acceder a servidores internos y extraer información durante varias semanas sin ser detectados.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Usuarios afectados</h3>
            <p className="text-gray-700 text-sm">
              Millones de personas cuyos datos personales quedaron expuestos. Enfrentaron riesgos de robo de identidad, fraudes financieros y uso indebido de información privada.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Autoridades regulatorias</h3>
            <p className="text-gray-700 text-sm">
              FTC, Congreso de Estados Unidos y otras instituciones investigaron la brecha y aplicaron sanciones correspondientes.
            </p>
          </div>
        </div>

        <h2 className="text-2xl text-indigo-600 font-semibold mb-8 mt-12">Impacto del incidente</h2>
        
        <div className="bg-indigo-50 border-l-4 border-indigo-600 rounded-lg p-6 space-y-4">
          <div>
            <h4 className="font-bold text-gray-900 mb-2">💔 Impacto sobre las personas</h4>
            <p className="text-gray-700 text-sm">Aumentó significativamente el riesgo de robo de identidad y fraudes financieros.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-2">💰 Impacto económico</h4>
            <p className="text-gray-700 text-sm">Equifax enfrentó pérdidas millonarias por demandas, investigaciones y compensaciones.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-2">📉 Impacto reputacional</h4>
            <p className="text-gray-700 text-sm">Pérdida importante de confianza pública y críticas internacionales.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-2">⚖️ Impacto legal y regulatorio</h4>
            <p className="text-gray-700 text-sm">Investigaciones oficiales, sanciones regulatorias e impulso de debates sobre ciberseguridad.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
