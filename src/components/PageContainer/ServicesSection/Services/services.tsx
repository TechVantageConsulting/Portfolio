import book from "../../../../assets/Services/book.png";
import edit from "../../../../assets/Services/edit.png";
import glass from "../../../../assets/Services/magnifying-glass.png";
import idea from "../../../../assets/Services/idea.png";
import smartphone from "../../../../assets/Services/smartphone.png";
import verified from "../../../../assets/Services/verified.png";
import { ItemImage } from "./Service/serviceImage";
import { ServiceItem } from "./Service/serviceItem";

export function Services() {
  return (
    <div className="grid grid-cols-12 lg:gap-x-10">
      <ServiceItem
        title="Diseño Web Personalizado"
        description="Creamos sitios web a medida que reflejan la identidad de tu marca y
            proporcionan una experiencia visualmente impactante. Nos aseguramos
            de que tu sitio web destaque en un mercado digital competitivo."
        image={<ItemImage image={edit} description="edit" />}
      />
      <ServiceItem
        title="Desarrollo de Aplicaciones Móviles"
        description="Diseñamos y desarrollamos aplicaciones móviles personalizadas para
        iOS, Android o ambas plataformas. Ofrecemos una aplicación intuitiva
        y funcional que lleva la experiencia de tu marca directamente a tus
        usuarios."
        image={<ItemImage image={smartphone} description="smartphone" />}
      />
      <ServiceItem
        title="SEO y Visibilidad Online"
        description="Maximizamos la visibilidad de tu negocio en línea mediante
        estrategias de SEO probadas y efectivas. Trabajamos para mejorar tu
        clasificación en los motores de búsqueda y aumentar el tráfico
        orgánico a tu sitio web."
        image={<ItemImage image={glass} description="glass" />}
      />
      <ServiceItem
        title="Gestión de Contenidos"
        description="Nuestro equipo se dedica a la creación y gestión de contenido diseñado específicamente para su web o app. Garantizamos que los contenidos sean coherenten y valiosos para su audiencia, ayudándole a alcanzar sus objetivos y fortalecer su presencia en línea."
        image={<ItemImage image={book} description="book" />}
      />
      <ServiceItem
        title="Consultoría Tecnológica"
        description="Ofrecemos asesoramiento experto en tecnología para ayudarte a
        implementar soluciones tecnológicas en tu negocio. Estamos aquí para
        proporcionarte las soluciones que necesitas para tener éxito en un
        mundo digital en constante evolución."
        image={<ItemImage image={idea} description="idea" />}
      />
      <ServiceItem
        classname="pb-10"
        title="Soporte y Mantenimiento Continuo"
        description="Nos comprometemos a brindarte un soporte técnico continuo para
        garantizar el funcionamiento sin problemas de tu presencia en línea.
        Estamos disponibles para resolver cualquier problema técnico y
        mantener tu sitio web o aplicación móvil en su mejor estado."
        image={<ItemImage image={verified} description="verified" />}
      />
    </div>
  );
}
