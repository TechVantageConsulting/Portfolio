type Props = { link: string; itemText: string };

export const NavbarItem = ({ link, itemText }: Props) => {
  return (
    <li className="px-5">
      <a href={link} className="custom-no-bg-button pb-1">
        {itemText}
      </a>
    </li>
  );
};
