import { heroIcons } from "../constants";

function HeroIcons({ className }) {
  // Returned JSX
  return (
    <ul className={className}>
      {heroIcons.map((icon, i) => (
        <li className="p-5" key={i}>
          <img src={icon} width={24} height={25} alt="Icon" />
        </li>
      ))}
    </ul>
  );
}

export default HeroIcons;
