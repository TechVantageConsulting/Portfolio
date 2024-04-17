import "./projects.scss";

export function Projects() {
  return (
    <div id="projects" className="page-container mt-12 md:mt-14 lg:mt-28">
      <h1 className="text-3xl text-center font-bold md:pb-10 text-black my-10 sm:text-4xl md:text-5xl lg:mr-8 lg:pb-14">
        <span className="section-title">PROYECTOS</span>
      </h1>
      {/* proyecto-1 */}
      <div className="grid grid-cols-2 mb-10">
        <div className="col-span-2 grid grid-cols-1 lg:col-span-1">
          <div className="bg-gray-50 rounded-2xl p-4 lg:rounded-3xl lg:p-8 lg:pr-0">
            <h2 className="text-2xl font-bold pb-4 text-black sm:text-3xl md:text-4xl lg:mr-8 tracking-wider">
              Plataforma Fitness Multiplataforma
            </h2>
            <p className="text-lg text-black lg:mr-8 lg:pt-6 lg:mr-60">
              Aplicación web y móvil desarrollada para un gimnasio líder. Ofrece
              a los usuarios una experiencia completa de seguimiento de fitness,
              desde la programación de entrenamientos personalizados hasta el
              monitoreo del progreso. La plataforma integra funciones de reserva
              de clases, seguimiento de objetivos, y acceso a recursos de salud
              y nutrición. Con un diseño intuitivo y funcionalidades avanzadas,
              promueve un estilo de vida saludable y activo para los usuarios
              del gimnasio, mejorando así su compromiso y resultados.
            </p>
          </div>
          {/* left-bottom-imgs */}
          <div className="grid grid-cols-2 rb-0  mb-0 mt-4 gap-y-4 sm:gap-x-4">
            <div className="first-project-second-photo min-h-32 rounded-2xl shadow-sm col-span-2 sm:col-span-1 sm:min-h-36 lg:min-h-44 lg:rounded-3xl"></div>
            <div className="first-project-third-photo min-h-32 rounded-2xl shadow-sm col-span-2 sm:col-span-1 sm:min-h-36 lg:min-h-44 lg:rounded-3xl"></div>
          </div>
        </div>

        <div className="first-project-main-photo rounded-2xl min-h-[500px] col-span-2 mt-4 sm:min-h-[666px] md:min-h-[778px] lg:col-span-1 lg:mt-0 lg:ml-4 lg:rounded-3xl"></div>
      </div>

      {/* proyecto 2 */}
      <div className="grid grid-cols-2 ">
        <div className="second-project-main-photo rounded-2xl min-h-[500px] col-span-2 mt-4 sm:min-h-[666px] md:min-h-[778px] lg:col-span-1 lg:mt-0 lg:mt-4 lg:rounded-3xl order-1 md:order-none"></div>
        <div className="col-span-2 grid grid-cols-1 lg:col-span-1 lg:ml-4">
          <div className="bg-gray-50 rounded-2xl p-4 lg:rounded-3xl lg:p-8 lg:pr-0 mt-4">
            <h2 className="text-2xl font-bold pb-4 text-black sm:text-3xl md:text-4xl  lg:mr-8 tracking-wider">
              Plataforma de Promoción Empresarial
            </h2>
            <p className="text-lg text-black lg:mr-8 lg:pt-6 lg:mr-60">
              Aplicación web diseñada para impulsar proyectos
              empresariales de emprendedores. Conecta a emprendedores con
              recursos clave, como financiamiento, mentores y oportunidades de
              colaboración. Ofrece una amplia gama de proyectos para explorar,
              desde startups tecnológicas hasta iniciativas sociales. Además,
              proporciona herramientas de seguimiento y análisis para medir el
              impacto y el crecimiento de los proyectos. Es el punto de partida
              ideal para emprendedores que buscan impulsar sus ideas y alcanzar
              el éxito empresarial.
            </p>
          </div>
          {/* right-bottom-imgs */}
          <div className="grid grid-cols-2 rb-0  mb-0 mt-4 gap-y-4 sm:gap-x-4">
            <div className="second-project-second-photo min-h-32 rounded-2xl shadow-sm col-span-2 sm:col-span-1 sm:min-h-36 lg:min-h-44 lg:rounded-3xl"></div>
            <div className="second-project-third-photo min-h-32 rounded-2xl shadow-sm col-span-2 sm:col-span-1 sm:min-h-36 lg:min-h-44 lg:rounded-3xl"></div>
          </div>
        </div>
      </div>
      {/* proyecto 3 */}
    </div>
  );
}
