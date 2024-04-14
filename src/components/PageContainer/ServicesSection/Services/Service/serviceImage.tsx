type Props = {
  image: string;
  description: string;
};

export const ItemImage = ({ image, description }: Props) => (
  <img src={image} alt={description} className="w-14" />
);
