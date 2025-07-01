"use client";
import { useRouter } from "next/navigation";
import styles from "./FooterMenu.module.css";

function FooterMenu() {
  const router = useRouter();

  const handleNavigateToAllRecipes = () => {
    router.push("/recipes");
  };

  const handleNavigateToMyCookbook = () => {
    router.push("/my-cookbook");
  };

  const handleNavigateToExperts = () => {
    router.push("/experts");
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
