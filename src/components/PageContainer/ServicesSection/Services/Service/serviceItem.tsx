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
      className={`${classname} grid grid-cols-12 col-span-12 blue-bg text-white md:gap-8 md:pl-2 md:pt-14 lg:col-span-6 lg:pt-10 lg:gap-14 lg:pl-8 xl:col-span-4 xl:pl-2`}
    >
      <div className="grid col-span-12 py-4 md:col-span-1 md:items-center md:justify-center">
        {image}
      </div>
      <div className="col-span-12 md:col-span-11 lg:col-span-7">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-lg py-4">{description}</p>
      </div>
    </div>
  );
};
