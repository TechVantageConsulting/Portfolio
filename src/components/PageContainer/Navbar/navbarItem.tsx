type Props = { itemText: string };

export const NavbarItem = ({ itemText }: Props) => {
  return (
    <li className="px-5">
      <a className="custom-no-bg-button pb-1">{itemText}</a>
    </li>
  );
};
