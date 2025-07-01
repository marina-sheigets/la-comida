import LogoComponent from "../LogoComponent/LogoComponent";
import Menu from "../Menu/Menu";
import ProfileImage from "../ProfileImage/ProfileImage";
import styles from "./NavigationMenu.module.css";

function NavigationMenu() {
  return (
    <div className={styles.navigationMenu}>
      <LogoComponent />
      <Menu />
      <ProfileImage />
    </div>
  );
}

export default NavigationMenu;
