import "./members.scss";
import members from "../../../assets/Members/members.png";

export function Members() {
  return (
    <div id='team' className="page-container mt-12 md:mt-28">
      <h1 className="text-6xl font-bold pb-10 text-black md:text-center lg:mr-8 lg:pb-14">
      Quienes somos
      </h1>
      <div className=" grid grid-cols-2 text-white ">
        <div className="col-span-2 grid grid-cols-1 lg:col-span-1">
          <div>
            <h3 className="text-lg font-bold pb-3 text-black">
              OUR WORLD CLASS MEMBERS
            </h3>
            <h4 className="text-3xl font-semibold pb-5 text-black">
              Work with real-world experts
            </h4>
            <p className="text-lg mb-6 text-black lg:mr-8 lg:pt-6">
              Our Instructors aren’t just experts with years of real-world
              experience. They have been in your shoes. They make learning fun.
              They make complex topics feel simple. They motivate you. And they
              go above and beyond to help you succeed. They motivate you. And they
              go above and beyond to help you succeed. They motivate you. And they
              go above and beyond to help you succeed.They motivate you. And they
              go above and beyond to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:gap-x-6 lg:gap-x-0 lg:mb-8">
            <div className="custom-bg-gray shadow-lg col-span-2 flex flex-col items-center justify-center py-4 rounded-lg mb-8 sm:col-span-1 sm:mb-6 lg:mb-0 lg:mr-8">
              <h3 className="text-3xl font-bold ">10+</h3>
              <p className="text-lg ">Years of experience</p>
            </div>

            <div className="custom-bg-purple shadow-lg col-span-2 flex flex-col items-center justify-center py-4 rounded-lg mb-8 sm:col-span-1 sm:mb-6 lg:mb-0 lg:mr-8">
              <h3 className="text-3xl font-bold text-white">1.2K</h3>
              <p className="text-lg text-white">Happy customers</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:gap-x-6 lg:gap-x-0">
            <div className="custom-bg-gray shadow-lg col-span-2 flex flex-col items-center justify-center py-4 rounded-lg mb-8 sm:col-span-1 sm:mb-6 lg:mb-0 lg:mr-8">
              <h3 className="text-3xl font-bold ">10+</h3>
              <p className="text-lg ">Years of experience</p>
            </div>

            <div className="custom-bg-purple shadow-lg col-span-2 flex flex-col items-center justify-center py-4 rounded-lg mb-8 sm:col-span-1 sm:mb-6 lg:mb-0 lg:mr-8">
              <h3 className="text-3xl font-bold text-white">1.2K</h3>
              <p className="text-lg text-white">Happy customers</p>
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
