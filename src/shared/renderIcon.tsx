import Image from "next/image";

export const renderIcon = (
  iconSrc: string,
  props: { alt?: string; size?: number; color?: string } = {},
) => {
  const { alt = "icon", size = 25, color } = props;
  return (
    <Image
      src={iconSrc}
      alt={alt}
      width={size}
      height={size}
      style={{ color }}
    />
  );
};
