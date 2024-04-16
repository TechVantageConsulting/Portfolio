import { Services } from "./Services/services";

export function ServicesSection() {
  return (
    <div id="services" className="blue-bg mt-8 md:mt-20">
      <div className="page-container grid grid-cols-1 px-6 py-10 md:pt-20 md:pb-20">
        <div className="text-3xl font-bold text-center text-white pt-10 pb-20 sm:pt-10 sm:text-5xl md:text-6xl">
          Servicios que Ofrecemos
        </div>
        <Services />
      </div>
    </div>
  );
}
