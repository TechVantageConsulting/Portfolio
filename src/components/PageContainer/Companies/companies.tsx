import aerticket from "../../../assets/Companies/aerticket.png";
import bde from "../../../assets/Companies/bde.png";
import ceu from "../../../assets/Companies/ceu.png";
import madrid from "../../../assets/Companies/comunidad-madrid.png";
import dkultura from "../../../assets/Companies/dkultura.png";
import navarra from "../../../assets/Companies/gobierno-navarra.png";
import telekom from "../../../assets/Companies/telekom.png";
import "./companies.scss";

export const Companies = () => {
  return (
    <div className="companies-carrousel flex-center flex-col lg:flex-row">
      <img src={telekom} alt="telekom" />
      <img src={aerticket} alt="aerticket" />
      <img src={bde} alt="bde" />
      <img src={ceu} alt="ceu" />
      <img src={madrid} alt="madrid" />
      <img src={dkultura} alt="dkultura" />
      <img src={navarra} alt="navarra" />
    </div>
  );
};
