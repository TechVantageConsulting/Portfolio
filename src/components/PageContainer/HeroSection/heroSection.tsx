import "./heroSection.scss";
import compound from "../../../assets/HeroSection/compound-2.png";

export const HeroSection = () => {
  return (
    <section className="page-container heroSection p-4 mt-8 sm:mt-12 lg:mt-16 xl:mt-24">
      <h1>Construyendo Online</h1>
      <h2>Tu Presencia Digital.</h2>
      <p className="mt-12 text-center text-2xl">
        Desarrollamos la presencia digital de tu negocio desde cero, diseñando
        sitios web personalizados que reflejan la identidad de tu marca y se
        conectan con tu audiencia de manera efectiva.
      </p>
      <div className="text-center mt-8">
        <a className="btn custom-bg-button text-lg" href="#contact">
          HABLEMOS
        </a>
      </div>
      <div className="mt-24">
        <img className="ml-2" src={compound} alt="compound" />
      </div>
      <h3 className="font-bold text-xl md:text-4xl">
        Colaboramos con empresas del mundo entero, sin importar
        el ámbito, para hacer realidad sus ideas.
      </h3>
    </section>
  );
};
