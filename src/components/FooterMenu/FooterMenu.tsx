"use client";
import { useRouter } from "next/navigation";
import styles from "./FooterMenu.module.css";
import { ROUTES } from "@/constants/routes";

function FooterMenu() {
  const router = useRouter();

  const handleNavigateToAllRecipes = () => {
    router.push(ROUTES.RECIPES);
  };

  const handleNavigateToMyCookbook = () => {
    router.push(ROUTES.MY_COOKBOOK);
  };

  const handleNavigateToExperts = () => {
    router.push(ROUTES.EXPERTS);
  };

  return (
    <div>
      <ul className={styles.footerMenu}>
        <li>
          <button type="button" onClick={handleNavigateToAllRecipes}>
            Всі рецепти
          </button>
        </li>
        <li>
          <button type="button" onClick={handleNavigateToMyCookbook}>
            Moя кулінарна книга
          </button>
        </li>
        <li>
          <button type="button" onClick={handleNavigateToExperts}>
            Експерти
          </button>
        </li>
      </ul>
    </div>
  );
}

export default FooterMenu;
