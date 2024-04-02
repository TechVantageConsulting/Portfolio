import "./projects.scss";

export function Projects() {
  return (
    <div>
      <div className="bg-black grid place-items-center">
        <div className="bg-white px-10 py-4 rounded-3xl m-10">
          <p className="text-3xl font-bold custom-bg-purple">Adrian Danlos</p>
          <p className="text-3xl text-black">Tech Lead </p>
        </div>
      </div>

      <div className="bg-black grid place-items-center">
        <div className="bg-white px-10 py-4 rounded-3xl m-10">
          <p className="text-3xl font-bold custom-bg-purple">Jorge Del Pino</p>
          <p className="text-3xl text-black">Software Architect</p>
        </div>
      </div>

      <div className="bg-black grid place-items-center">
        <div className="bg-white px-10 py-4 rounded-3xl m-10">
          <p className="text-3xl font-bold custom-bg-purple">
            Jhostin Del Pino
          </p>
          <p className="text-3xl text-black">Director of sales</p>
          <p className="text-3xl text-black">and marketing</p>
        </div>
      </div>

      <div className="bg-black grid place-items-center">
        <div className="bg-white px-10 py-4 rounded-3xl m-10">
          <p className="text-3xl font-bold custom-bg-purple">Joel Encinas</p>
          <p className="text-3xl text-black">Software engineer</p>
        </div>
      </div>
    </div>
  );
}
