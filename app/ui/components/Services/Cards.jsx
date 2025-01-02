import React from "react";
import card from "../../../../public/styles/services.module.css";
import IconCheck from "./elements/IconCheck";
import { services } from "@/app/lib/dataServices";
const Cards = () => {
  const service = services.item;
  return (
      <section className={card.card_container_service}>
        {service.map((item) => (
          <div key={item.id}>
            <IconCheck />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
  );
};

export default Cards;
