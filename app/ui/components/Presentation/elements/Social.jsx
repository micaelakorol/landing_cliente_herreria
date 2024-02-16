import React from "react";
import style from "../../../../../public/styles/main_presentation.module.css";
import { instagram, facebook, location } from "@/public/assets/Icons";
import Icon from "@/app/ui/reusable/Icon";
import CustomLink from "@/app/ui/reusable/CustomLink";

const Social = () => {
  return (
    <article className={style.social_container}>
      <CustomLink href="https://instagram.com/herreria_javier" target="_blank">
        {" "}
        <Icon
          src={instagram}
          width={21}
          height={21}
          alt="Instagram"
        />
      </CustomLink>
      <CustomLink href="https://www.facebook.com/HerreriaJavier13" target="_blank">
        <Icon
          src={facebook}
          width={21}
          height={21}
          alt="Facebook"
        />
      </CustomLink>
      <CustomLink href="https://www.google.com/maps/place/Berisso,+Provincia+de+Buenos+Aires/@-34.894598,-57.9426093,12z/data=!3m1!4b1!4m6!3m5!1s0x95a2e5b0c4672cb1:0xf36d7ca05f7032cc!8m2!3d-34.8730675!4d-57.8837173!16s%2Fm%2F02z1d82?hl=es_MX&entry=ttu" target="_blank">
        <Icon
          src={location}
          width={25}
          height={24}
          alt="location"
        />
      </CustomLink>
    </article>
  );
};

export default Social;
