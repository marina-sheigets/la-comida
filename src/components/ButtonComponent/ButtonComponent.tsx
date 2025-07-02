import { Icons } from "@/shared/icons";
import styles from "./ButtonComponent.module.css";
import { renderIcon } from "@/shared/renderIcon";
import { IconColor } from "@/shared/iconsColors";
import { IconName } from "@/shared/iconsNames";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant =
  | "gradient-button-orange"
  | "gradient-red2"
  | "blank"
  | "red"
  | "red-outlined"
  | "text";

interface IButton {
  label: string;
  variant?: ButtonVariant;
  onClick?: () => void;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  width?: string;
  startIcon?: (typeof Icons)[keyof typeof Icons];
  endIcon?: (typeof Icons)[keyof typeof Icons];
}

function ButtonComponent({
  variant = "gradient-button-orange",
  label,
  onClick,
  disabled = false,
  size = "medium",
  fullWidth = false,
  width = "auto",
  startIcon,
  endIcon,
}: Readonly<IButton>) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles["full-width"] : ""} ${styles[width]}`}
      disabled={disabled}
      onClick={onClick}
      style={width ? { width } : undefined}
    >
      {startIcon &&
        renderIcon(startIcon, {
          color: IconColor[variant],
          alt: IconName[startIcon],
        })}
      {label}
      {endIcon &&
        renderIcon(endIcon, {
          color: IconColor[variant],
          alt: IconName[endIcon],
        })}
    </button>
  );
}

export default ButtonComponent;
