import Icon from "@/app/ui/reusable/Icon";
import style from '../../../../../public/styles/footer.module.css'
import React from "react";

const PaymentMethod = () => {
  return (
    <section className={style.section_footer}>
      <p>Todos los medios de pago</p>
      <Icon
        src="https://res.cloudinary.com/dgqyqd2pa/image/upload/v1707924669/landing_page_herreria/cuentadni_tqybuu.svg"
        alt="CuentaDNI"
        width={25}
        height={25}
      />
      <Icon
        src="https://res.cloudinary.com/dgqyqd2pa/image/upload/v1707924691/landing_page_herreria/mercadolibre_blnbaw.svg"
        alt="Mercado Pago"
        width={25}
        height={25}
      />
      <Icon
        src="https://res.cloudinary.com/dgqyqd2pa/image/upload/v1707924692/landing_page_herreria/visa_qqxjtc.svg"
        alt="Tarjetas"
        width={25}
        height={25}
      />
    </section>
  );
};

export default PaymentMethod;
