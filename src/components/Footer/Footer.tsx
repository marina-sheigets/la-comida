import FooterMenu from "../FooterMenu/FooterMenu";
import LogoComponent from "../LogoComponent/LogoComponent";
import SocialMediasComponent from "../SocialMediasComponent/SocialMediasComponent";
import SubscribeOnNewsComponent from "../SubscribeOnNewsComponent/SubscribeOnNewsComponent";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <LogoComponent />
      <FooterMenu />
      <SubscribeOnNewsComponent />
      <SocialMediasComponent />
    </div>
  );
}

export default Footer;
