import { Services } from "./Services/services";

export function ServicesSection() {
  return (
    <div id="services" className="blue-bg mt-8 md:mt-20">
      <div className="page-container grid grid-cols-1 px-6 py-10 md:pt-20 md:pb-20">
        <div className="text-3xl font-bold text-center text-white pt-10 pb-4 md:pb-20 sm:pt-10 sm:text-4xl md:text-5xl">
          <span className="section-title">SERVICIOS</span>
        </div>
        <Services />
      </div>
    </div>
  );
}
