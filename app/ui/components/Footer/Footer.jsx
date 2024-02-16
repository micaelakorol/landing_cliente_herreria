import React from "react";
import Image from "next/image";
import style from "../../../../public/styles/footer.module.css";
import PaymentMethod from "./elements/PaymentMethod";
import Phones from "./elements/Phones";
import CustomLink from "../../reusable/CustomLink";
const Footer = () => {
  return (
    <footer className={style.container_footer}>
      <PaymentMethod />
      <Phones />
      <section>
        <p>E-mail:</p>
        <CustomLink href="mailto:herreriajavierk@hotmail.com">
          herreriajavierk@hotmail.com{" "}
        </CustomLink>
      </section>
    </footer>
  );
};

export default Footer;
