type Props = { link: string; itemText: string };

export const NavbarItem = ({ link, itemText }: Props) => {
  return (
    <li className="px-5">
      <a href={link} className="custom-no-bg-button navbar-item pb-4 pt-4 text-xl lg:text-lg">
        {itemText}
      </a>
    </li>
  );
};
