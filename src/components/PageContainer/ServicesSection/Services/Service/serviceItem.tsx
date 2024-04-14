import { ReactNode } from "react";

type Props = {
  classname?: string;
  title: string;
  description: string;
  image: ReactNode;
};
export const ServiceItem = ({
  classname,
  title,
  description,
  image,
}: Props) => {
  return (
    <div
      className={`${classname} flex flex-col col-span-6 blue-bg text-white sm:col-span-3 sm:px-4 lg:px-8 lg:col-span-2`}
    >
      <div className="flex justify-center items-center p-8">{image}</div>
      <div className="">
        <h1 className="font-bold text-xl text-center lg:text-2xl">{title}</h1>
        <p className="text-lg py-4 text-center">{description}</p>
      </div>
    </div>
  );
};
