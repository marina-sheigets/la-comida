"use client";
import { useRouter } from "next/navigation";
import styles from "./Menu.module.css";

function Menu() {
  const router = useRouter();

  const handleNavigateToRecipes = () => {
    router.push("/recipes");
  };
  const handleNavigateToCreateRecipe = () => {
    router.push("/create-recipe");
  };
  const handleNavigateToMyCookbook = () => {
    router.push("/my-cookbook");
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
