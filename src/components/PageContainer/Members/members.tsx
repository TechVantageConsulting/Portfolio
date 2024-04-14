import members from "../../../assets/Members/members.png";

export function Members() {
  return (
    <div id="team" className="page-container mt-12 md:mt-28">
      <h1 className="text-3xl font-bold pb-10 text-black text-center sm:text-5xl md:text-6xl lg:mr-8 lg:pb-14">
        Quienes somos
      </h1>
      <div className=" grid grid-cols-2 text-white ">
        <div className="col-span-2 grid grid-cols-1 lg:col-span-1">
          <div>
            <h3 className="text-md font-bold pb-3 text-black md:text-lg">
              CONÓCENOS
            </h3>
            <h4 className="text-2xl font-semibold text-black sm:text-3xl md:text-5xl">
              Expertos en el mundo digital
            </h4>
            <p className="text-lg my-8 text-black lg:mr-8 lg:pt-6 md:mt-6">
              Nos apasiona ayudar a empresas de todos los tamaños a alcanzar su
              máximo potencial en el mundo digital. Con años de experiencia en
              diseño web, desarrollo de aplicaciones móviles y consultoría
              tecnológica, nuestro equipo está dedicado a ofrecer soluciones
              innovadoras y personalizadas que impulsen el éxito de nuestros
              clientes. Nos comprometemos a proporcionar un servicio
              excepcional, colaborando estrechamente con nuestros clientes para
              entender sus necesidades y ofrecer resultados sobresalientes. Tu
              éxito es nuestra prioridad, y estamos aquí para acompañarte en
              cada paso del camino hacia el crecimiento y la excelencia en
              línea.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:gap-x-6 lg:gap-x-0 lg:mb-8">
            <div className="blue-bg shadow-lg col-span-2 flex flex-col items-center justify-center py-4 rounded-lg mb-8 sm:col-span-1 sm:mb-6 lg:mb-0 lg:mr-8">
              <h3 className="text-3xl font-bold ">5+</h3>
              <p className="text-lg ">Años de experiencia</p>
            </div>

            <div className="blue-bg shadow-lg col-span-2 flex flex-col items-center justify-center py-4 rounded-lg mb-8 sm:col-span-1 sm:mb-6 lg:mb-0 lg:mr-8">
              <h3 className="text-3xl font-bold text-white">100+</h3>
              <p className="text-lg text-white">Proyectos realizados</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:gap-x-6 lg:gap-x-0">
            <div className="gray-bg shadow-lg col-span-2 flex flex-col items-center justify-center py-4 rounded-lg mb-8 sm:col-span-1 sm:mb-6 lg:mb-0 lg:mr-8">
              <h3 className="text-3xl font-bold ">100%</h3>
              <p className="text-lg ">Cliente Satisfechos</p>
            </div>

            <div className="gray-bg shadow-lg col-span-2 flex flex-col items-center justify-center py-4 rounded-lg mb-8 sm:col-span-1 sm:mb-6 lg:mb-0 lg:mr-8">
              <h3 className="text-3xl font-bold text-white">+75%</h3>
              <p className="text-lg text-white">Aumento del tráfico web</p>
            </div>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1 lg:flex lg:items-center lg:justify-center">
          <img src={members} alt="members" className="max-auto" />
        </div>
      </div>
    </div>
  );
}
