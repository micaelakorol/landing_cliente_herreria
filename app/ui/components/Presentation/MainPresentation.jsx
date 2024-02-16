'use client'
import React from "react";
import style from "../../../../public/styles/main_presentation.module.css";
import Social from "./elements/Social";
import BtnWhatsApp from "./elements/BtnWhatsApp";
import { Link } from "react-scroll";
import { working } from "@/public/assets/Icons";
import Icon from "../../reusable/Icon";
const MainPresentation = () => {
  return (
    <>
      <BtnWhatsApp />
      <main className={style.container_presentation}>
        <section className={style.aboutHerreria}>
          <h1 className={style.welcome_title}>
            ¡Te damos la <span>bienvenida!</span>
          </h1>
          <p className={style.subtitle}>
            a Herrería Javier. Contamos con más de 10 de experiencia en el
            rubro. <br />
            Ofrecemos productos de calidad y alta durabilidad.
          </p>
          {/* conocé mi trabajo, lleva a un apartado de imagenes con fotos de mis trabajos.*/}
          <Link activeClass="active" to="jobs" className={style.btn_work}>
            Conocé nuestro trabajo
          </Link>
          {/** Social media */}
          <Social />
        </section>

        <section>
          <Icon src={working} alt="working" width={420} height={420} className={style.working} />
        </section>
      </main>
    </>
  );
};

export default MainPresentation;
