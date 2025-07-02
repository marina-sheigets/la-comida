"use client";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import styles from "./LogoComponent.module.css";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";

function LogoComponent() {
  const router = useRouter();

  const handleNavigateToHome = () => {
    router.push(ROUTES.RECIPES);
  };

  return (
    <div>
      <Image
        src={logo}
        alt="La Comida Logo"
        width={58}
        height={66}
        className={styles.logoImage}
        onClick={handleNavigateToHome}
      />
    </div>
  );
}

export default LogoComponent;
