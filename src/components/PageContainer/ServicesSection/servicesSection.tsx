import { Services } from "./Services/services"

export function ServicesSection() {
  return (
    <div id="services" className="blue-bg mt-8 md:mt-20">
      <div className="page-container grid grid-cols-1 px-6 py-10 md:pt-20 md:pb-10">
        <div className="text-4xl font-bold text-center text-white pb-10">
          Servicios que Ofrecemos
        </div>
        <Services />
      </div>
    </div>
  );
}
