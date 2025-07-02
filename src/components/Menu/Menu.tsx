"use client";
import { useRouter } from "next/navigation";
import styles from "./Menu.module.css";
import { ROUTES } from "@/constants/routes";

function Menu() {
  const router = useRouter();

  const handleNavigateToRecipes = () => {
    router.push(ROUTES.RECIPES);
  };
  const handleNavigateToCreateRecipe = () => {
    router.push(ROUTES.CREATE_RECIPE);
  };
  const handleNavigateToMyCookbook = () => {
    router.push(ROUTES.MY_COOKBOOK);
  };
  return (
    <ul className={styles.menu}>
      <li>
        <button
          type="button"
          className={styles.menuButton}
          onClick={handleNavigateToRecipes}
        >
          Всі рецепти
        </button>
      </li>
      <li>
        <button
          type="button"
          className={styles.menuButton}
          onClick={handleNavigateToCreateRecipe}
        >
          Створити рецепт
        </button>
      </li>
      <li>
        <button
          type="button"
          className={styles.menuButton}
          onClick={handleNavigateToMyCookbook}
        >
          Моя кулінарна книга
        </button>
      </li>
    </ul>
  );
}

export default Menu;
