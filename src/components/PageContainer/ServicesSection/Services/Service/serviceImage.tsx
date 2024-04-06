type Props = {
  image: string;
  description: string;
};

export const ItemImage = ({ image, description }: Props) => (
  <img src={image} alt={description} className="min-h-[75px] min-w-[75px]" />
);
