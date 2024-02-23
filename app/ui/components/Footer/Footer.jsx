import React from "react";
import style from "../../../../public/styles/footer.module.css";
import PaymentMethod from "./elements/PaymentMethod";
import Phones from "./elements/Phones";
import Social from "./elements/Social";
const Footer = () => {
  return (
    <footer className={style.container_footer}>
      <PaymentMethod />
      <Phones />
      <Social />
    </footer>
  );
};

export default Footer;
