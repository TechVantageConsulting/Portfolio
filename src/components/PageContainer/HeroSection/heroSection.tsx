import "./heroSection.scss";
import compound from "../../../assets/HeroSection/compound-2.png";

export const HeroSection = () => {
  return (
    <section className="heroSection mt-28 p-4">
      <h1>Build your dreams.</h1>
      <h2>Build your future.</h2>
      <p className="mt-12 text-center text-2xl">
        The most efficient and supportive way for you to learn in-demand skills,
        get hired, and advance your career.
      </p>
      <div className="text-center mt-8">
        <a className="btn custom-bg-button text-lg">CONTACTANOS</a>
      </div>
      <div className="mt-24">
        <img className="ml-2" src={compound} alt="compound" />
      </div>
      <h3 className="font-bold">
        We work with companies from all around the world across any field,
        bringing their ideas to life.
      </h3>
    </section>
  );
};
