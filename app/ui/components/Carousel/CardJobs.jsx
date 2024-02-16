'use client'
import React from "react";
import style from "../../../../public/styles/cardJobs.module.css";
import { images } from "@/app/lib/dataImages";
import { Element } from "react-scroll";
import Icon from "../../reusable/Icon";

const CardJobs = () => {
  const image = images.item;
  return (
    <Element name="jobs">
      <h3 className={style.title_card}>
        Conocé algunos de nuestros trabajos realizados{" "}
      </h3>
      <div className={style.container_card}>
        {image.map((item) => (
          <div key={item.id} className={style.image_card}>
            <Icon src={item.src} alt={item.alt} width={300} height={350} />
          </div>
        ))}
      </div>
    </Element>
  );
};

export default CardJobs;
