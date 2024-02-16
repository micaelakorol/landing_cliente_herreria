"use client";
import React from "react";
import style from "../../../../public/styles/navigation.module.css";
import { logo } from "@/public/assets/Icons";
import { Link } from "react-scroll";
import Icon from "../../reusable/Icon";
import CustomLink from "../../reusable/CustomLink";

const Navigation = () => {
  return (
    <header className={style.container_navigation}>
      <Icon alt="logo" src={logo} width={50} height={50} />
      <nav className={style.container_btn}>
        {/* Link service */}
        <CustomLink href="tel:2215404185" className={style.btn_navigation} />
        <Link
          activeClass="active"
          to="services"
          className={style.btn_navigation}
        >
          Servicios
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
