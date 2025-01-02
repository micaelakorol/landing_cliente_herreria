"use client";
import React from "react";
import style from "../../../../public/styles/services.module.css";
import Cards from "./Cards";
import { Element } from "react-scroll";
const Services = () => {
  return (
    <Element name="services">
      <h2 className={style.title_service}>Explora nuestros servicios </h2>
      <Cards />
    </Element>
  );
};

export default Services;
