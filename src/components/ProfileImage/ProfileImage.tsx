"use client";
import Image from "next/image";
import React from "react";
import userImg from "../../../public/user.png";
import { useRouter } from "next/navigation";
import styles from "./ProfileImage.module.css";
import { ROUTES } from "@/constants/routes";

function ProfileImage() {
  const router = useRouter();

  const handleNavigateToProfile = () => {
    router.push(ROUTES.PROFILE);
  };

  return (
    <div>
      <Image
        className={styles.profileImage}
        src={userImg}
        alt="Profile Image"
        width={28}
        height={28}
        onClick={handleNavigateToProfile}
      />
    </div>
  );
}

export default ProfileImage;
