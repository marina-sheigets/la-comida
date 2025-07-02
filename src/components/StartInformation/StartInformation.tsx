import { Icons } from "@/shared/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import styles from "./StartInformation.module.css";
import img from "@/assets/images/start-information-img.png";
import Image from "next/image";

function StartInformation() {
  return (
    <div className={styles.startInformation}>
      <div>
        <p>
          Кулінарний шик: знайдіть свій ідеальний рецепт за допомогою легкого та
          швидкого пошуку за фільтрами
        </p>
        <ButtonComponent
          label="Спробувати"
          endIcon={Icons.ChevronRight}
          variant="gradient-button-orange"
        />
      </div>
      <div>
        <Image
          src={img}
          alt="Start Information Image"
          width={600}
          height={500}
          className={styles.image}
        />
      </div>
    </div>
  );
}

export default StartInformation;
