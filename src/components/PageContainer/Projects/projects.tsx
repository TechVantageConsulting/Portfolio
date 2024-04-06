import "./projects.scss";

export function Projects() {
  return (
    <div>
      {/* proyecto-1 */}
      <div className="grid grid-cols-2 ">
        <div className="col-span-2 grid grid-cols-1 lg:col-span-1">
          <div className="bg-gray-300 rounded-2xl p-4 lg:rounded-3xl lg:p-8 lg:pr-0">
            <h2 className="text-4xl font-bold pb-10 text-black sm:text-6xl md:text-7xl  xl:text-8xl lg:mr-8 lg:pb-14 tracking-wider">
              New goals require new knowledge
            </h2>
            <p className="text-lg text-black lg:mr-8 lg:pt-6 lg:mr-80">
              We have created and e-learning platform that allows teams to
              finci, share, and use the knowledge they need to achieve their
              goals.
            </p>
          </div>
          {/* left-bottom-imgs */}
          <div className="grid grid-cols-2 rb-0  mb-0 mt-4 gap-y-4 sm:gap-x-4">
            <div className="custom-bg-img-bot min-h-32 rounded-2xl shadow-sm col-span-2 sm:col-span-1 sm:min-h-36 lg:min-h-44 lg:rounded-3xl"></div>
            <div className="custom-bg-img-bot min-h-32 rounded-2xl shadow-sm col-span-2 sm:col-span-1 sm:min-h-36 lg:min-h-44 lg:rounded-3xl"></div>
          </div>
        </div>

        <div className="custom-bg-img rounded-2xl min-h-[500px] col-span-2 mt-4 sm:min-h-[666px] md:min-h-[778px] lg:col-span-1 lg:mt-0 lg:ml-4 lg:rounded-3xl"></div>
      </div>

      {/* proyecto 2 */}
      <div className="grid grid-cols-2 ">
        <div className="custom-bg-img rounded-2xl min-h-[500px] col-span-2 mt-4 sm:min-h-[666px] md:min-h-[778px] lg:col-span-1 lg:mt-0 lg:mt-4 lg:rounded-3xl"></div>
        <div className="col-span-2 grid grid-cols-1 lg:col-span-1 lg:ml-4">
          <div className="bg-gray-300 rounded-2xl p-4 lg:rounded-3xl lg:p-8 lg:pr-0 mt-4">
            <h2 className="text-4xl font-bold pb-10 text-black sm:text-6xl md:text-7xl  xl:text-8xl lg:mr-8 lg:pb-14 tracking-wider">
              New goals require new knowledge
            </h2>
            <p className="text-lg text-black lg:mr-8 lg:pt-6 lg:mr-80">
              We have created and e-learning platform that allows teams to
              finci, share, and use the knowledge they need to achieve their
              goals.
            </p>
          </div>
          {/* right-bottom-imgs */}
          <div className="grid grid-cols-2 rb-0  mb-0 mt-4 gap-y-4 sm:gap-x-4">
            <div className="custom-bg-img-bot min-h-32 rounded-2xl shadow-sm col-span-2 sm:col-span-1 sm:min-h-36 lg:min-h-44 lg:rounded-3xl"></div>
            <div className="custom-bg-img-bot min-h-32 rounded-2xl shadow-sm col-span-2 sm:col-span-1 sm:min-h-36 lg:min-h-44 lg:rounded-3xl"></div>
          </div>
        </div>
      </div>
      {/* proyecto 3 */}
    </div>
  );
}
