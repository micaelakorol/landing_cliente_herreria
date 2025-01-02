import React from "react";
import { wspXL } from "@/public/assets/Icons";
import style from "../../../../../public/styles/main_presentation.module.css";
import Icon from "@/app/ui/reusable/Icon";
import CustomLink from "@/app/ui/reusable/CustomLink";
const BtnWhatsApp = () => {
  return (
    <CustomLink href="https://wa.link/ikdtw0" target="_blank" rel="noopener noreferrer">
      <Icon
        src={wspXL}
        alt="wsp"
        className={style.image_wsp}
        height={45}
        width={45}
      />
    </CustomLink>
  );
};

export default BtnWhatsApp;
